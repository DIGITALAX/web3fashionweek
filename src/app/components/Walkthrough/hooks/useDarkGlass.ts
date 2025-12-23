"use client";

import { useState, useCallback, useContext } from "react";
import { useAccount, usePublicClient, useReadContract } from "wagmi";
import { QUEST_CONTRACT, MONA_TOKEN, GENESIS_NFT, getLangId } from "@/app/lib/constants";
import W3FWQuestABI from "@/abis/W3FWQuest.json";
import { Language } from "../types/walkthrough.types";
import { ModalContext } from "@/app/providers";
import { createWalletClient, custom, erc20Abi, erc721Abi } from "viem";
import { chains } from "@lens-chain/sdk/viem";

export const useDarkGlass = (
  lang: Language,
  dict: any,
  onSuccess?: () => void
) => {
  const { address, isConnected } = useAccount();
  const publicClient = usePublicClient();
  const context = useContext(ModalContext);
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const [isCompleting, setIsCompleting] = useState<boolean>(false);
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
    args: [BigInt(4)],
  });

  const hasEnoughMona = (() => {
    if (!monaBalance || !stepGates || !Array.isArray(stepGates)) return false;
    const monaGate = stepGates.find(
      (gate: { token: string; requiredAmount: bigint }) =>
        gate.token.toLowerCase() === MONA_TOKEN.toLowerCase()
    );
    if (!monaGate) return monaBalance > BigInt(0);
    return monaBalance >= monaGate.requiredAmount;
  })();

  const hasGenesisNFT = genesisBalance ? genesisBalance > BigInt(0) : false;

  const canMint = hasEnoughMona || hasGenesisNFT;

  const completeStep = useCallback(async () => {
    if (!address || !isConnected || !publicClient) return;

    const clientWallet = createWalletClient({
      chain: chains.mainnet,
      transport: custom((window as any).ethereum),
    });

    setIsCompleting(true);

    try {
      const hash = await clientWallet.writeContract({
        address: QUEST_CONTRACT,
        abi: W3FWQuestABI,
        functionName: "completeStep",
        args: [BigInt(4), langId],
        account: address,
      });

      await publicClient.waitForTransactionReceipt({ hash });

      onSuccess?.();
      context?.showSuccess(dict?.stepCompleteSuccess || dict?.mintSuccess, hash);
    } catch (err: any) {
      console.error(err.message);
      context?.showError(dict?.stepCompleteError || dict?.mintError);
    }

    setIsCompleting(false);
  }, [address, isConnected, langId, publicClient, dict, onSuccess, context]);

  const mint = useCallback(async () => {
    if (!address || !isConnected || !publicClient || !canMint) return;

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
        args: [BigInt(4), langId],
        account: address,
      });

      await publicClient.waitForTransactionReceipt({ hash });

      onSuccess?.();
      context?.showSuccess(dict?.darkglassMintSuccess || dict?.mintSuccess, hash);
    } catch (err: any) {
      console.error(err.message);
      context?.showError(dict?.darkglassMintError || dict?.mintError);
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
    canMint,
  ]);

  return {
    isConnected,
    address,
    mint,
    completeStep,
    isMinting,
    isCompleting,
    canMint,
    hasEnoughMona,
    hasGenesisNFT,
    isReady: !!publicClient,
  };
};

export default useDarkGlass;