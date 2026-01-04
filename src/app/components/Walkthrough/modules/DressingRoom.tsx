"use client";

import { ConnectKitButton } from "connectkit";
import {
  EmptyTheatreProps,
  Language,
} from "@/app/components/Walkthrough/types/walkthrough.types";
import {
  getFontCyn,
  getFontGrav,
  INFURA_GATEWAY,
  DRESSING_NFTS,
} from "@/app/lib/constants";
import useCompleteStep from "../hooks/useCompleteStep";

const DressingRoom = ({
  dict,
  lang,
  onComplete,
  hasCompleted,
}: EmptyTheatreProps) => {
  const fontCyn = getFontCyn(lang);
  const fontGrav = getFontGrav(lang);
  const { mint, isMinting, isReady, hasEnoughIonic } = useCompleteStep(
    lang as Language,
    dict,
    8,
    onComplete,
    "stepCompleteSuccess",
    "stepCompleteError"
  );

  return (
    <div className="relative flex flex-col w-full h-full items-center justify-start overflow-y-scroll bg-black/30">
      <div className="relative flex flex-col w-full items-center justify-start gap-6 p-4 py-8 pb-20">
        <div className="relative flex flex-col w-full max-w-4xl items-center gap-6">
          <div className="relative flex flex-col w-full items-center gap-2">
            <span className={`${fontGrav} text-blanco text-2xl text-center`}>
              {dict?.dressingroom}
            </span>
            <span
              className={`${fontCyn} text-blanco/70 text-sm text-center max-w-lg`}
            >
              {dict?.dressingroomDescriptionStart}{" "}
              <a
                href={
                  lang === "es"
                    ? "https://market.themanufactory.xyz/es/"
                    : lang === "pt"
                    ? "https://market.themanufactory.xyz/pt/"
                    : "https://market.themanufactory.xyz"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blanco transition-colors"
              >
                {dict?.dressingroomLink}
              </a>
              {dict?.dressingroomDescriptionEnd}
            </span>
          </div>
          <div className="relative flex flex-row flex-wrap w-full items-center justify-center gap-3">
            {DRESSING_NFTS.map((nft) => (
              <div
                key={nft.id}
                className="relative flex aspect-[384/640] w-52 sm:w-80 border border-blanco/30"
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
                        {isMinting && hasEnoughIonic
                          ? dict?.minting
                          : !isMinting && hasEnoughIonic
                          ? dict?.mint
                          : isMinting
                          ? dict?.completing
                          : dict?.completeStep}
                      </button>

                      {!hasEnoughIonic && (
                        <span
                          className={`${fontCyn} text-blanco/50 text-xs text-center max-w-xs`}
                        >
                          {dict?.ionicExtraPoints}
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

export default DressingRoom;