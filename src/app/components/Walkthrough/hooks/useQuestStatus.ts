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
    args: [BigInt(2), address, langId],
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

    setCompletedTasks(tasks);
  }, [lang, hasCompletedWhiteRabbit]);

  const markTaskComplete = (taskId: string) => {
    if (!completedTasks.includes(taskId)) {
      setCompletedTasks((prev) => [...prev, taskId]);
    }
  };

  const refetchAll = () => {
    refetchWhiteRabbit();
  };

  return {
    completedTasks,
    markTaskComplete,
    refetchAll,
    hasCompletedWhiteRabbit: hasCompletedWhiteRabbit as boolean,
  };
};

export default useQuestStatus;
