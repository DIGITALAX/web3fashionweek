"use client";

import Image from "next/image";
import { useState } from "react";
import { QuestSidebarProps } from "@/app/components/Walkthrough/types/walkthrough.types";
import { getFontCyn, INFURA_GATEWAY } from "@/app/lib/constants";

const QuestSidebar = ({
  items,
  completedTasks,
  currentIndex,
  onNavigate,
  dict,
  lang,
}: QuestSidebarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const fontClass = getFontCyn(lang);
  const navigableItems = items.filter((item) => !item.comingSoon);

  const isItemUnlocked = (item: (typeof items)[0]): boolean => {
    if (item.comingSoon) return false;
    const navIndex = navigableItems.findIndex(
      (navItem) => navItem.id === item.id
    );
    if (navIndex === 0) return true;
    if (!item.locked) return true;
    const previousNavItem = navigableItems[navIndex - 1];
    if (
      previousNavItem?.hasTask &&
      completedTasks.includes(previousNavItem.id)
    ) {
      return true;
    }
    return !item.locked;
  };

  return (
    <>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-row items-center">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex w-8 h-16 bg-espacio border border-blanco cursor-pointer items-center justify-center ${fontClass} text-blanco text-sm hover:opacity-70`}
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          {isOpen ? "X" : dict?.quests}
        </div>
        {isOpen && (
          <div className="relative flex flex-col w-48 max-h-[60vh] bg-espacio border border-blanco overflow-y-auto hide-scrollbar">
            {items.map((item, index) => {
              const isComingSoon = item.comingSoon;
              const isUnlocked = isItemUnlocked(item);
              const isCompleted = completedTasks.includes(item.id);
              const isCurrent = currentIndex === index;

              return (
                <div
                  key={item.id}
                  onClick={() =>
                    isUnlocked && !isComingSoon && onNavigate(index)
                  }
                  className={`relative flex flex-col w-full h-fit border-b border-blanco/30 last:border-b-0 ${
                    isUnlocked && !isComingSoon
                      ? "cursor-pointer hover:bg-blanco/10"
                      : "cursor-not-allowed"
                  } ${isCurrent && !isComingSoon ? "bg-blanco/20" : ""}`}
                >
                  <div className="relative flex w-full bg-white h-20 overflow-hidden">
                    {item.image && (
                      <Image
                        src={
                          item.image.includes("/images/")
                            ? item.image
                            : `${INFURA_GATEWAY}/ipfs/${item.image}`
                        }
                        alt={item.title}
                        fill
                        draggable={false}
                        className={`object-cover ${
                          isCompleted ? "" : "grayscale"
                        }`}
                      />
                    )}
                    {isComingSoon && (
                      <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                        <span className={`${fontClass} text-blanco text-xs`}>
                          {dict?.comingSoon}
                        </span>
                      </div>
                    )}
                    {!isUnlocked && !isComingSoon && (
                      <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                        <span className={`${fontClass} text-blanco text-xs`}>
                          {dict?.locked}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="relative flex flex-col w-full h-fit px-2 py-1 bg-espacio gap-0.5">
                    <div className="relative flex flex-row w-full items-center justify-between">
                      <span
                        className={`${fontClass} text-blanco text-xs truncate`}
                      >
                        {dict?.[item.id] ?? item.title}
                      </span>
                      <span
                        className={`${fontClass} text-xs ${
                          isCompleted ? "text-green-400" : "text-blanco/50"
                        }`}
                      >
                        {isComingSoon
                          ? "..."
                          : isCompleted
                          ? dict?.cleared
                          : "---"}
                      </span>
                    </div>
                    {dict?.[`quest_${item.id}`] && (
                      <span
                        className={`${fontClass} text-blanco/60 text-[10px] leading-tight`}
                      >
                        {dict[`quest_${item.id}`]}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="relative flex md:hidden flex-col w-full bg-espacio border-t border-blanco overflow-y-auto max-h-[40vh]">
        <div className="relative flex w-full px-2 py-1 border-b border-blanco/30">
          <span className={`${fontClass} text-blanco text-sm`}>{dict?.quests}</span>
        </div>
        {items.map((item, index) => {
          const isComingSoon = item.comingSoon;
          const isUnlocked = isItemUnlocked(item);
          const isCompleted = completedTasks.includes(item.id);
          const isCurrent = currentIndex === index;

          return (
            <div
              key={item.id}
              onClick={() => isUnlocked && !isComingSoon && onNavigate(index)}
              className={`relative flex flex-row w-full h-fit border-b border-blanco/30 last:border-b-0 ${
                isUnlocked && !isComingSoon
                  ? "cursor-pointer hover:bg-blanco/10"
                  : "cursor-not-allowed"
              } ${isCurrent && !isComingSoon ? "bg-blanco/20" : ""}`}
            >
              <div className="relative flex w-20 bg-white h-16 overflow-hidden shrink-0">
                {item.image && (
                  <Image
                    src={
                      item.image.includes("/images/")
                        ? item.image
                        : `${INFURA_GATEWAY}/ipfs/${item.image}`
                    }
                    alt={item.title}
                    draggable={false}
                    fill
                    className={`object-cover ${isCompleted ? "" : "grayscale"}`}
                  />
                )}
                {isComingSoon && (
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                    <span className={`${fontClass} text-blanco text-[8px]`}>
                      {dict?.soon}
                    </span>
                  </div>
                )}
                {!isUnlocked && !isComingSoon && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <span className={`${fontClass} text-blanco text-[8px]`}>
                      {dict?.locked}
                    </span>
                  </div>
                )}
              </div>
              <div className="relative flex flex-col flex-1 px-2 py-1 justify-center gap-0.5">
                <div className="relative flex flex-row w-full items-center justify-between">
                  <span className={`${fontClass} text-blanco text-xs`}>
                    {dict?.[item.id] ?? item.title}
                  </span>
                  <span
                    className={`${fontClass} text-xs ${
                      isCompleted ? "text-green-400" : "text-blanco/50"
                    }`}
                  >
                    {isComingSoon
                      ? "..."
                      : isCompleted
                      ? dict?.cleared
                      : "---"}
                  </span>
                </div>
                {dict?.[`quest_${item.id}`] && (
                  <span
                    className={`${fontClass} text-blanco/60 text-[10px] leading-tight`}
                  >
                    {dict[`quest_${item.id}`]}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default QuestSidebar;
