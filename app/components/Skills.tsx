import React, { ReactNode } from "react";
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

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export function Tooltip({ text, children }: TooltipProps) {
  return (
    <div className="relative group">
      {children}
      <span className="hidden group-hover:block bg-gray-800 text-white text-sm py-1 px-2 rounded absolute bottom-0 left-1/2 transform -translate-x-1/2">
        {text}
      </span>
    </div>
  );
}

function Skills() {
  return (
    <div className="bg-gray-300 flex flex-col w-full justify-center items-center p-8 pt-11 container">
      <h1 className="text-3xl md:text-4xl p-6 text-gray-900 font-raleway leading-none">
        Technical Skills
      </h1>
      <p>(Hover for tech name)</p>
      <div className="flex flex-col justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl md:text-2xl leading-none font-raleway text-gray-800 hidden md:block">
            Specializing In:
          </h2>
          <div className="flex flex-row items-center space-x-4 p-5">
            <ul className="flex items-center flex-wrap">
              <li className="mx-4 hover:text-gray-300">
                <Tooltip text="HTML5">
                  <AiOutlineHtml5 size={35} />
                </Tooltip>
              </li>
              <li className="mx-4 hover:text-gray-300">
                <Tooltip text="CSS3">
                  <TbBrandCss3 size={35} />
                </Tooltip>
              </li>
              <li className="mx-4 hover:text-gray-300">
                <Tooltip text="JavaScript">
                  <RiJavascriptLine size={35} />
                </Tooltip>
              </li>
              <li className="mx-4 hover:text-gray-300">
                <Tooltip text="TypeScript">
                  <TbBrandTypescript size={35} />
                </Tooltip>
              </li>
              <li className="mx-4 hover:text-gray-300">
                <Tooltip text="React">
                  <FaReact size={35} />
                </Tooltip>
              </li>
              <li className="mx-4 hover:text-gray-300">
                <Tooltip text="React Native">
                  <TbBrandReactNative size={35} />
                </Tooltip>
              </li>
              <li className="mx-4 hover:text-gray-300">
                <Tooltip text="Redux">
                  <SiRedux size={35} />
                </Tooltip>
              </li>
              <li className="mx-4 hover:text-gray-300">
                <Tooltip text="Next.js">
                  <TbBrandNextjs size={35} />
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <h2 className="text-xl md:text-2xl leading-none font-raleway text-gray-800 hidden md:block">
            Experience With:
          </h2>
          <div className="flex flex-row items-center p-5">
            <ul className="flex items-center">
              <li className="mx-4 hover:text-gray-300">
                <Tooltip text="Tailwind CSS">
                  <SiTailwindcss size={35} />
                </Tooltip>
              </li>
              <li className="mx-4 hover:text-gray-300">
                <Tooltip text="Bootstrap CSS">
                  <BsBootstrap size={35} />
                </Tooltip>
              </li>
              <li className="mx-4 hover:text-gray-300">
                <Tooltip text="Storybook">
                  <TbBrandStorybook size={35} />
                </Tooltip>
              </li>
              <li className="mx-4 hover:text-gray-300">
                <Tooltip text="Styled Components">
                  <SiStyledcomponents size={35} />
                </Tooltip>
              </li>
              <li className="mx-4 hover:text-gray-300">
                <Tooltip text="Firebase">
                  <SiFirebase size={35} />
                </Tooltip>
              </li>
              <li className="mx-4 hover:text-gray-300">
                <Tooltip text="Expo">
                  <SiExpo size={35} />
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center space-x-20">
          <h2 className="text-xl md:text-2xl leading-none font-raleway text-gray-800 hidden md:block">
            Learning:
          </h2>
          <div className="flex flex-row gap-5 items-center space-x-4 p-5">
            <ul className="flex items-center">
              <li className="mx-4 hover:text-gray-300">
                <Tooltip text="Swift">
                  <GrSwift size={35} />
                </Tooltip>
              </li>
              <li className="mx-4 hover:text-gray-300">
                <Tooltip text="Python">
                  <SiPython size={35} />
                </Tooltip>
              </li>
              <li className="mx-4 hover:text-gray-300">
                <Tooltip text="Node.js">
                  <FaNodeJs size={35} />
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
