"use client";

import { useParams } from "next/navigation";
import { INFURA_GATEWAY } from "@/app/lib/constants";
import { Language } from "@/app/components/Walkthrough/types/walkthrough.types";

export const useQuestVideo = (videos: Record<Language, string>) => {
  const params = useParams();
  const lang = (params?.lang as Language) || "en";
  const hash = videos[lang] || videos.en;

  return `${INFURA_GATEWAY}/ipfs/${hash}`;
};

export default useQuestVideo;
