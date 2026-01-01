"use client";

import VideoStage from "./VideoStage";
import { NodeProps } from "@/app/components/Walkthrough/types/walkthrough.types";
import { RUNWAYC_VIDEOS } from "@/app/lib/constants";

const RunwayC = ({ dict, lang, onVideoComplete }: NodeProps) => {
  return (
    <VideoStage
      dict={dict}
      lang={lang}
      videos={RUNWAYC_VIDEOS}
      storageKey="runwayc"
      onVideoComplete={onVideoComplete}
    />
  );
};

export default RunwayC;
