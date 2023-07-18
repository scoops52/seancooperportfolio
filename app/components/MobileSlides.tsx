"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function MobileSlides() {
  const [slides, setSlides] = useState(0);

  const nextSlide = () => {
    setSlides(slides === 3 ? 0 : slides + 1);
  };

  const prevSlide = () => {
    setSlides(slides === 0 ? 3 : slides - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
        nextSlide()
    }, 3000)
    return () => clearInterval(interval)
})

  return (
    <>
      {slides === 0 && (
        
        <Image
          src="/MILOLoginScreenSim2.png"
          alt="Taskr Web App"
          width={150}
          height={0}
          className="rounded-xl"
          
        />
        
      )}
      {slides === 1 && (
        <Image
          src="/MILODashboardScreen3.PNG"
          alt="LizzyMeg.com screen"
          width={140}
          height={0}
          className="rounded-xl"
        />
      )}
      {/* {slides === 2 && (
        <Image
          src="/TaskrMobileLightScreen.PNG"
          alt="SeanCooper.com screen"
          width={140}
          height={0}
          className="rounded-xl"
        />
      )} */}
      {slides === 2 && (
        <Image
          src="/TaskrMobileDarkScreen.PNG"
          alt="Watchr App screen"
          width={140}
          height={0}
          className="rounded-xl"
        />
      )}
    </>
  );
}

export default MobileSlides;
