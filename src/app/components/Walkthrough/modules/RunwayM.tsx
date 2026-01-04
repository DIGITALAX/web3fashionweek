"use client";

import VideoStage from "./VideoStage";
import { NodeProps } from "@/app/components/Walkthrough/types/walkthrough.types";
import { RUNWAYM_VIDEOS } from "@/app/lib/constants";

const RunwayM = ({ dict, lang, onVideoComplete }: NodeProps) => {
  return (
    <VideoStage
      dict={dict}
      lang={lang}
      videos={RUNWAYM_VIDEOS}
      storageKey="runwaym"
      onVideoComplete={onVideoComplete}
    />
  );
};

export default RunwayM;