"use client";

import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import WalkthroughNav from "./WalkthroughNav";
import QuestSidebar from "./QuestSidebar";
import Node from "./Node";
import Goods from "./Goods";
import WhiteRabbit from "./WhiteRabbit";
import RunwayD from "./RunwayD";
import ShopTheLooks from "./ShopTheLooks";
import useQuestStatus from "../hooks/useQuestStatus";
import { WALKTHROUGH_ITEMS } from "@/app/lib/constants";
import { Language } from "../types/walkthrough.types";

const Walkthrough = ({ dict, lang }: { dict: any; lang: string }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { completedTasks, markTaskComplete, refetchAll, hasCompletedWhiteRabbit, hasCompletedShopTheLooks } = useQuestStatus(lang as Language);

  const handleNavigate = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTaskComplete = (taskId: string) => {
    markTaskComplete(taskId);
    refetchAll();
  };

  const renderCurrentItem = () => {
    const item = WALKTHROUGH_ITEMS[currentIndex];
    if (item.comingSoon) {
      return null;
    }
    switch (item.component) {
      case "Node":
        return (
          <Node
            dict={dict}
            lang={lang}
            onVideoComplete={() => handleTaskComplete("node")}
          />
        );
      case "WhiteRabbit":
        return (
          <WhiteRabbit
            dict={dict}
            lang={lang}
            onMintComplete={() => handleTaskComplete("whiterabbit")}
            hasCompleted={hasCompletedWhiteRabbit}
          />
        );
      case "Goods":
        return <Goods dict={dict} lang={lang} />;
      case "RunwayD":
        return (
          <RunwayD
            dict={dict}
            lang={lang}
            onVideoComplete={() => handleTaskComplete("runwayd")}
          />
        );
      case "ShopTheLooks":
        return (
          <ShopTheLooks
            dict={dict}
            lang={lang}
            onComplete={() => handleTaskComplete("shopthelooks")}
            hasCompleted={hasCompletedShopTheLooks}
          />
        );
      default:
        return (
          <Node
            dict={dict}
            lang={lang}
            onVideoComplete={() => handleTaskComplete("node")}
          />
        );
    }
  };

  return (
    <div className="relative flex flex-col w-full h-screen overflow-hidden">
      <video
        muted
        loop
        autoPlay
        playsInline
        draggable={false}
        className="object-cover absolute flex w-full h-full top-0 left-0 z-0"
        poster="/images/gpufactory.png"
      >
        <source src="/videos/gpufactory.mp4" type="video/mp4" />
      </video>
      <div className="relative flex flex-col w-full h-full z-10">
        <LanguageSelector dict={dict} lang={lang} />
        <div className="relative flex flex-col md:flex-row flex-1 w-full h-full">
          {renderCurrentItem()}
          <QuestSidebar
            lang={lang}
            items={WALKTHROUGH_ITEMS}
            completedTasks={completedTasks}
            currentIndex={currentIndex}
            onNavigate={handleNavigate}
            dict={dict}
          />
        </div>
        <WalkthroughNav
          lang={lang}
          currentIndex={currentIndex}
          items={WALKTHROUGH_ITEMS}
          onNavigate={handleNavigate}
          completedTasks={completedTasks}
          dict={dict}
        />
      </div>
    </div>
  );
};

export default Walkthrough;
