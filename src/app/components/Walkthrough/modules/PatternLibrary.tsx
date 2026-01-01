"use client";

import { ConnectKitButton } from "connectkit";
import { EatCakeProps, Language } from "@/app/components/Walkthrough/types/walkthrough.types";
import { getFontCyn, getFontGrav, INFURA_GATEWAY, LIBRARY_NFTS } from "@/app/lib/constants";
import usePatternLibrary from "../hooks/usePatternLibrary";

const PatternLibrary = ({ dict, lang, onComplete, hasCompleted }: EatCakeProps) => {
  const fontCyn = getFontCyn(lang);
  const fontGrav = getFontGrav(lang);
  const { mint, isMinting, isReady } = usePatternLibrary(lang as Language, dict, onComplete);

  const getFGOLink = () => {
    const baseUrl = "https://fgo.themanufactory.xyz";
    if (lang === "es") return `${baseUrl}/es/`;
    if (lang === "pt") return `${baseUrl}/pt/`;
    return baseUrl;
  };

  return (
    <div className="relative flex flex-col w-full h-full items-center justify-start overflow-y-scroll bg-black/30">
      <div className="relative flex flex-col w-full items-center justify-start gap-6 p-4 py-8 pb-20">
        <div className="relative flex flex-col w-full max-w-4xl items-center gap-6">
          <div className="relative flex flex-col w-full items-center gap-2">
            <span className={`${fontGrav} text-blanco text-2xl text-center`}>
              {dict?.patternlibrary}
            </span>
            <span className={`${fontCyn} text-blanco/70 text-sm text-center max-w-lg`}>
              {dict?.patternlibraryDescription}{" "}
              <a
                href={getFGOLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blanco underline hover:text-blanco/80 transition-colors"
              >
                {dict?.patternlibraryLink || "here"}
              </a>
              . {dict?.patternlibraryEnd}
            </span>
          </div>
          <div className="relative flex flex-row flex-wrap w-full items-center justify-center gap-3">
            {LIBRARY_NFTS.map((nft) => (
              <div
                key={nft.id}
                className="relative flex w-48 h-36 sm:w-60 sm:h-44 border border-blanco/30"
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
                  <source src={`${INFURA_GATEWAY}/ipfs/${nft.animation}`} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
          {hasCompleted && (
            <div className="relative flex w-full items-center justify-center">
              <div className={`${fontCyn} text-green-400 text-sm bg-green-500/20 px-4 py-2`}>
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
        </div>
      </div>
    </div>
  );
};

export default PatternLibrary;