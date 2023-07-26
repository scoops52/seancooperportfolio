import React from "react";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { Tooltip } from "./Skills";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-900 font-raleway py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <p>© 2023 Sean Cooper. All rights reserved.</p>
        </div>
        <div className="text-center md:text-right flex flex-row items-center">
          <p>Built using:</p>
          <ul className="flex items-center">
            <li className="mx-4 hover:text-gray-300">
              <Tooltip text="React">
                <FaReact size={35} />
              </Tooltip>
            </li>
            <li className="mx-4 hover:text-gray-300">
              <Tooltip text="Next.js">
                <TbBrandNextjs size={35} />
              </Tooltip>
            </li>
            <li className="mx-4 hover:text-gray-300">
              <Tooltip text="Tailwind CSS">
                <SiTailwindcss size={35} />
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
