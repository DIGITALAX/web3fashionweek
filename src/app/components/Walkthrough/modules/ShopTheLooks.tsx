"use client";

import { ConnectKitButton } from "connectkit";
import {
  ShopTheLooksProps,
  Language,
} from "@/app/components/Walkthrough/types/walkthrough.types";
import {
  getFontCyn,
  getFontGrav,
  INFURA_GATEWAY,
  SHOP_NFTS,
} from "@/app/lib/constants";
import useCompleteStep from "../hooks/useCompleteStep";

const ShopTheLooks = ({
  dict,
  lang,
  onComplete,
  hasCompleted,
}: ShopTheLooksProps) => {
  const fontCyn = getFontCyn(lang);
  const fontGrav = getFontGrav(lang);
  const { mint, isMinting, hasEnoughMona, isReady } = useCompleteStep(
    lang as Language,
    dict,
    2,
    onComplete,
    "shopMintSuccess",
    "shopMintError"
  );

  const marketUrl =
    lang === "es" || lang === "pt"
      ? "https://globaldesignernetwork.com/es/market/"
      : "https://globaldesignernetwork.com/market/";

  return (
    <div className="relative flex flex-col w-full h-full items-center justify-start overflow-y-scroll bg-black/30">
      <div className="relative flex flex-col w-full items-center justify-start gap-6 p-4 py-8 pb-20">
        <div className="relative flex flex-col w-full max-w-4xl items-center gap-6">
          <div className="relative flex flex-col w-full items-center gap-2">
            <span className={`${fontGrav} text-blanco text-2xl text-center`}>
              {dict?.shopthelooks}
            </span>
            <span
              className={`${fontCyn} text-blanco/70 text-sm text-center max-w-lg`}
            >
              {dict?.shopDescription}{" "}
              <a
                href={marketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blanco transition-colors"
              >
                {dict?.shopMarketLink}
              </a>
            </span>
          </div>
          <div className="relative flex flex-row flex-wrap w-full items-center justify-center gap-4">
            {SHOP_NFTS.map((nft) => (
              <div
                key={nft.id}
                className="relative flex w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] aspect-square border border-blanco/30"
              >
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
                        {hasEnoughMona && !isMinting
                          ? dict?.mint
                          : hasEnoughMona && isMinting
                          ? dict?.minting
                          : !hasEnoughMona && !isMinting
                          ? dict?.completeStep
                          : dict?.completing}
                      </button>

                      {!hasEnoughMona && (
                        <span
                          className={`${fontCyn} text-blanco/50 text-xs text-center max-w-xs`}
                        >
                          {dict?.monaGateInfo}
                        </span>
                      )}
                    </div>
                  );
                }}
              </ConnectKitButton.Custom>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopTheLooks;
