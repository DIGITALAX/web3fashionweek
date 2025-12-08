"use client";

import VideoStage from "./VideoStage";
import { NodeProps } from "@/app/components/Walkthrough/types/walkthrough.types";
import { RUNWAYD_VIDEOS } from "@/app/lib/constants";

const RunwayD = ({ dict, lang, onVideoComplete }: NodeProps) => {
  return (
    <VideoStage
      dict={dict}
      lang={lang}
      videos={RUNWAYD_VIDEOS}
      storageKey="runwayd"
      onVideoComplete={onVideoComplete}
    />
  );
};

export default RunwayD;