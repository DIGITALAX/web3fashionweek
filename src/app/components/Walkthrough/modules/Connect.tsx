"use client";

import { useRef } from "react";
import { ConnectKitButton } from "connectkit";

const Connect = () => {
  return (
    <div className="relative flex flex-col w-full h-full items-center justify-center">
      <ConnectKitButton.Custom>
        {({ isConnected, show, truncatedAddress }) => {
          return (
            <button
              onClick={show}
              className="text-white hover:opacity-70 transition-opacity"
            >
              {isConnected ? truncatedAddress : "CONNECT"}
            </button>
          );
        }}
      </ConnectKitButton.Custom>
    </div>
  );
};

export default Connect;
