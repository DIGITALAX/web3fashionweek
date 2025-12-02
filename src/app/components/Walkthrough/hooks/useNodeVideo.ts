"use client";

import { useParams } from "next/navigation";
import { INFURA_GATEWAY } from "@/app/lib/constants";
import { Language } from "@/app/components/Walkthrough/types/walkthrough.types";

const NODE_VIDEOS: Record<Language, string> = {
  en: "QmYbvigi3RvoRoSugkrThg7VPmfG7kYcrUbgs3cRY9tAn2",
  es: "QmfMsqoi2QqMSBNwmi5z7daE8ToeBoex4br2bSKnWrvDgn",
  pt: "QmecaKz1Ew3JLAmm7w8nnWKLJZNujU69EkVYEBsTu51JYF",
  ar: "QmTcSGcgaUeutRNwCPohcdwajiYgFc7Ag9kdyq1XHfLThr",
  fa: "QmXT68aa6csxvkQnpo4vqG23qKk3TrS6cous77CG8aTcAT"
};

export const useNodeVideo = () => {
  const params = useParams();
  const lang = (params?.lang as Language) || "en";
  const hash = NODE_VIDEOS[lang] || NODE_VIDEOS.en;

  return `${INFURA_GATEWAY}/ipfs/${hash}`;
};

export default useNodeVideo;