"use client";

import { useEffect, useCallback } from "react";
import {
  WalkthroughItem,
  WalkthroughNavProps,
} from "@/app/components/Walkthrough/types/walkthrough.types";
import { ARABIC_RAQM, getFontCyn } from "@/app/lib/constants";

const toLocalizedNumber = (num: number, isRTL: boolean): string => {
  if (!isRTL) return String(num);
  return String(num)
    .split("")
    .map((digit) => ARABIC_RAQM[parseInt(digit)] || digit)
    .join("");
};

const WalkthroughNav = ({
  currentIndex,
  items,
  onNavigate,
  completedTasks,
  dict,
  lang,
}: WalkthroughNavProps) => {
  const navigableItems = items.filter((item) => !item.comingSoon);
  const currentNavIndex = navigableItems.findIndex((item) => item.id === items[currentIndex]?.id);
  const canGoBack = currentNavIndex > 0;
  const canGoForward = currentNavIndex < navigableItems.length - 1;
  const isRTL = dict?.dir === "rtl";
  const fontClass = getFontCyn(lang);

  const isItemUnlocked = useCallback(
    (item: WalkthroughItem, navIndex: number): boolean => {
      if (navIndex === 0) return true;
      if (!item.locked) return true;
      if (item.unlockCondition && item.unlockCondition()) return true;
      const previousNavItem = navigableItems[navIndex - 1];
      if (previousNavItem?.hasTask && completedTasks.includes(previousNavItem.id)) {
        return true;
      }
      return false;
    },
    [navigableItems, completedTasks]
  );

  const handlePrev = useCallback(() => {
    if (canGoBack) {
      const prevNavItem = navigableItems[currentNavIndex - 1];
      const prevIndex = items.findIndex((item) => item.id === prevNavItem.id);
      onNavigate(prevIndex);
    }
  }, [canGoBack, currentNavIndex, navigableItems, items, onNavigate]);

  const handleNext = useCallback(() => {
    if (canGoForward) {
      const nextNavItem = navigableItems[currentNavIndex + 1];
      if (isItemUnlocked(nextNavItem, currentNavIndex + 1)) {
        const nextIndex = items.findIndex((item) => item.id === nextNavItem.id);
        onNavigate(nextIndex);
      }
    }
  }, [canGoForward, currentNavIndex, navigableItems, items, isItemUnlocked, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        isRTL ? handleNext() : handlePrev();
      } else if (e.key === "ArrowRight") {
        isRTL ? handlePrev() : handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, isRTL]);

  const nextNavItem = navigableItems[currentNavIndex + 1];
  const nextLocked = nextNavItem && !isItemUnlocked(nextNavItem, currentNavIndex + 1);

  return (
    <div
      className={`relative flex flex-row w-full h-fit items-center justify-between gap-2 px-2 py-1 bg-espacio text-blanco border border-blanco ${fontClass} text-2xl`}
    >
      <div
        onClick={handlePrev}
        className={`relative flex cursor-pointer ${
          canGoBack
            ? "underline hover:opacity-70"
            : "opacity-30 cursor-not-allowed"
        }`}
      >
        {dict?.prev}
      </div>
      <div className="relative flex flex-row w-fit h-fit gap-2 items-center">
        <span>{toLocalizedNumber(currentNavIndex + 1, isRTL)}</span>
        <span>/</span>
        <span>{toLocalizedNumber(navigableItems.length, isRTL)}</span>
      </div>
      <div
        onClick={handleNext}
        className={`relative flex cursor-pointer ${
          canGoForward && !nextLocked
            ? "underline hover:opacity-70"
            : "opacity-30 cursor-not-allowed"
        }`}
      >
        {nextLocked ? dict?.locked : dict?.next}
      </div>
    </div>
  );
};

export default WalkthroughNav;
