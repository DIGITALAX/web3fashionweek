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

  const { data: hasCompletedWhiteRabbit, refetch: refetchWhiteRabbit } = useReadContract({
    address: QUEST_CONTRACT,
    abi: W3FWQuestABI,
    functionName: "hasCompletedStep",
    args: [BigInt(1), address, langId],
    query: {
      enabled: !!address && isConnected,
    },
    account: address,
  });

  const { data: hasCompletedShopTheLooks, refetch: refetchShopTheLooks } = useReadContract({
    address: QUEST_CONTRACT,
    abi: W3FWQuestABI,
    functionName: "hasCompletedStep",
    args: [BigInt(2), address, langId],
    query: {
      enabled: !!address && isConnected,
    },
    account: address,
  });

  const { data: hasCompletedEatCake, refetch: refetchEatCake } = useReadContract({
    address: QUEST_CONTRACT,
    abi: W3FWQuestABI,
    functionName: "hasCompletedStep",
    args: [BigInt(3), address, langId],
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

    setCompletedTasks(tasks);
  }, [lang, hasCompletedWhiteRabbit, hasCompletedShopTheLooks, hasCompletedEatCake]);

  const markTaskComplete = (taskId: string) => {
    if (!completedTasks.includes(taskId)) {
      setCompletedTasks((prev) => [...prev, taskId]);
    }
  };

  const refetchAll = () => {
    refetchWhiteRabbit();
    refetchShopTheLooks();
    refetchEatCake();
  };

  return {
    completedTasks,
    markTaskComplete,
    refetchAll,
    hasCompletedWhiteRabbit: hasCompletedWhiteRabbit as boolean,
    hasCompletedShopTheLooks: hasCompletedShopTheLooks as boolean,
    hasCompletedEatCake: hasCompletedEatCake as boolean,
  };
};

export default useQuestStatus;
