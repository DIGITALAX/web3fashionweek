"use client";

import VideoStage from "./VideoStage";
import { NodeProps } from "@/app/components/Walkthrough/types/walkthrough.types";
import { NIGHTRUN_VIDEOS } from "@/app/lib/constants";

const NightRun = ({ dict, lang, onVideoComplete }: NodeProps) => {
  return (
    <VideoStage
      dict={dict}
      lang={lang}
      videos={NIGHTRUN_VIDEOS}
      storageKey="nightrun"
      onVideoComplete={onVideoComplete}
    />
  );
};

export default NightRun;