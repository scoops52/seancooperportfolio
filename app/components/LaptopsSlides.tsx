"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function LaptopsSlides() {
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
          src="/TaskrScreenShort.png"
          alt="Taskr Web App"
          width={480}
          height={200}
          style={{ objectFit: "contain" }}
          priority={true}
        />
      )}
      {slides === 1 && (
        <Image
          src="/LizScreenShort.png"
          alt="LizzyMeg.com screen"
          width={480}
          height={200}
          style={{ objectFit: "contain" }}
          priority={true}
        />
      )}
      {slides === 2 && (
        <Image
          src="/seanScreenShort.png"
          alt="SeanCooper.com screen"
          width={480}
          height={200}
          style={{ objectFit: "contain" }}
          priority={true}
        />
      )}
      {slides === 3 && (
        <Image
          src="/watchrScreenShort.png"
          alt="Watchr App screen"
          width={480}
          height={200}
          style={{ objectFit: "contain" }}
          priority={true}
        />
      )}
    </>
  );
}

export default LaptopsSlides;
