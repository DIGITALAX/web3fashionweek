"use client";

import { VolumeToggleProps } from "@/app/components/Walkthrough/types/walkthrough.types";



const VolumeToggle = ({ isMuted, onToggle, label }: VolumeToggleProps) => {
  return (
    <div
      onClick={onToggle}
      className="relative flex cursor-pointer underline hover:opacity-70"
    >
      {label}: {isMuted ? "OFF" : "ON"}
    </div>
  );
};

export default VolumeToggle;