import React from "react";
import { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiStyledcomponents,
  SiFirebase,
  SiExpo,
  SiPython,
} from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BsBootstrap } from "react-icons/bs";
import { GrSwift } from "react-icons/gr";
import {
  TbBrandCss3,
  TbBrandReactNative,
  TbBrandTypescript,
  TbBrandNextjs,
  TbBrandStorybook,
} from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";

function Skills() {
  return (
    <div className="bg-gray-300 flex flex-col w-full justify-center items-center p-8">
      <h1 className="text-3xl md:text-4xl p-2 text-gray-900 font-raleway leading-none">
        Technical Skills
      </h1>
      <div className="flex flex-col justify-between">
      <div className="flex gap-5 justify-between items-center space-x-4">
        <h2 className="text-xl md:text-2xl leading-none font-raleway text-gray-800">
          Specializing In:
        </h2>
        <div className="flex flex-row items-center space-x-4 p-5">
          <ul className="flex items-center">
            <li className="mx-4 hover:text-gray-300">
              <AiOutlineHtml5 size={35} />
            </li>
            <li className="mx-4 hover:text-gray-300">
              <TbBrandCss3 size={35} />
            </li>
            <li className="mx-4 hover:text-gray-300">
              <RiJavascriptLine size={35} />
            </li>
            <li className="mx-4 hover:text-gray-300">
              <TbBrandTypescript size={35} />
            </li>
            <li className="mx-4 hover:text-gray-300">
              <FaReact size={35} />
            </li>
            <li className="mx-4 hover:text-gray-300">
              <TbBrandReactNative size={35} />
            </li>
            <li className="mx-4 hover:text-gray-300">
              <SiRedux size={35} />
            </li>
            <li className="mx-4 hover:text-gray-300">
              <TbBrandNextjs size={35} />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between gap-5 items-center space-x-4">
        <h2 className="text-xl md:text-2xl leading-none font-raleway text-gray-800">
          Experience In:
        </h2>
        <div className="flex flex-row gap-5 items-center space-x-4 p-5">
          <ul className="flex items-center">
            <li className="mx-4 hover:text-gray-300">
              <SiTailwindcss size={35} />
            </li>
            <li className="mx-4 hover:text-gray-300">
              <BsBootstrap size={35} />
            </li>
            <li className="mx-4 hover:text-gray-300">
              <TbBrandStorybook size={35} />
            </li>
            <li className="mx-4 hover:text-gray-300">
              <SiStyledcomponents size={35} />
            </li>
            <li className="mx-4 hover:text-gray-300">
              <SiFirebase size={35} />
            </li>
            <li className="mx-4 hover:text-gray-300">
              <SiExpo size={35} />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center space-x-4">
        <h2 className="text-xl md:text-2xl leading-none font-raleway text-gray-800">
          Currently Learning:
        </h2>
        <div className="flex flex-row gap-5 items-center space-x-4 p-5">
          <ul className="flex items-center">
            <li className="mx-4 hover:text-gray-300">
              <GrSwift size={35} />
            </li>
            <li className="mx-4 hover:text-gray-300">
              <SiPython size={35} />
            </li>
            <li className="mx-4 hover:text-gray-300">
              <FaNodeJs size={35} />
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Skills;
