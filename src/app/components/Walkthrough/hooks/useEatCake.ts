"use client";

import { useState, useCallback, useContext, useEffect } from "react";
import { useAccount, usePublicClient, useReadContract } from "wagmi";
import { QUEST_CONTRACT, getLangId } from "@/app/lib/constants";
import W3FWQuestABI from "@/abis/W3FWQuest.json";
import { Language } from "../types/walkthrough.types";
import { ModalContext } from "@/app/providers";
import { createWalletClient, custom } from "viem";
import { chains } from "@lens-chain/sdk/viem";

export const useEatCake = (
  lang: Language,
  dict: any,
  onSuccess?: () => void
) => {
  const { address, isConnected } = useAccount();
  const publicClient = usePublicClient();
  const context = useContext(ModalContext);
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const langId = getLangId(lang);

  const { data: stepData } = useReadContract({
    address: QUEST_CONTRACT,
    abi: W3FWQuestABI,
    functionName: "getStep",
    args: [BigInt(3)],
  });

  const { data: hasCompleted } = useReadContract({
    address: QUEST_CONTRACT,
    abi: W3FWQuestABI,
    functionName: "hasCompletedStep",
    args: [BigInt(3), address, langId],
    query: {
      enabled: !!address && isConnected,
    },
  });

  const { data: stepGates } = useReadContract({
    address: QUEST_CONTRACT,
    abi: W3FWQuestABI,
    functionName: "getStepERC20Gates",
    args: [BigInt(3)],
  });

  useEffect(() => {
 
  }, [stepData, stepGates, hasCompleted, address, langId]);

  const mint = useCallback(async () => {
    if (!address || !isConnected || !publicClient) return;

    const clientWallet = createWalletClient({
      chain: chains.mainnet,
      transport: custom((window as any).ethereum),
    });

    setIsMinting(true);

    try {
      const hash = await clientWallet.writeContract({
        address: QUEST_CONTRACT,
        abi: W3FWQuestABI,
        functionName: "completeStep",
        args: [BigInt(3), langId],
        account: address,
      });

      await publicClient.waitForTransactionReceipt({ hash });

      onSuccess?.();
      context?.showSuccess(dict?.cakeMintSuccess || dict?.mintSuccess, hash);
    } catch (err: any) {
      console.error("EatCake mint error:", err);
      console.error("Error message:", err.message);
      context?.showError(dict?.cakeMintError || dict?.mintError);
    }

    setIsMinting(false);
  }, [address, isConnected, langId, publicClient, dict, onSuccess, context]);

  return {
    isConnected,
    address,
    mint,
    isMinting,
    isReady: !!publicClient,
  };
};

export default useEatCake;
