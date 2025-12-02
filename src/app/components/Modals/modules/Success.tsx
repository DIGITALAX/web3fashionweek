import { NETWORK, getFontCyn } from "@/app/lib/constants";
import { ModalContext } from "@/app/providers";
import { useContext } from "react";

export const Success = ({ dict, lang }: { dict: any; lang: string }) => {
  const context = useContext(ModalContext);
  const fontCyn = getFontCyn(lang);
  if (!context?.successData) return null;

  const explorerUrl = context?.successData?.txHash
    ? `${NETWORK.blockExplorer}/tx/${context?.successData.txHash}`
    : null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-pointer"
      onClick={context?.hideSuccess}
    >
      <div
        className="relative flex flex-col w-full max-w-sm items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex flex-col w-full bg-espacio p-6 gap-4">
          <p
            className={`${fontCyn} text-blanco text-sm text-center leading-relaxed`}
          >
            {context?.successData?.message}
          </p>
          {context?.successData?.txHash && explorerUrl && (
            <a
              href={explorerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${fontCyn} text-xs text-green-400 hover:text-green-300 transition-colors text-center`}
            >
              {dict?.viewTx}: {context?.successData?.txHash?.slice(0, 10)}...
              {context?.successData?.txHash?.slice(-8)}
            </a>
          )}
          <button
            onClick={context?.hideSuccess}
            className={`${fontCyn} relative flex items-center justify-center px-6 py-2 bg-espacio border border-blanco text-blanco text-sm hover:bg-blanco/10 transition-colors mt-2`}
          >
            {dict?.close}
          </button>
        </div>
      </div>
    </div>
  );
};
