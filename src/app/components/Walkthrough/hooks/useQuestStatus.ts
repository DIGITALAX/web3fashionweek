"use client";

import { useEffect, useState } from "react";
import { useAccount, useReadContract } from "wagmi";
import { QUEST_CONTRACT, getLangId } from "@/app/lib/constants";
import W3FWQuestABI from "@/abis/W3FWQuest.json";
import { Language } from "../types/walkthrough.types";
import { isVideoWatched } from "./useVideoProgress";

export const useQuestStatus = (lang: Language) => {
  const { address, isConnected } = useAccount();
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const langId = getLangId(lang);

  const { data: hasCompletedWhiteRabbit, refetch: refetchWhiteRabbit } =
    useReadContract({
      address: QUEST_CONTRACT,
      abi: W3FWQuestABI,
      functionName: "hasCompletedStep",
      args: [BigInt(1), address, langId],
      query: {
        enabled: !!address && isConnected,
      },
      account: address,
    });

  const { data: hasCompletedShopTheLooks, refetch: refetchShopTheLooks } =
    useReadContract({
      address: QUEST_CONTRACT,
      abi: W3FWQuestABI,
      functionName: "hasCompletedStep",
      args: [BigInt(2), address, langId],
      query: {
        enabled: !!address && isConnected,
      },
      account: address,
    });

  const { data: hasCompletedEatCake, refetch: refetchEatCake } =
    useReadContract({
      address: QUEST_CONTRACT,
      abi: W3FWQuestABI,
      functionName: "hasCompletedStep",
      args: [BigInt(3), address, langId],
      query: {
        enabled: !!address && isConnected,
      },
      account: address,
    });

  const { data: hasCompletedDarkGlass, refetch: refetchDarkGlass } =
    useReadContract({
      address: QUEST_CONTRACT,
      abi: W3FWQuestABI,
      functionName: "hasCompletedStep",
      args: [BigInt(4), address, langId],
      query: {
        enabled: !!address && isConnected,
      },
      account: address,
    });

  const { data: hasCompletedTunnel58, refetch: refetchTunnel58 } =
    useReadContract({
      address: QUEST_CONTRACT,
      abi: W3FWQuestABI,
      functionName: "hasCompletedStep",
      args: [BigInt(5), address, langId],
      query: {
        enabled: !!address && isConnected,
      },
      account: address,
    });

  const { data: hasCompletedPatternLibrary, refetch: refetchPatternLibrary } =
    useReadContract({
      address: QUEST_CONTRACT,
      abi: W3FWQuestABI,
      functionName: "hasCompletedStep",
      args: [BigInt(6), address, langId],
      query: {
        enabled: !!address && isConnected,
      },
      account: address,
    });

  const { data: hasCompletedEmptyTheatre, refetch: refetchEmptyTheatre } =
    useReadContract({
      address: QUEST_CONTRACT,
      abi: W3FWQuestABI,
      functionName: "hasCompletedStep",
      args: [BigInt(7), address, langId],
      query: {
        enabled: !!address && isConnected,
      },
      account: address,
    });

  const { data: hasCompletedDressingRoom, refetch: refetchDressingRoom } =
    useReadContract({
      address: QUEST_CONTRACT,
      abi: W3FWQuestABI,
      functionName: "hasCompletedStep",
      args: [BigInt(8), address, langId],
      query: {
        enabled: !!address && isConnected,
      },
      account: address,
    });

  const { data: hasCompletedBuildIt, refetch: refetchBuildIt } =
    useReadContract({
      address: QUEST_CONTRACT,
      abi: W3FWQuestABI,
      functionName: "hasCompletedStep",
      args: [BigInt(9), address, langId],
      query: {
        enabled: !!address && isConnected,
      },
      account: address,
    });

  const { data: hasCompletedEarntWatch, refetch: refetchEarntWatch } =
    useReadContract({
      address: QUEST_CONTRACT,
      abi: W3FWQuestABI,
      functionName: "hasCompletedStep",
      args: [BigInt(10), address, langId],
      query: {
        enabled: !!address && isConnected,
      },
      account: address,
    });

  useEffect(() => {
    const tasks: string[] = [];

    if (isVideoWatched(`node1_${lang}`)) {
      tasks.push("node");
    }

    if (hasCompletedWhiteRabbit) {
      tasks.push("whiterabbit");
    }

    if (isVideoWatched(`runwayd_${lang}`)) {
      tasks.push("runwayd");
    }

    if (hasCompletedShopTheLooks) {
      tasks.push("shopthelooks");
    }

    if (isVideoWatched(`sodras_${lang}`)) {
      tasks.push("sodras");
    }

    if (hasCompletedEatCake) {
      tasks.push("eatcake");
    }

    if (isVideoWatched(`runwayx_${lang}`)) {
      tasks.push("runwayx");
    }

    if (hasCompletedDarkGlass) {
      tasks.push("darkglass");
    }

    if (isVideoWatched(`tunnel57_${lang}`)) {
      tasks.push("tunnel57");
    }

    if (hasCompletedTunnel58) {
      tasks.push("tunnel58");
    }

    if (hasCompletedPatternLibrary) {
      tasks.push("patternlibrary");
    }

    if (isVideoWatched(`runwayc_${lang}`)) {
      tasks.push("runwayc");
    }

    if (isVideoWatched(`onboardingcrisis_${lang}`)) {
      tasks.push("onboardingcrisis");
    }

    if (hasCompletedEmptyTheatre) {
      tasks.push("emptytheatre");
    }

    if (isVideoWatched(`runwayo_${lang}`)) {
      tasks.push("runwayo");
    }

    if (hasCompletedDressingRoom) {
      tasks.push("dressingroom");
    }

    if (isVideoWatched(`runwaym_${lang}`)) {
      tasks.push("runwaym");
    }

    if (hasCompletedBuildIt) {
      tasks.push("ifyoubuildit");
    }

    if (isVideoWatched(`nightrun_${lang}`)) {
      tasks.push("nightrun");
    }

    if (hasCompletedEarntWatch) {
      tasks.push("earntwatch");
    }

    setCompletedTasks(tasks);
  }, [
    lang,
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
  ]);

  const markTaskComplete = (taskId: string) => {
    if (!completedTasks.includes(taskId)) {
      setCompletedTasks((prev) => [...prev, taskId]);
    }
  };

  const refetchAll = () => {
    refetchWhiteRabbit();
    refetchShopTheLooks();
    refetchEatCake();
    refetchDarkGlass();
    refetchTunnel58();
    refetchPatternLibrary();
    refetchEmptyTheatre();
    refetchDressingRoom();
    refetchBuildIt();
    refetchEarntWatch();
  };

  return {
    completedTasks,
    markTaskComplete,
    refetchAll,
    hasCompletedWhiteRabbit: hasCompletedWhiteRabbit as boolean,
    hasCompletedShopTheLooks: hasCompletedShopTheLooks as boolean,
    hasCompletedEatCake: hasCompletedEatCake as boolean,
    hasCompletedDarkGlass: hasCompletedDarkGlass as boolean,
    hasCompletedTunnel58: hasCompletedTunnel58 as boolean,
    hasCompletedPatternLibrary: hasCompletedPatternLibrary as boolean,
    hasCompletedEmptyTheatre: hasCompletedEmptyTheatre as boolean,
    hasCompletedDressingRoom: hasCompletedDressingRoom as boolean,
    hasCompletedBuildIt: hasCompletedBuildIt as boolean,
    hasCompletedEarntWatch: hasCompletedEarntWatch as boolean,
  };
};

export default useQuestStatus;
