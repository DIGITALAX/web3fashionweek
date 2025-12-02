"use client";
import { createContext, SetStateAction, useState } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { chains } from "@lens-chain/sdk/viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ErrorData,
  Profile,
  SuccessData,
} from "./components/Walkthrough/types/walkthrough.types";

const queryClient = new QueryClient();

export const ModalContext = createContext<
  | {
      profile: Profile | undefined;
      setProfile: (e: SetStateAction<Profile | undefined>) => void;
      showSuccess: (message: string, txHash?: string) => void;
      showError: (message: string) => void;
      hideSuccess: () => void;
      hideError: () => void;
      successData: SuccessData | null;
      errorData: ErrorData | null;
    }
  | undefined
>(undefined);

export const config = createConfig(
  getDefaultConfig({
    appName: "W3F3",
    walletConnectProjectId: process.env
      .NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
    appUrl: "https://web3fashionweek.com",
    appIcon: "https://web3fashionweek.com/favicon.ico",
    chains: [chains.mainnet],
    connectors: [],
    transports: {
      [chains.mainnet.id]: http(),
    },
    ssr: true,
  })
);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<Profile | undefined>();
  const [successData, setSuccessData] = useState<SuccessData | null>(null);
  const [errorData, setErrorData] = useState<ErrorData | null>(null);

  const showSuccess = (message: string, txHash?: string) => {
    setSuccessData({ message, txHash });
  };

  const showError = (message: string) => {
    setErrorData({ message });
  };

  const hideSuccess = () => {
    setSuccessData(null);
  };

  const hideError = () => {
    setErrorData(null);
  };

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          customTheme={{
            "--ck-font-family": '"Nerd Semi", cursive',
          }}
        >
          <ModalContext.Provider
            value={{
              profile,
              setProfile,
              showSuccess,
              showError,
              hideSuccess,
              hideError,
              successData,
              errorData,
            }}
          >
            {children}
          </ModalContext.Provider>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
