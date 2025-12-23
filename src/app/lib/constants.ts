import {
  Language,
  WalkthroughItem,
} from "../components/Walkthrough/types/walkthrough.types";

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
    image: "QmZP8fnEbViiHMSweeXUungJnndi2qmXE45j6pJjfsfXuY",
    locked: true,
    hasTask: true,
  },
  {
    id: "shopthelooks",
    component: "ShopTheLooks",
    title: "SHOP THE LOOKS",
    image: "QmSiS2TbetGejn9bdSys4SvXCuofPA4fduEmMwGFZGhEvE",
    locked: true,
    hasTask: true,
  },
  {
    id: "sodras",
    component: "Sodras",
    title: "CAFE SODRAS",
    image: "Qma7unEpmNCeTiTDiYAQDd9VJ5bLizefd8xfwMYVMaL86X",
    locked: true,
    hasTask: true,
  },
  {
    id: "eatcake",
    component: "EatCake",
    title: "EAT CAKE",
    image: "QmNWYbr7R2qtBkjkVc59cQ1N9nVGEGbxvjmsBUbKXwHA2k",
    locked: true,
    hasTask: true,
  },
  {
    id: "runwayx",
    component: "RunwayX",
    title: "RUNWAY X",
    image: "QmPAQxjEBHJLH5bMGZ8HDx82B9MhTipvTfEBXstpapXwyn",
    locked: true,
    hasTask: true,
  },
  {
    id: "darkglass",
    component: "DarkGlass",
    title: "DARK GLASS",
    image: "QmeZUi7SD9GhRjYridcpCaMZMXQ8DQqrV1FUjXb34PQWiV",
    locked: true,
    hasTask: true,
  },
  {
    id: "workflows4090",
    component: "Workflows4090",
    title: "workflows4090",
    image: "QmXU8EVTzs7jYzqFR8afihECFH9j6CXzviyY9bhxU6fkF4",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd4",
    component: "TBD",
    title: "???",
    image: "QmUVtLvS66rf6BHKSRtBHcaBqpZ5wxCuWgkFhRAweppAfx",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd5",
    component: "TBD",
    title: "???",
    image: "QmUVtLvS66rf6BHKSRtBHcaBqpZ5wxCuWgkFhRAweppAfx",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd6",
    component: "TBD",
    title: "???",
    image: "QmUVtLvS66rf6BHKSRtBHcaBqpZ5wxCuWgkFhRAweppAfx",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd7",
    component: "TBD",
    title: "???",
    image: "QmUVtLvS66rf6BHKSRtBHcaBqpZ5wxCuWgkFhRAweppAfx",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd8",
    component: "TBD",
    title: "???",
    image: "QmUVtLvS66rf6BHKSRtBHcaBqpZ5wxCuWgkFhRAweppAfx",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd9",
    component: "TBD",
    title: "???",
    image: "QmUVtLvS66rf6BHKSRtBHcaBqpZ5wxCuWgkFhRAweppAfx",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd10",
    component: "TBD",
    title: "???",
    image: "QmUVtLvS66rf6BHKSRtBHcaBqpZ5wxCuWgkFhRAweppAfx",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd11",
    component: "TBD",
    title: "???",
    image: "QmUVtLvS66rf6BHKSRtBHcaBqpZ5wxCuWgkFhRAweppAfx",
    locked: false,
    hasTask: false,
    comingSoon: true,
  },
  {
    id: "tbd12",
    component: "TBD",
    title: "???",
    image: "QmUVtLvS66rf6BHKSRtBHcaBqpZ5wxCuWgkFhRAweppAfx",
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

export const WHITE_RABBIT_VIDEO =
  "QmaoQz3w4QbQexAhyvZsmScXLBjyiE8Fep5NSfgtwzPWE3";
export const WHITE_RABBIT_IMAGE =
  "QmQDF161Gv1Umo7PaPXahioPMfk3cCc9cdXU1W2Xvh4t5X";

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

export const NODE_VIDEOS: Record<Language, string> = {
  en: "QmYbvigi3RvoRoSugkrThg7VPmfG7kYcrUbgs3cRY9tAn2",
  es: "QmfMsqoi2QqMSBNwmi5z7daE8ToeBoex4br2bSKnWrvDgn",
  pt: "QmecaKz1Ew3JLAmm7w8nnWKLJZNujU69EkVYEBsTu51JYF",
  ar: "QmTcSGcgaUeutRNwCPohcdwajiYgFc7Ag9kdyq1XHfLThr",
  fa: "QmXT68aa6csxvkQnpo4vqG23qKk3TrS6cous77CG8aTcAT",
};
export const RUNWAYD_VIDEOS: Record<Language, string> = {
  en: "QmcnadrTci4p6jYP9sGZNsJzajTfokQVeTPWoiTWtzih15",
  es: "QmRpD5HVx8hsxvCA5ZCDcDDG3naiY63XXJfzo8iRSopg2p",
  pt: "Qma4eKHfhKBNd3Hz1AaoBdi2SN2ounZZ6bzVREtbmBZdSt",
  ar: "QmVN6cT3wJBLH11Bctypc8jdbwUXUwcd9nQNbX4u3LgbeK",
  fa: "QmT66NWwX8YQrJfCh1UJgSp1Deiu8KLMvgcwGkrzjxapVU",
};
export const CAFES_VIDEOS: Record<Language, string> = {
  en: "QmSDbkdsXuqtG1Yku8bYr6xkfFr4mhNSahkyQ9cY1HeqBN",
  es: "QmUeiz7kzHoC8MgMUeU2S5UkA5xs7MqKCw7tRBwL1ErMef",
  pt: "QmeF49DNxK2e54E5rNvaNWHnLvQUVuJQyfMjppS92x5aPh",
  ar: "QmUoMLKjTtoCzbTvJw289ke9sJk3SynmPi3mH1H8rtNbbA",
  fa: "QmVLPvQWbEWurTnWXSnJBoiLJFijZjj3hAXwJRNYWbrDPZ",
};
export const RUNWAYX_VIDEOS: Record<Language, string> = {
  en: "QmXPkDaMeERa7hFv2x7aDvGgd7iUThSegSPMxkVhhUs93q",
  es: "QmTSrJt8NkjgZhkve4PFRrjBmjdG3z7VuW27KkhTaeNMk4",
  pt: "QmbGRoK8DJftMkeQiExcgGV26s73vt6nAanw35bVt2niyJ",
  ar: "QmXcVhxr4zvdLp95BnAg7JEKt6oxaCPDS8w4nYeuLG7stK",
  fa: "QmapZJAaHs3C6yhdPxPh6pyLdUBor8gkWKVExjvvUAyDNn",
};

export const MONA_TOKEN: `0x${string}` =
  "0x28547B5b6B405A1444A17694AC84aa2d6A03b3Bd";
export const GENESIS_NFT: `0x${string}` =
  "0xE69dAB02100d3989bCA736a0FE1239CbFcf2cE01";


export const CAKE_NFTS: { id: number; image: string; animation: string }[] = [
  {
    id: 1,
    image: "QmYCP8G1C6LVuabZWHBoFTc8NdD8sMsmRrj5qSQhKiYBvd",
    animation: "QmU27MunbbK6mQPmHVi9AzL4LYr4xiQBc7yRUyACr9prwE",
  },
  {
    id: 2,
    image: "QmNyfpVWrz13GLF4ftvHVyr6cjMquftat6jzijGvAZFr1N",
    animation: "QmR5ysTWXnrdTnuyF83CLzgmkQKSy6rEz2MeVnvw4Vt41a",
  },
  {
    id: 3,
    image: "Qmd1oCna4qV5SxtLo8Qq8yYmqVtSXyo1ecBDf5vSXeYGXn",
    animation: "QmcL9NN8airYmqn1zu4mNjmxGhxW53USyCVJu6KthoG2Eh",
  },
  {
    id: 4,
    image: "QmewgaHURBFtAVo3WxZBuitgsKvCPzzPyB8jBNr8i4hgvE",
    animation: "QmUvwqtZQcfuL3xvdAVa8bzw13QAKC7brk6uMLD9ULEzjc",
  },
];

export const DARKGLASS_NFTS: { id: number; image: string; animation: string }[] = [
  {
    id: 1,
    image: "QmRnuPTSXy92dnGhRwDtbQMCjuiiBwppycCAb15Axh1QKK",
    animation: "QmWrhPSH41AHqZ9TGvjwLazCPq7kt6YGXKtDHnDep6wdL1",
  },
  {
    id: 2,
    image: "QmQ1DHrikXSrLjDktULLCBSvk8AjY8s7GZ6ESYM2Kq6hhi",
    animation: "QmXXs6n7areuC2bGX5HRAYp5z2crjJhWT9nAc2SH5JhcyD",
  },
  {
    id: 3,
    image: "QmWfXkR7Zn1LdmmHm9RsXTSvC8wJv1VXLX585gLTYhRAZa",
    animation: "QmaCWqTHoecRajZW9XaWBu9kdLe5xC46mmP93xs662UfPK",
  },
];

export const SHOP_NFTS: { id: number; image: string; animation: string }[] = [
  {
    id: 1,
    image: "QmSiS2TbetGejn9bdSys4SvXCuofPA4fduEmMwGFZGhEvE",
    animation: "QmZrUiVGPgoYZwpcJZsYUqY3ezZSGKf8UiBguFRunJCfMk",
  },
  {
    id: 2,
    image: "QmTMewVHTDhWS1dGj3qXrvvC9rkAKtAjrtBZZYsSnNdjQR",
    animation: "QmdDEvN4hYMfWQNgncRkyoTXsReqmaVvK6mqH1BVu14iYG",
  },
  {
    id: 3,
    image: "QmTSdR9rroWRyyYUE1kDWFP8d7xNSdcByc8yJUHg3v38pF",
    animation: "QmVbhhjUYMc7EqDJVBqcU45Dp2apex5dQyNkyL5QzshdpU",
  },
  {
    id: 4,
    image: "QmfEn4QCGzfPFRMyZD4FxPb4zqFWCwC99qvBpUB8XfiR8a",
    animation: "QmcovwibfJMPRswykLvsozBUhWW7uktGH789isqJSjbe61",
  },
  {
    id: 5,
    image: "QmTqPdtDsQUdmoqqGq3Y7E4f5cjWYSqVWy8ogMxbfSko2g",
    animation: "QmZ4pawatBFE6Lom1PWbb3CxDamDb9yF1BTGPJvVZ5Jh8G",
  },
  {
    id: 6,
    image: "QmZfStnvHaSSMrM1XbUmikh4me4YUPDD6VTwig1gvAdSHG",
    animation: "QmaEkLZ3pkksE48qam45jX5YFa9bNTKR5HjpQEgRebkQMS",
  },
];


