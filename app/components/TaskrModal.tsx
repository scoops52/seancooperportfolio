// components/Modal.js
import React from "react";
import Carousel from "./Carousel";
import { Tooltip } from "./Skills";
import { TbBrandNextjs, TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";
import { SiExpo, SiFirebase, SiRedux, SiTailwindcss } from "react-icons/si";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TaskrModal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  const slides = [
    "/TaskrWebCard.png",
    "/TaskrCreateLg.png",
    "/TaskrCompleteLg.png"
    
    
  ];

  return (
    <>
      <div className="fixed-inset-0 bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="max-h-screen overflow-y-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full p-2 bg-gray-100 outline-none focus:outline-none">
            <div className="relative flex items-start justify-center p-3 border-b border-solid border-gray-300 rounded-t ">
              <h1 className="text-3xl font-raleway">
                Taskr: Web Productivity App
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
                A web based productivity app. Users create tasks and set a designated time to work on task. Time can be paused, reset, and edited. Users are notified when the task duration is complete. An app I personally use in my day to day life to increase my productivity. Currently available on the web, with data storage and authenitcation to save and reuse tasks in progress. 
              </p>
              <h2 className="text-xl font-raleway">Features</h2>
              <ul className="list-disc">
                <li>
                  Ability to create, edit, and delete tasks.
                </li>
                <li>
                  Timer to track time spent on task. With ability to pause, reset, and edit timer. 
                </li>
                <li>
                    Visually apealing and responsive design.
                </li>
              </ul>
              <h2 className="text-xl font-raleway">Technologies</h2>
              <ul className="flex items-center">
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
                <Tooltip text="Redux">
                <SiRedux size={35} />
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
            <div className="flex flex-row mx-auto justify-center items-center space-x-4 p-5 gap-3">
            <Link href="https://taskr-nine.vercel.app/" target="_blank" className="text-xl font-raleway underline hover:text-gray-300">
                Link
            </Link>
            <Link href="https://github.com/scoops52/Watchr" target="_blank" className="text-xl font-raleway underline hover:text-gray-300">
                GitHub
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskrModal;
