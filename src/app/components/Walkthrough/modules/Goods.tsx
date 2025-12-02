"use client";

import { GoodsProps } from "@/app/components/Walkthrough/types/walkthrough.types";
import { getFontCyn } from "@/app/lib/constants";

const Goods = ({ dict, lang }: GoodsProps) => {
  const fontClass = getFontCyn(lang);

  return (
    <div className="relative flex flex-col w-full h-full items-center justify-center">
      <div className="relative flex flex-col w-full h-full items-center justify-center bg-black/30 gap-4 px-4">
        <div className={`relative flex flex-row w-fit h-fit text-blanco ${fontClass} text-2xl text-center gap-2`}>
          <span>{dict?.goodsMade}</span>
          <span className="line-through">{dict?.goodsMy}</span>
          <span>{dict?.goodsYour}</span>
        </div>
        <div className={`relative flex max-w-md w-fit h-fit text-blanco ${fontClass} text-xl text-center`}>
          {dict?.goodsDownload}
        </div>
      </div>
    </div>
  );
};

export default Goods;