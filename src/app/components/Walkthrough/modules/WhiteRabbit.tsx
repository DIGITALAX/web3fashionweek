"use client";

import { ConnectKitButton } from "connectkit";
import { WhiteRabbitProps, Language } from "@/app/components/Walkthrough/types/walkthrough.types";
import { getFontCyn, getFontGrav, INFURA_GATEWAY, WHITE_RABBIT_VIDEO, WHITE_RABBIT_IMAGE } from "@/app/lib/constants";
import useWhiteRabbitMint from "../hooks/useWhiteRabbit";

const WhiteRabbit = ({ dict, lang, onMintComplete, hasCompleted }: WhiteRabbitProps) => {
  const fontCyn = getFontCyn(lang);
  const fontGrav = getFontGrav(lang);
  const { mint, isMinting, isReady } = useWhiteRabbitMint(lang as Language, dict, onMintComplete);

  return (
    <div className="relative flex flex-col w-full h-full items-center justify-center">
      <div className="relative flex flex-col w-full h-full items-center justify-center bg-black/30 gap-4 p-4">
        <div className="relative flex flex-col w-full max-w-xl items-center justify-center gap-4">
          <div className="relative flex w-full aspect-square max-w-md overflow-hidden border border-blanco">
            <video
              muted
              loop
              autoPlay
              playsInline
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover"
              poster={`${INFURA_GATEWAY}/ipfs/${WHITE_RABBIT_IMAGE}`}
            >
              <source src={`${INFURA_GATEWAY}/ipfs/${WHITE_RABBIT_VIDEO}`} type="video/mp4" />
            </video>
            {hasCompleted && (
              <div className="absolute top-2 flex items-center justify-center text-center right-2 bg-green-500/80 px-2 py-1">
                <span className={`${fontCyn} flex text-blanco text-xs`}>
                  {dict?.minted}
                </span>
              </div>
            )}
          </div>
          <div className="relative flex flex-col w-full items-center gap-2">
            <span className={`${fontGrav} text-blanco text-xl text-center`}>
              {dict?.whiterabbit}
            </span>
            <span className={`${fontCyn} text-blanco/70 text-sm text-center`}>
              {dict?.whiterabbitDesc}
            </span>
          </div>
          <div className="relative flex flex-col w-full items-center gap-3 mt-2">
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
                  <div className="relative flex flex-col items-center gap-2">
                    <button
                      onClick={show}
                      className={`${fontCyn} text-blanco/60 text-xs hover:text-blanco transition-colors`}
                    >
                      {truncatedAddress}
                    </button>
                    {!hasCompleted ? (
                      <button
                        onClick={mint}
                        disabled={isMinting || !isReady}
                        className={`${fontCyn} relative flex items-center justify-center px-8 py-3 bg-espacio border border-blanco text-blanco text-sm hover:bg-blanco/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {isMinting ? dict?.minting : dict?.mint}
                      </button>
                    ) : (
                      <div className={`${fontCyn} text-green-400 text-sm`}>
                        {dict?.cleared}
                      </div>
                    )}
                  </div>
                );
              }}
            </ConnectKitButton.Custom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteRabbit;