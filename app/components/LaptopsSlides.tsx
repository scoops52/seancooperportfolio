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

  // useEffect(() => {
  //     const interval = setInterval(() => {
  //         nextSlide()
  //     }, 3000)
  //     return () => clearInterval(interval)
  // })

  return (
    <>
      {slides === 0 && (
        <Image
          src="/TaskrScreen.png"
          alt="Taskr Web App"
          width={480}
          height={200}
          style={{ objectFit: "contain" }}
        />
      )}
      {slides === 1 && <h1 className="text-black">Pic 2</h1>}
      {slides === 2 && <h1 className="text-black">Pic 3</h1>}
      {slides === 3 && <h1 className="text-black">Pic 4</h1>}
      </>
  );
}

export default LaptopsSlides;
