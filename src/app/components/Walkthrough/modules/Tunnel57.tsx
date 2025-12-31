"use client";

import VideoStage from "./VideoStage";
import { NodeProps } from "@/app/components/Walkthrough/types/walkthrough.types";
import { TUNNEL57_VIDEOS } from "@/app/lib/constants";

const Tunnel57 = ({ dict, lang, onVideoComplete }: NodeProps) => {
  return (
    <VideoStage
      dict={dict}
      lang={lang}
      videos={TUNNEL57_VIDEOS}
      storageKey="tunnel57"
      onVideoComplete={onVideoComplete}
    />
  );
};

export default Tunnel57;
