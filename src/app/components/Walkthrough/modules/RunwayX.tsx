"use client";

import VideoStage from "./VideoStage";
import { NodeProps } from "@/app/components/Walkthrough/types/walkthrough.types";
import { RUNWAYX_VIDEOS } from "@/app/lib/constants";

const RunwayX = ({ dict, lang, onVideoComplete }: NodeProps) => {
  return (
    <VideoStage
      dict={dict}
      lang={lang}
      videos={RUNWAYX_VIDEOS}
      storageKey="runwayx"
      onVideoComplete={onVideoComplete}
    />
  );
};

export default RunwayX;
