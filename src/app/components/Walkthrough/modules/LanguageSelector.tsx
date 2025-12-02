"use client";

import { usePathname, useRouter } from "next/navigation";
import { Language, LanguageOption, LanguageSelectorProps } from "@/app/components/Walkthrough/types/walkthrough.types";
import { getFontCyn } from "@/app/lib/constants";

const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "pt", label: "PT" },
  { code: "ar", label: "عر" },
  { code: "fa", label: "فا" },
];

const LanguageSelector = ({ dict, lang }: LanguageSelectorProps) => {
  const router = useRouter();
  const path = usePathname();
  const fontClass = getFontCyn(lang);

  const getCurrentLang = (): Language => {
    const segments = path.split("/");
    return (segments[1] as Language) || "en";
  };

  const changeLanguage = (newLang: Language) => {
    const segments = path.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/");
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; SameSite=Lax`;
    router.push(newPath);
  };

  const currentLang = getCurrentLang();

  return (
    <div
      className={`relative flex flex-row w-full h-fit items-center justify-between gap-2 px-2 py-1 bg-espacio text-blanco border border-blanco ${fontClass} text-2xl`}
    >
      <div className="relative flex w-fit h-fit">{dict?.lang}.</div>
      <div className="relative flex flex-row w-fit h-fit gap-4">
        {LANGUAGES.map((lang) => (
          <div
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`relative flex cursor-pointer ${
              currentLang === lang.code ? "underline" : "hover:underline"
            }`}
          >
            {lang.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;