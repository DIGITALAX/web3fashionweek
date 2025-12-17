"use client";

import VideoStage from "./VideoStage";
import { NodeProps } from "@/app/components/Walkthrough/types/walkthrough.types";
import { CAFES_VIDEOS } from "@/app/lib/constants";

const Sodras = ({ dict, lang, onVideoComplete }: NodeProps) => {
  return (
    <VideoStage
      dict={dict}
      lang={lang}
      videos={CAFES_VIDEOS}
      storageKey="sodras"
      onVideoComplete={onVideoComplete}
    />
  );
};

export default Sodras;
