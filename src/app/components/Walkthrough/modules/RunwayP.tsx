"use client";

import VideoStage from "./VideoStage";
import { NodeProps } from "@/app/components/Walkthrough/types/walkthrough.types";
import { RUNWAYP_VIDEOS } from "@/app/lib/constants";

const RunwayP = ({ dict, lang, onVideoComplete }: NodeProps) => {
  return (
    <VideoStage
      dict={dict}
      lang={lang}
      videos={RUNWAYP_VIDEOS}
      storageKey="runwayp"
      onVideoComplete={onVideoComplete}
    />
  );
};

export default RunwayP;
