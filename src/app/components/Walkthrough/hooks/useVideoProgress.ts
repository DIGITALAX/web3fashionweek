"use client";

import { useState, useEffect, RefObject } from "react";
import { VideoProgress } from "../types/walkthrough.types";
import { STORAGE_KEY } from "@/app/lib/constants";

const getProgress = (): VideoProgress => {
  if (typeof window === "undefined") return {};
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
};

const setProgress = (videoId: string) => {
  const progress = getProgress();
  progress[videoId] = {
    watched: true,
    watchedAt: Date.now(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const isVideoWatched = (videoId: string): boolean => {
  const progress = getProgress();
  return progress[videoId]?.watched || false;
};

export const useVideoProgress = (
  videoRef: RefObject<HTMLVideoElement | null>,
  videoId: string,
  onComplete?: () => void
) => {
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    const alreadyWatched = isVideoWatched(videoId);
    if (alreadyWatched) {
      setIsComplete(true);
    }
  }, [videoId]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || isComplete) return;

    const handleComplete = () => {
      setProgress(videoId);
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
    };

    const handleTimeUpdate = () => {
      if (!video.duration || isNaN(video.duration)) return;
      const percentWatched = (video.currentTime / video.duration) * 100;
      if (percentWatched >= 95) {
        handleComplete();
      }
    };

    const handleEnded = () => {
      handleComplete();
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [videoRef, videoId, isComplete, onComplete]);

  return { isComplete };
};

export default useVideoProgress;
