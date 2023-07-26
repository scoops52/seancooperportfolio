// components/Modal.js
import React from "react";
import Carousel from "./Carousel";
import { Tooltip } from "./Skills";
import {
  TbBrandCss3,
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandTypescript,
} from "react-icons/tb";
import { SiExpo, SiFirebase, SiRedux, SiTailwindcss } from "react-icons/si";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import Link from "next/link";
import { RiJavascriptLine } from "react-icons/ri";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TaskrMobileModal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  const slides = [
    "/TaskrMobileTasks.png",
    "/TaskrMobileCreateNobg.png",
    "/TaskrMobileComplete.png",
    "/TaskrMobileMenu.png",
    "/TaskrMobileLight.png",
  ];

  return (
    <>
      <div className="fixed-inset-0 bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="max-h-screen overflow-y-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full p-2 bg-gray-100 outline-none focus:outline-none">
            <div className="relative flex items-start justify-center p-3 border-b border-solid border-gray-300 rounded-t ">
              <h1 className="text-3xl font-raleway">
                Taskr Mobile App
              </h1>
              <button
                className="absolute top-0 right-0 bg-transparent border-0 text-black float-right"
                onClick={onClose}
              >
                <span className="text-gray-500  h-6 w-6 text-xl block hover:text-black  ">
                  x
                </span>
              </button>
            </div>
            <div className="p-2 border-b border-solid border-gray-300">
              <Carousel slides={slides} imageSize={200} />
            </div>
            <div className="flex flex-col mx-auto justify-center items-center space-x-4 p-5 gap-3">
              <h2 className="text-xl font-raleway">About</h2>
              <p>
                A mobile version of the Taskr app available on iOS and Android.
                Users can create, edit and delete tasks and set a duration. When
                the task duration is up, the are notified. Users can also pause,
                reset, and edit the timer.
              </p>
              <h2 className="text-xl font-raleway">Features</h2>
              <ul className="list-disc">
                <li>Runs on iOS and Android devices using React Native.</li>
                <li>Push notification when task duration is complete.</li>
                <li>Light and dark mode implemented for user preference.</li>
              </ul>
              <h2 className="text-xl font-raleway">Technologies</h2>
              <ul className="flex items-center">
                <li className="mx-4 hover:text-gray-300">
                  <Tooltip text="TypeScript">
                    <TbBrandTypescript size={35} />
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
                  <Tooltip text="Expo">
                    <SiExpo size={35} />
                  </Tooltip>
                </li>
              </ul>
            </div>
            <div className="flex flex-row mx-auto justify-center items-center space-x-4 p-5 gap-3">
              <Link
                href="exp://u.expo.dev/update/3cc4f2c3-8528-4f57-9b53-ea21630e2ed5"
                target="_blank"
                className="text-xl font-raleway underline hover:text-gray-300"
              >
                iOS Link
              </Link>
              <Link
                href="exp://u.expo.dev/update/57220d97-db26-41ca-a9a1-355ad2a41045"
                target="_blank"
                className="text-xl font-raleway underline hover:text-gray-300"
              >
                Android Link
              </Link>
              <Link
                href="https://github.com/scoops52/taskr-mobile"
                target="_blank"
                className="text-xl font-raleway underline hover:text-gray-300"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskrMobileModal;
