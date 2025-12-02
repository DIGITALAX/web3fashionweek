"use client";

import { GoodsProps } from "@/app/components/Walkthrough/types/walkthrough.types";
import { getFontCyn } from "@/app/lib/constants";

const Goods = ({ dict, lang }: GoodsProps) => {
  const fontClass = getFontCyn(lang);
  const chromadinUrl =
    lang === "pt" || lang === "es"
      ? "https://chromadin.xyz/es/?video=112654010961028466871007800590790577446329760074362970649160145091806477597679"
      : "https://chromadin.xyz/en/?video=112654010961028466871007800590790577446329760074362970649160145091806477597679";

  return (
    <div className="relative flex flex-col w-full h-full items-center justify-center">
      <div className="relative flex flex-col w-full h-full items-center justify-center bg-black/30 gap-4 px-4">
        <div
          className={`relative flex flex-row w-fit h-fit text-blanco ${fontClass} text-2xl text-center gap-2`}
        >
          <span>{dict?.goodsMade}</span>
          <span className="line-through">{dict?.goodsMy}</span>
          <span>{dict?.goodsYour}</span>
        </div>
        <div
          className={`relative flex max-w-md w-fit h-fit text-blanco ${fontClass} text-xl text-center`}
        >
          {dict?.goodsDownload}
        </div>
        <a
          href={chromadinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative flex w-fit h-fit text-blanco ${fontClass} text-lg text-center underline hover:opacity-70`}
        >
          {dict?.lofiLink}
        </a>
      </div>
    </div>
  );
};

export default Goods;
