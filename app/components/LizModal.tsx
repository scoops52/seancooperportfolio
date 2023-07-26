// components/Modal.js
import React from "react";
import Carousel from "./Carousel";
import { Tooltip } from "./Skills";
import { TbBrandCss3, TbBrandNextjs, TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";
import { SiExpo, SiFirebase, SiRedux, SiTailwindcss } from "react-icons/si";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import Link from "next/link";
import { RiJavascriptLine } from "react-icons/ri";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LizModal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  const slides = [
    "/LizCardBg.png",
    "/LizAboutScreen.png",
    "/LizGalleryScreen.png",
    "/LizContactScreen.png",
    
    
    
  ];

  return (
    <>
      <div className="fixed-inset-0 bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="max-h-screen overflow-y-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full p-2 bg-gray-100 outline-none focus:outline-none">
            <div className="relative flex items-start justify-center p-3 border-b border-solid border-gray-300 rounded-t ">
              <h1 className="text-3xl font-raleway">
                LizzyMeg.com: Professional Dancer&apos;s Website
              </h1>
              <button
                className="absolute top-0 right-0 bg-transparent border-0 text-black float-right"
                onClick={onClose}
              >
                <span className="text-gray-500  h-6 w-6 text-xl block hover:text-black  ">x</span>
              </button>
            </div>
            <div className="p-2 border-b border-solid border-gray-300">
              <Carousel slides={slides} imageSize={600} />
            </div>
            <div className="flex flex-col mx-auto justify-center items-center space-x-4 p-5 gap-3">
              <h2 className="text-xl font-raleway">About</h2>
              <p>
                A website for a professional dancer. The website is a place for the dancer to showcase her work, and provide a way for potential clients to contact her. We collaberated to come up with an aestetic and design that fit her professional personality. I continue to maintain the website and update it with new content as needed. She has had numerous inquiries through this site.  
              </p>
              <h2 className="text-xl font-raleway">Features</h2>
              <ul className="list-disc">
                <li>
                  Contact form with direct email to client.
                </li>
                <li>
                  Photo Gallery with high quality images. 
                </li>
                <li>
                    Visually apealing and responsive design.
                </li>
              </ul>
              <h2 className="text-xl font-raleway">Technologies</h2>
              <ul className="flex items-center">
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
                <Tooltip text="React">
                <FaReact size={35} />
                </Tooltip>
              </li>
              
              <li className="mx-4 hover:text-gray-300">
                <Tooltip text="Next.js">
                <TbBrandNextjs size={35} />
                </Tooltip>
              </li>
              
              </ul>
            </div>
            <div className="flex flex-row mx-auto justify-center items-center space-x-4 p-5 gap-3">
            <Link href="https://lizzymeg.com/" target="_blank" className="text-xl font-raleway underline hover:text-gray-300">
                Link
            </Link>
            <Link href="https://github.com/scoops52/LizzyMeg3.0" target="_blank" className="text-xl font-raleway underline hover:text-gray-300">
                GitHub
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LizModal;
