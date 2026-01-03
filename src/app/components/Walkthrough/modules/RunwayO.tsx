"use client";

import VideoStage from "./VideoStage";
import { NodeProps } from "@/app/components/Walkthrough/types/walkthrough.types";
import { RUNWAYO_VIDEOS } from "@/app/lib/constants";

const RunwayO = ({ dict, lang, onVideoComplete }: NodeProps) => {
  return (
    <VideoStage
      dict={dict}
      lang={lang}
      videos={RUNWAYO_VIDEOS}
      storageKey="runwayo"
      onVideoComplete={onVideoComplete}
    />
  );
};

export default RunwayO;