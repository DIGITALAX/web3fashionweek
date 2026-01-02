"use client";

import VideoStage from "./VideoStage";
import { NodeProps } from "@/app/components/Walkthrough/types/walkthrough.types";
import { CINE_VIDEOS } from "@/app/lib/constants";

const Cine = ({ dict, lang, onVideoComplete }: NodeProps) => {
  return (
    <VideoStage
      dict={dict}
      lang={lang}
      videos={CINE_VIDEOS}
      storageKey="onboardingcrisis"
      onVideoComplete={onVideoComplete}
    />
  );
};

export default Cine;