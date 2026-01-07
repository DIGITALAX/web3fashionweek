"use client";

import { ConnectKitButton } from "connectkit";
import {
  GoodsProps,
  Language,
} from "@/app/components/Walkthrough/types/walkthrough.types";
import {
  getFontCyn,
  getFontGrav,
  INFURA_GATEWAY,
  DIY_NFTS,
} from "@/app/lib/constants";
import useCompleteStep from "../hooks/useCompleteStep";

const Goods = ({
  dict,
  lang,
  hasCompletedLightsOut,
  hasCompleted,
  onComplete,
}: GoodsProps) => {
  const fontCyn = getFontCyn(lang);
  const fontGrav = getFontGrav(lang);
  const chromadinUrl =
    lang === "pt" || lang === "es"
      ? "https://chromadin.xyz/es/?video=112654010961028466871007800590790577446329760074362970649160145091806477597679"
      : "https://chromadin.xyz/en/?video=112654010961028466871007800590790577446329760074362970649160145091806477597679";

  const { mint, isMinting, isReady } = useCompleteStep(
    lang as Language,
    dict,
    13,
    onComplete || (() => {}),
    "shopMintSuccess",
    "shopMintError"
  );

  if (hasCompletedLightsOut) {
    return (
      <div className="relative flex flex-col w-full h-full items-center justify-start overflow-y-scroll bg-black/30">
        <div className="relative flex flex-col w-full items-center justify-start gap-6 p-4 py-8 pb-20">
          <div className="relative flex flex-col w-full max-w-4xl items-center gap-6">
            <div className="relative flex flex-col w-full items-center gap-2">
              <span className={`${fontGrav} text-blanco text-2xl text-center`}>
                {dict?.diy}
              </span>
              <span
                className={`${fontCyn} text-blanco/90 text-sm text-center max-w-lg mt-2 bg-blanco/10 p-4 border border-blanco/30`}
              >
                {dict?.diyFinalMessage}
              </span>
              <span
                className={`${fontCyn} text-blanco/70 text-xs text-center max-w-xl mt-4`}
              >
                {dict?.quest_diy}
              </span>
            </div>
            <div className="relative flex flex-row flex-wrap w-full items-center justify-center gap-6">
              {DIY_NFTS.map((nft) => (
                <div
                  key={nft.id}
                  className="relative flex flex-col w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] gap-3"
                >
                  <div className="relative flex w-full aspect-video border border-blanco/30">
                    <video
                      muted
                      loop
                      autoPlay
                      playsInline
                      draggable={false}
                      className="absolute inset-0 w-full h-full object-cover"
                      poster={`${INFURA_GATEWAY}/ipfs/${nft.image}`}
                    >
                      <source
                        src={`${INFURA_GATEWAY}/ipfs/${nft.animation}`}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className="relative flex flex-col gap-1.5">
                    <a
                      href={`${INFURA_GATEWAY}/ipfs/${nft.workflow}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${fontCyn} text-blanco/80 text-xs hover:text-blanco transition-colors underline`}
                    >
                      V2V Workflow
                    </a>
                    <a
                      href={`${INFURA_GATEWAY}/ipfs/${nft.lora}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${fontCyn} text-blanco/80 text-xs hover:text-blanco transition-colors underline`}
                    >
                      Cakehouse LoRA
                    </a>
                    <a
                      href={`${INFURA_GATEWAY}/ipfs/${nft.prompt}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${fontCyn} text-blanco/80 text-xs hover:text-blanco transition-colors underline`}
                    >
                      Prompt Starter Pack
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {hasCompleted && (
              <div className="relative flex w-full items-center justify-center">
                <div
                  className={`${fontCyn} text-green-400 text-sm bg-green-500/20 px-4 py-2`}
                >
                  {dict?.cleared}
                </div>
              </div>
            )}
            {!hasCompleted && (
              <div className="relative flex flex-col w-full items-center gap-4 mt-2 pb-4">
                <ConnectKitButton.Custom>
                  {({ isConnected, show, truncatedAddress }) => {
                    if (!isConnected) {
                      return (
                        <button
                          onClick={show}
                          className={`${fontCyn} relative flex items-center justify-center px-6 py-2 bg-espacio border border-blanco text-blanco text-sm hover:bg-blanco/10 transition-colors`}
                        >
                          {dict?.connect}
                        </button>
                      );
                    }
                    return (
                      <div className="relative flex flex-col items-center gap-3">
                        <button
                          onClick={show}
                          className={`${fontCyn} text-blanco/60 text-xs hover:text-blanco transition-colors`}
                        >
                          {truncatedAddress}
                        </button>

                        <button
                          onClick={mint}
                          disabled={isMinting || !isReady}
                          className={`${fontCyn} relative flex items-center justify-center px-8 py-3 bg-espacio border border-blanco text-blanco text-sm hover:bg-blanco/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                          {isMinting ? dict?.minting : dict?.mint}
                        </button>
                      </div>
                    );
                  }}
                </ConnectKitButton.Custom>
              </div>
            )}
            <a
              href={chromadinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative flex w-fit h-fit text-blanco ${fontCyn} text-lg text-center underline hover:opacity-70 mt-4`}
            >
              {dict?.lofiLink}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col w-full h-full items-center justify-center overflow-y-scroll bg-black/30">
      <div className="relative flex flex-col w-full items-center justify-center gap-4 p-4">
        <div className="relative flex flex-col w-full max-w-4xl items-center gap-6">
          <div className="relative flex flex-col w-full items-center gap-4">
            <div
              className={`relative flex flex-row w-fit h-fit text-blanco ${fontCyn} text-2xl text-center gap-2`}
            >
              <span>{dict?.goodsMade}</span>
              <span className="line-through">{dict?.goodsMy}</span>
              <span>{dict?.goodsYour}</span>
            </div>
            <div
              className={`relative flex max-w-md w-fit h-fit text-blanco ${fontCyn} text-xl text-center`}
            >
              {dict?.goodsDownload}
            </div>
            <a
              href={chromadinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative flex w-fit h-fit text-blanco ${fontCyn} text-lg text-center underline hover:opacity-70 mt-4`}
            >
              {dict?.lofiLink}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goods;
