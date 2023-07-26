import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="bg-gray-200 flex flex-col w-full justify-center items-center p-8" >
      <h1 className="text-3xl md:text-4xl text-gray-900 font-raleway leading-none mt-8">
        About Me
      </h1>
      <div className="flex flex-row gap-5 items-center space-x-4 px-5">
        <p>
          Hello, and welcome to my website! I am a passionate and dedicated 
           <span className="text-blue-500"> Frontend Engineer</span> specializing in <span className="text-blue-500"> React and React Native</span>. After
          earning my Bachelor of Science in Human Biology at the <span className="text-red-700">University of
          Southern California</span>, I worked in both the healthcare and fitness
          industries. It was during these experiences that I encountered various
          challenges, igniting my curiosity to seek innovatie technololigcal
          solutions. Driven by the desire to bridge the gap between these
          industries and cutting-edge technology, I obtained a professional
          certificate in frontend engineering. This decision not only opened up
          the door to a new career, but also allowed me to combine my passion
          for technology with my desire to help others. Throughout my career, I
          have had the privilege of working on a diverse range of projects, from
          web apps to mobile applications and websites. With a deep
          understanding of user-centric design and a keen eye for detail, I take
          pride in crafting delightful user experiences that not only meet
          client objectives but also exceed expectations. When I am not immersed
          in code, you can find me out on the rugby pitch, combining my passion
          for an active lifestyle with my competative nature. I am excited to
          continue my journey as a frontend engineer, and I look forward to the
          opportunity to work with you!
        </p>
        <Image
          src={"/rugbyHeadshot.png"}
          alt="Sean Cooper"
          width={200}
          height={150}
          className="rounded-xl hidden md:block"
        />
      </div>
     
    </div>
  );
}

export default About;
