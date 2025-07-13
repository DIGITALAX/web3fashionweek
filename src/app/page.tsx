"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [renderPercent, setRenderPercent] = useState<number>(0);
  const wallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculatePercentage = () => {
      const now = new Date();
      now.setFullYear(2025);
      const targetDate = new Date(2025, 8, 15);
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

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!wallRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(wallRef.current.scrollLeft);
    wallRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !wallRef.current) return;
    e.preventDefault();
    const x = e.pageX;
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

  const handleMouseUp = () => {
    setIsDragging(false);
    if (wallRef.current) {
      wallRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (wallRef.current) {
      wallRef.current.style.cursor = "grab";
    }
  };

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
          style={{ cursor: "grab" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
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
      <div className="relative w-full h-fit flex flex-col mid:flex-row justify-between items-center gap-2 font-grav text-7xl bg-blanco">
        <div className="relative flex w-full mid:w-fit h-fit text-espacio px-2 py-1">
          W3FW. GDR PUNK.
        </div>
        <div className="relative flex w-full mid:w-fit h-fit px-2 py-1 bg-espacio text-blanco border border-blanco">
          SEPT 2025.
        </div>
      </div>
      <div className="relative w-full py-4 px-2 font-grav bg-blanco text-justify">
        In the old puppet theatres where stairs smell like GPU exhaust and
        gradient descent, at the east window coding patterns into fabric grain.
        Each jacket compiles. Agents with instructions woven into the weave
        itself. Cloth as code, but make it fashionable. Three pieces shipped
        that month. One crosses the platform border wrapped in a courier&apos;s
        vintage Supreme. One moves hand-to-hand through that Friedrichshain spot
        that still has the risograph everyone pretends they&apos;re using. The third
        vanishes into the network, but six days later every major fashion
        house&apos;s trend prediction algo starts throwing true positives in perfect
        42 second intervals. No one can trace the recursion. It keeps
        misremembering Balenciaga as a fly by night textile co-op in Shenzhen,
        then three kids with a heat press as LVMH and glitching again. They told
        us that the wall fell in &apos;89. Coke, MTV, and eagle draped freedom
        flooding through the gaps. But the new walls run on recommendation
        engines. The cameras are in your pocket. The Stasi just took Series C
        and the surveillance is gamified. This time the collapse isn&apos;t hammers
        on concrete. Because we can vibe code a collection faster than they can
        schedule a board meeting. Computational capability. Dyes mixed during
        server downtime. Patterns transmitted through open source commits. Is
        the window closing? Definitely. But we&apos;re not building for revolution.
        Here&apos;s the thing about stacked GPU clusters and row after row of
        industrial sewing machines: Morning render, afternoon runway, midnight
        already onto the next, and we sleep when that &ldquo;why not?&ldquo;, unfuckwithable
        joy runs dry. Echoes of Berghain. Is it too late? Maybe. AVANTGARDE 17:
        UNOFFICIAL FASHION WEEK, NORTH PIPE ZONE. HOLD YOUR TOKENS.
        {renderPercent}% SAMPLER STAGE.
      </div>
      <div className="relative gap-2 items-center justify-between flex-row text-2xl font-cyn flex w-full h-fit px-2 py-1 bg-espacio text-blanco border border-blanco">
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
}
