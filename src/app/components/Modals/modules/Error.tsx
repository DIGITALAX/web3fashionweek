import { useContext } from "react";
import { ModalContext } from "@/app/providers";
import { getFontCyn } from "@/app/lib/constants";

export const Error = ({ dict, lang }: { dict: any; lang: string }) => {
  const context = useContext(ModalContext);
  const fontCyn = getFontCyn(lang);

  if (!context?.errorData) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-pointer"
      onClick={context?.hideError}
    >
      <div
        className="relative flex flex-col w-full max-w-sm items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex flex-col w-full bg-espacio p-6 gap-4">
          <p
            className={`${fontCyn} text-blanco text-sm text-center leading-relaxed`}
          >
            {context?.errorData?.message}
          </p>
          <button
            onClick={context?.hideError}
            className={`${fontCyn} relative flex items-center justify-center px-6 py-2 bg-espacio border border-blanco text-blanco text-sm hover:bg-blanco/10 transition-colors mt-2`}
          >
            {dict?.close}
          </button>
        </div>
      </div>
    </div>
  );
};
