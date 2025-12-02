import { Language, WalkthroughItem } from "../components/Walkthrough/types/walkthrough.types";

export const INFURA_GATEWAY: string = "https://thedial.infura-ipfs.io";

export const WALKTHROUGH_ITEMS: WalkthroughItem[] = [
  {
    id: "node",
    component: "Node",
    title: "NODE",
    image: "/images/gpufactory.png",
    locked: false,
    hasTask: true,
  },
  {
    id: "whiterabbit",
    component: "WhiteRabbit",
    title: "WHITE RABBIT",
    image: "QmQDF161Gv1Umo7PaPXahioPMfk3cCc9cdXU1W2Xvh4t5X",
    locked: true,
    hasTask: true,
  },
  {
    id: "runwayd",
    component: "RunwayD",
    title: "RUNWAY D",
    image: "QmeezPKNaHXFyPc4R6K2aeamFCFTUqAsBz8Rx5yUTDAFzD",
    locked: true,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "sodras",
    component: "Sodras",
    title: "CAFE SODRAS",
    image: "QmNWYbr7R2qtBkjkVc59cQ1N9nVGEGbxvjmsBUbKXwHA2k",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd1",
    component: "TBD",
    title: "???",
    image: "QmVwEspnT1tGQ7LDe8McLiWvwNnucWhHSRtUmh32GEVwJp",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd2",
    component: "TBD",
    title: "???",
    image: "QmVwEspnT1tGQ7LDe8McLiWvwNnucWhHSRtUmh32GEVwJp",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd3",
    component: "TBD",
    title: "???",
    image: "QmVwEspnT1tGQ7LDe8McLiWvwNnucWhHSRtUmh32GEVwJp",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd4",
    component: "TBD",
    title: "???",
    image: "QmVwEspnT1tGQ7LDe8McLiWvwNnucWhHSRtUmh32GEVwJp",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd5",
    component: "TBD",
    title: "???",
    image: "QmVwEspnT1tGQ7LDe8McLiWvwNnucWhHSRtUmh32GEVwJp",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd6",
    component: "TBD",
    title: "???",
    image: "QmVwEspnT1tGQ7LDe8McLiWvwNnucWhHSRtUmh32GEVwJp",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd7",
    component: "TBD",
    title: "???",
    image: "QmVwEspnT1tGQ7LDe8McLiWvwNnucWhHSRtUmh32GEVwJp",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd8",
    component: "TBD",
    title: "???",
    image: "QmVwEspnT1tGQ7LDe8McLiWvwNnucWhHSRtUmh32GEVwJp",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd9",
    component: "TBD",
    title: "???",
    image: "QmVwEspnT1tGQ7LDe8McLiWvwNnucWhHSRtUmh32GEVwJp",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd10",
    component: "TBD",
    title: "???",
    image: "QmVwEspnT1tGQ7LDe8McLiWvwNnucWhHSRtUmh32GEVwJp",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd11",
    component: "TBD",
    title: "???",
    image: "QmVwEspnT1tGQ7LDe8McLiWvwNnucWhHSRtUmh32GEVwJp",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd12",
    component: "TBD",
    title: "???",
    image: "QmVwEspnT1tGQ7LDe8McLiWvwNnucWhHSRtUmh32GEVwJp",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd13",
    component: "TBD",
    title: "???",
    image: "QmVwEspnT1tGQ7LDe8McLiWvwNnucWhHSRtUmh32GEVwJp",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd14",
    component: "TBD",
    title: "???",
    image: "QmVwEspnT1tGQ7LDe8McLiWvwNnucWhHSRtUmh32GEVwJp",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "goods",
    component: "Goods",
    title: "GOODS",
    image: "QmYXGBgmyyppuMSuELokGuDaYdp7JpFBYxnnuzU8xB7YkV",
    locked: false,
    hasTask: false,
  },
];

export const ARABIC_RAQM = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

export const STORAGE_KEY = "w3fw_video_progress";

export const getFontCyn = (lang: string): string =>
  lang === "ar" || lang === "fa" ? "font-almas" : "font-cyn";

export const getFontGrav = (lang: string): string =>
  lang === "ar" || lang === "fa" ? "font-hand" : "font-grav";

export const NETWORK = {
  chainId: 232,
  name: "Lens Network",
  rpcUrl: "https://rpc.lens.xyz",
  blockExplorer: "https://explorer.lens.xyz",
} as const;

export const QUEST_CONTRACT: `0x${string}` =
  "0x9EA65EAbB4e4677766BbE2ab328820E0B8AacaF8";
export const LANG_IDS = {
  EN: 1,
  ES: 2,
  PT: 3,
  AR: 4,
  FA: 5,
};

export const WHITE_RABBIT_VIDEO = "QmaoQz3w4QbQexAhyvZsmScXLBjyiE8Fep5NSfgtwzPWE3";
export const WHITE_RABBIT_IMAGE = "QmQDF161Gv1Umo7PaPXahioPMfk3cCc9cdXU1W2Xvh4t5X";

export const getLangId = (lang: Language): number => {
  const langMap: Record<Language, number> = {
    en: LANG_IDS.EN,
    es: LANG_IDS.ES,
    pt: LANG_IDS.PT,
    ar: LANG_IDS.AR,
    fa: LANG_IDS.FA,
  };
  return langMap[lang] || LANG_IDS.EN;
};
