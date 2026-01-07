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
import Sodras from "./Sodras";
import EatCake from "./EatCake";
import useQuestStatus from "../hooks/useQuestStatus";
import { WALKTHROUGH_ITEMS } from "@/app/lib/constants";
import { Language } from "../types/walkthrough.types";
import RunwayX from "./RunwayX";
import RunwayC from "./RunwayC";
import DarkGlass from "./DarkGlass";
import Tunnel57 from "./Tunnel57";
import Tunnel58 from "./Tunnel58";
import PatternLibrary from "./PatternLibrary";
import Cine from "./Cine";
import EmptyTheatre from "./EmptyTheatre";
import RunwayO from "./RunwayO";
import DressingRoom from "./DressingRoom";
import RunwayM from "./RunwayM";
import BuildIt from "./BuildIt";
import NightRun from "./NightRun";
import EarntWatch from "./EarntWatch";
import LookingGlass from "./LookingGlass";
import LightsOut from "./LightsOut";
import RunwayP from "./RunwayP";
import ModelSeesYou from "./ModelSeesYou";

const Walkthrough = ({ dict, lang }: { dict: any; lang: string }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const {
    completedTasks,
    markTaskComplete,
    refetchAll,
    hasCompletedWhiteRabbit,
    hasCompletedShopTheLooks,
    hasCompletedEatCake,
    hasCompletedDarkGlass,
    hasCompletedTunnel58,
    hasCompletedPatternLibrary,
    hasCompletedEmptyTheatre,
    hasCompletedDressingRoom,
    hasCompletedBuildIt,
    hasCompletedEarntWatch,
    hasCompletedLightsOut,
    hasCompletedGoods,
    hasCompletedModelSees,
  } = useQuestStatus(lang as Language);

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
        return (
          <Goods
            dict={dict}
            lang={lang}
            hasCompletedLightsOut={hasCompletedLightsOut}
            hasCompleted={hasCompletedGoods}
            onComplete={() => handleTaskComplete("goods")}
          />
        );
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
      case "Sodras":
        return (
          <Sodras
            dict={dict}
            lang={lang}
            onVideoComplete={() => handleTaskComplete("sodras")}
          />
        );
      case "EatCake":
        return (
          <EatCake
            dict={dict}
            lang={lang}
            onComplete={() => handleTaskComplete("eatcake")}
            hasCompleted={hasCompletedEatCake}
          />
        );
      case "RunwayX":
        return (
          <RunwayX
            dict={dict}
            lang={lang}
            onVideoComplete={() => handleTaskComplete("runwayx")}
          />
        );
      case "DarkGlass":
        return (
          <DarkGlass
            dict={dict}
            lang={lang}
            onComplete={() => handleTaskComplete("darkglass")}
            hasCompleted={hasCompletedDarkGlass}
          />
        );
      case "Tunnel57":
        return (
          <Tunnel57
            dict={dict}
            lang={lang}
            onVideoComplete={() => handleTaskComplete("tunnel57")}
          />
        );
      case "Tunnel58":
        return (
          <Tunnel58
            dict={dict}
            lang={lang}
            onComplete={() => handleTaskComplete("tunnel58")}
            hasCompleted={hasCompletedTunnel58}
          />
        );
      case "PatternLibrary":
        return (
          <PatternLibrary
            dict={dict}
            lang={lang}
            onComplete={() => handleTaskComplete("patternlibrary")}
            hasCompleted={hasCompletedPatternLibrary}
          />
        );
      case "RunwayC":
        return (
          <RunwayC
            dict={dict}
            lang={lang}
            onVideoComplete={() => handleTaskComplete("runwayc")}
          />
        );
      case "OnboardingCrisis":
        return (
          <Cine
            dict={dict}
            lang={lang}
            onVideoComplete={() => handleTaskComplete("onboardingcrisis")}
          />
        );
      case "EmptyTheatre":
        return (
          <EmptyTheatre
            dict={dict}
            lang={lang}
            onComplete={() => handleTaskComplete("emptytheatre")}
            hasCompleted={hasCompletedEmptyTheatre}
          />
        );
      case "RunwayO":
        return (
          <RunwayO
            dict={dict}
            lang={lang}
            onVideoComplete={() => handleTaskComplete("runwayo")}
          />
        );
      case "DressingRoom":
        return (
          <DressingRoom
            dict={dict}
            lang={lang}
            onComplete={() => handleTaskComplete("dressingroom")}
            hasCompleted={hasCompletedDressingRoom}
          />
        );
      case "RunwayM":
        return (
          <RunwayM
            dict={dict}
            lang={lang}
            onVideoComplete={() => handleTaskComplete("runwaym")}
          />
        );
      case "IfYouBuildIt":
        return (
          <BuildIt
            dict={dict}
            lang={lang}
            onComplete={() => handleTaskComplete("ifyoubuildit")}
            hasCompleted={hasCompletedBuildIt}
          />
        );
      case "NightRun":
        return (
          <NightRun
            dict={dict}
            lang={lang}
            onVideoComplete={() => handleTaskComplete("nightrun")}
          />
        );
      case "EarntWatch":
        return (
          <EarntWatch
            dict={dict}
            lang={lang}
            onComplete={() => handleTaskComplete("earntwatch")}
            hasCompleted={hasCompletedEarntWatch}
          />
        );
      case "RunwayP":
        return (
          <RunwayP
            dict={dict}
            lang={lang}
            onVideoComplete={() => handleTaskComplete("runwayp")}
          />
        );
      case "ModelSeesYou":
        return (
          <ModelSeesYou
            dict={dict}
            lang={lang}
            onComplete={() => handleTaskComplete("modelseesyou")}
            hasCompleted={hasCompletedModelSees}
          />
        );
      case "LookingGlass":
        return (
          <LookingGlass
            dict={dict}
            lang={lang}
            onVideoComplete={() => handleTaskComplete("lookingglass")}
          />
        );
      case "LightsOut":
        return (
          <LightsOut
            dict={dict}
            lang={lang}
            onComplete={() => handleTaskComplete("lightsout")}
            hasCompleted={hasCompletedLightsOut}
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
