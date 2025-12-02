"use client";

import { useRef, useState } from "react";
import VideoControls from "./VideoControls";
import useVideoProgress from "../hooks/useVideoProgress";
import useNodeVideo from "../hooks/useNodeVideo";
import { NodeProps } from "@/app/components/Walkthrough/types/walkthrough.types";
import { getFontCyn } from "@/app/lib/constants";

const Node = ({ dict, lang, onVideoComplete }: NodeProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoUrl = useNodeVideo();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fontClass = getFontCyn(lang);
  useVideoProgress(videoRef, `node1_${lang}`, onVideoComplete);

  return (
    <div className="relative flex flex-col w-full h-full items-center justify-center">
      <div className="relative flex flex-col w-full h-full items-center justify-center bg-black/30 gap-4">
        <div className="relative flex w-full max-w-4xl items-center justify-center px-4">
          <div
            className="relative flex w-full bg-black"
            style={{ aspectRatio: "1912/1080" }}
          >
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
                <div className="relative flex flex-row gap-1">
                  <div className="w-2 h-2 bg-blanco animate-pulse" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 bg-blanco animate-pulse" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 bg-blanco animate-pulse" style={{ animationDelay: "300ms" }} />
                </div>
                <span className={`${fontClass} text-blanco text-xs`}>
                  {dict?.loading}
                </span>
              </div>
            )}
            <video
              ref={videoRef}
              muted
              autoPlay
              playsInline
              draggable={false}
              className="absolute inset-0 w-full h-full object-contain"
              src={videoUrl}
              onTimeUpdate={() => isLoading && setIsLoading(false)}
            />
          </div>
        </div>
        <VideoControls videoRef={videoRef} lang={lang} />
      </div>
    </div>
  );
};

export default Node;