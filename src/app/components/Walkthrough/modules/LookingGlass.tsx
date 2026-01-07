"use client";

import VideoStage from "./VideoStage";
import { NodeProps } from "@/app/components/Walkthrough/types/walkthrough.types";
import { LOOKINGGLASS_VIDEOS } from "@/app/lib/constants";

const LookingGlass = ({ dict, lang, onVideoComplete }: NodeProps) => {
  return (
    <VideoStage
      dict={dict}
      lang={lang}
      videos={LOOKINGGLASS_VIDEOS}
      storageKey="lookingglass"
      onVideoComplete={onVideoComplete}
    />
  );
};

export default LookingGlass;