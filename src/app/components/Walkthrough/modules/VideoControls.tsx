"use client";

import { useState, useEffect } from "react";
import { VideoControlsProps } from "@/app/components/Walkthrough/types/walkthrough.types";
import { getFontGrav } from "@/app/lib/constants";

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const VideoControls = ({ videoRef, lang }: VideoControlsProps) => {
  const fontClass = getFontGrav(lang);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isDraggingVolume, setIsDraggingVolume] = useState<boolean>(false);
  const [isDraggingProgress, setIsDraggingProgress] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    if (video.duration) setDuration(video.duration);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, [videoRef]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = volume;
    video.muted = volume === 0;
  }, [volume, videoRef]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleVolumeMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDraggingVolume(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newVolume = Math.max(0, Math.min(1, x / rect.width));
    setVolume(newVolume);
  };

  const handleProgressMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDraggingProgress(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, x / rect.width));
    const video = videoRef.current;
    if (video) {
      video.currentTime = percent * duration;
    }
  };

  useEffect(() => {
    if (!isDraggingVolume) return;

    const handleMouseMove = (e: MouseEvent) => {
      const volumeBar = document.getElementById("volume-bar");
      if (!volumeBar) return;
      const rect = volumeBar.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const newVolume = Math.max(0, Math.min(1, x / rect.width));
      setVolume(newVolume);
    };

    const handleMouseUp = () => setIsDraggingVolume(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDraggingVolume]);

  useEffect(() => {
    if (!isDraggingProgress) return;

    const handleMouseMove = (e: MouseEvent) => {
      const progressBar = document.getElementById("progress-bar");
      if (!progressBar) return;
      const rect = progressBar.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percent = Math.max(0, Math.min(1, x / rect.width));
      const video = videoRef.current;
      if (video) {
        video.currentTime = percent * duration;
      }
    };

    const handleMouseUp = () => setIsDraggingProgress(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDraggingProgress, duration, videoRef]);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`relative flex flex-col w-full max-w-4xl h-fit gap-2 px-2 py-1 bg-espacio text-blanco border border-blanco ${fontClass} text-xl`}>
      <div
        id="progress-bar"
        className="relative flex w-full h-3 bg-blanco/30 cursor-pointer"
        onMouseDown={handleProgressMouseDown}
      >
        <div
          className="absolute left-0 top-0 h-full bg-blanco"
          style={{ width: `${progressPercent}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-blanco"
          style={{ left: `calc(${progressPercent}% - 6px)` }}
        />
      </div>
      <div className="relative flex flex-row w-full h-fit items-center justify-between gap-4">
        <div
          onClick={togglePlay}
          className="relative flex cursor-pointer hover:opacity-70"
        >
          {isPlaying ? "||" : "▶"}
        </div>
        <div className="relative flex w-fit h-fit items-center">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
        <div className="relative flex flex-row w-20 items-center gap-2">
          <div
            id="volume-bar"
            className="relative flex w-full h-1 bg-blanco/30 cursor-pointer"
            onMouseDown={handleVolumeMouseDown}
          >
            <div
              className="absolute left-0 top-0 h-full bg-blanco"
              style={{ width: `${volume * 100}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-blanco"
              style={{ left: `calc(${volume * 100}% - 4px)` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoControls;