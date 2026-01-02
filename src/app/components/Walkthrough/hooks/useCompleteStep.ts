"use client";

import { useState, useCallback, useContext, useEffect } from "react";
import { useAccount, usePublicClient, useReadContract } from "wagmi";
import {
  GENESIS_NFT,
  MONA_TOKEN,
  QUEST_CONTRACT,
  getLangId,
} from "@/app/lib/constants";
import W3FWQuestABI from "@/abis/W3FWQuest.json";
import { Language } from "../types/walkthrough.types";
import { ModalContext } from "@/app/providers";
import { createWalletClient, custom, erc20Abi, erc721Abi } from "viem";
import { chains } from "@lens-chain/sdk/viem";

export const useCompleteStep = (
  lang: Language,
  dict: any,
  step: number,
  onSuccess?: () => void,
  successKey: string = "mintSuccess",
  errorKey: string = "mintError"
) => {
  const { address, isConnected } = useAccount();
  const publicClient = usePublicClient();
  const context = useContext(ModalContext);
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const langId = getLangId(lang);

  const { data: monaBalance } = useReadContract({
    address: MONA_TOKEN,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && isConnected,
    },
  });

  const { data: genesisBalance } = useReadContract({
    address: GENESIS_NFT,
    abi: erc721Abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && isConnected,
    },
  });

  const { data: stepGates } = useReadContract({
    address: QUEST_CONTRACT,
    abi: W3FWQuestABI,
    functionName: "getStepERC20Gates",
    args: [BigInt(step)],
  });

  const hasEnoughMona = (() => {
    if (!monaBalance || !stepGates || !Array.isArray(stepGates)) return false;
    const monaGate = stepGates.find(
      (gate: { token: string; requiredAmount: bigint }) =>
        gate.token.toLowerCase() === MONA_TOKEN.toLowerCase()
    );
    if (!monaGate) return true;
    return monaBalance >= monaGate.requiredAmount;
  })();

  const hasEnoughGenesis = (() => {
    if (!genesisBalance || !stepGates || !Array.isArray(stepGates))
      return false;
    const genesisGate = stepGates.find(
      (gate: { token: string; requiredAmount: bigint }) =>
        gate.token.toLowerCase() === GENESIS_NFT.toLowerCase()
    );
    if (!genesisGate) return true;
    return genesisBalance >= genesisGate.requiredAmount;
  })();

  const { data: stepData } = useReadContract({
    address: QUEST_CONTRACT,
    abi: W3FWQuestABI,
    functionName: "getStep",
    args: [BigInt(step)],
  });

  const { data: hasCompleted } = useReadContract({
    address: QUEST_CONTRACT,
    abi: W3FWQuestABI,
    functionName: "hasCompletedStep",
    args: [BigInt(step), address, langId],
    query: {
      enabled: !!address && isConnected,
    },
  });

  useEffect(() => {}, [stepData, stepGates, hasCompleted, address, langId]);

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
        args: [BigInt(step), langId],
        account: address,
      });

      await publicClient.waitForTransactionReceipt({ hash });

      onSuccess?.();
      context?.showSuccess(
        dict?.[successKey] || dict?.mintSuccess,
        hash
      );
    } catch (err: any) {
      console.error("Mint error:", err);
      console.error("Error message:", err.message);
      context?.showError(dict?.[errorKey] || dict?.mintError);
    }

    setIsMinting(false);
  }, [
    address,
    isConnected,
    langId,
    publicClient,
    dict,
    onSuccess,
    context,
    successKey,
    errorKey,
  ]);

  return {
    isConnected,
    address,
    mint,
    isMinting,
    isReady: !!publicClient,
    hasEnoughMona,
    hasEnoughGenesis,
  };
};

export default useCompleteStep;
