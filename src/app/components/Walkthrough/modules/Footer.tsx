"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getFontCyn, getFontGrav } from "@/app/lib/constants";

const Footer = ({ dict, lang }: { dict: any; lang: string }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [renderPercent, setRenderPercent] = useState<number>(0);
  const wallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculatePercentage = () => {
      const now = new Date();
      now.setFullYear(2025);
      const targetDate = new Date(2025, 10, 30);
      const startDate = new Date(2025, 6, 10);

      const totalDays = Math.ceil(
        (targetDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      const daysPassed = Math.ceil(
        (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      let percentage = Math.min(
        100,
        Math.max(0, (daysPassed / totalDays) * 100)
      );
      if (now >= targetDate) percentage = 100;

      setRenderPercent(Math.floor(percentage));
    };

    calculatePercentage();
    const interval = setInterval(calculatePercentage, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const getEventX = (e: React.MouseEvent | React.TouchEvent): number => {
    if ("touches" in e) {
      return e.touches[0]?.pageX || 0;
    }
    return e.pageX;
  };

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!wallRef.current) return;
    setIsDragging(true);
    setStartX(getEventX(e));
    setScrollLeft(wallRef.current.scrollLeft);
    wallRef.current.style.cursor = "grabbing";
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !wallRef.current) return;
    e.preventDefault();
    const x = getEventX(e);
    const walk = (x - startX) * 1.5;
    wallRef.current.scrollLeft = scrollLeft - walk;

    const backgroundVideo = document.getElementById(
      "background-video"
    ) as HTMLVideoElement;
    if (backgroundVideo) {
      const currentScrollLeft = wallRef.current.scrollLeft;
      const maxScroll =
        wallRef.current.scrollWidth - wallRef.current.clientWidth;
      const scrollPercent = currentScrollLeft / maxScroll;
      const translateX = -scrollPercent * 20;
      backgroundVideo.style.transform = `translateX(${translateX}vw) scale(1.3)`;
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (wallRef.current) {
      wallRef.current.style.cursor = "grab";
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => handleStart(e);
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e);
  const handleMouseUp = () => handleEnd();
  const handleMouseLeave = () => handleEnd();

  const handleTouchStart = (e: React.TouchEvent) => handleStart(e);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e);
  const handleTouchEnd = () => handleEnd();

  return (
    <div className="relative selection:bg-black selection:text-white w-full h-fit flex flex-col">
      <div className="relative w-full flex-col h-screen flex items-center justify-center overflow-hidden">
        <video
          id="background-video"
          muted
          loop
          autoPlay
          draggable={false}
          className="object-cover absolute flex w-full h-full top-0 left-0 z-0"
          style={{ transform: "scale(1.3)", transformOrigin: "center center" }}
          poster="/images/gpufactory.png"
        >
          <source src="/videos/gpufactory.mp4" />
        </video>
        <div
          ref={wallRef}
          className="absolute w-full h-full overflow-x-auto overflow-y-hidden hide-scrollbar z-10"
          style={{ cursor: "grab", touchAction: "pan-x" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            alt="Wall"
            draggable={false}
            width={3000}
            height={1000}
            src={"/images/wall.png"}
            className="h-full object-cover"
            style={{ minWidth: "max(200vw, 3187px)" }}
          />
        </div>
        <div className="relative w-full sm:w-fit h-fit flex items-center justify-center z-20">
          <div className="relative w-full sm:w-96 h-96 flex">
            <video
              muted
              loop
              autoPlay
              draggable={false}
              poster="/images/W3FW_poster.png"
              className="object-contain items-center justify-center flex w-full h-full relative z-0"
            >
              <source src="/videos/W3FW_poster.mp4" />
            </video>
          </div>
        </div>
      </div>
      <div
        className={`relative w-full h-fit flex flex-col mid:flex-row justify-between items-center gap-2 ${getFontGrav(lang)} text-7xl bg-blanco`}
      >
        <h1 className="relative flex w-full mid:w-fit h-fit text-espacio px-2 py-1">
          W3FW. GDR PUNK.
        </h1>
        <div className="relative flex w-full mid:w-fit h-fit px-2 py-1 bg-espacio text-blanco border border-blanco">
          NOV 2025.
        </div>
      </div>
      <div
        className={`relative w-full py-4 px-2 bg-blanco text-justify ${getFontGrav(lang)}`}
      >
        {dict?.footer} {renderPercent}% SAMPLER STAGE.
      </div>
      <div
        className={`relative gap-2 items-center justify-between flex-row text-2xl flex w-full h-fit px-2 py-1 bg-espacio text-blanco border border-blanco ${getFontCyn(lang)}`}
      >
        <div
          className="underline cursor-pointer"
          onClick={() => window.open("https://digitalax.xyz/")}
        >
          DIGITALAX
        </div>

        <div
          className="underline cursor-pointer"
          onClick={() => window.open("https://globaldesignernetwork.com/")}
        >
          GDN
        </div>
      </div>
    </div>
  );
};

export default Footer;
