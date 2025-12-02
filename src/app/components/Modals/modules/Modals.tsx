"use client";

import { ModalContext } from "@/app/providers";
import { useContext } from "react";
import { Success } from "./Success";
import { Error } from "./Error";

export default function Modals({ dict, lang }: { dict: any; lang: string }) {
  const context = useContext(ModalContext);
  return (
    <>
      {context?.successData && <Success lang={lang} dict={dict} />}
      {context?.errorData && <Error dict={dict} lang={lang} />}
    </>
  );
}
