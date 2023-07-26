// components/Modal.js
import React from "react";
import Carousel from "./Carousel";
import { Tooltip } from "./Skills";
import { TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";
import { SiExpo, SiFirebase } from "react-icons/si";
import { IoLogoAppleAppstore } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MiloModal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  const slides = [
    "/MILOLoginScreenSim2.png",
    "/MiloWelcomeScreen.png",
    "/MiloDashboardScreen.png",
    "/MiloReportScreen.png",
    "/MiloCalScreen.png",
    "/MiloDataScreen.png",
  ];

  return (
    <>
      <div className="fixed-inset-0 bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="max-h-screen overflow-y-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full p-2 bg-gray-100 outline-none focus:outline-none">
            <div className="relative flex items-start justify-center p-5 border-b border-solid border-gray-300 rounded-t ">
              <h1 className="text-2xl font-raleway">
                MILO: Personal Fitness Tracker
              </h1>
              <button
                className="absolute top-0 right-0 bg-transparent border-0 text-black float-right"
                onClick={onClose}
              >
                <span className="text-gray-500  h-6 w-6 text-xl block hover:text-black  ">x</span>
              </button>
            </div>
            <div className="p-2 border-b border-solid border-gray-300">
              <Carousel slides={slides} imageSize={200} />
            </div>
            <div className="flex flex-col mx-auto justify-center items-center space-x-4 p-5 gap-3">
              <h2 className="text-xl font-raleway">About</h2>
              <p>
                Combining my experience in the health and fitness industries
                with my passion for software development, I designed, developed,
                and published this mobile app to allow users to track and make
                informed decisions abotu their fitness habits.The app is
                currently in Public Beta Testing through Apple&apos;s
                TestFlight.
              </p>
              <h2 className="text-xl font-raleway">Features</h2>
              <ul className="list-disc">
                <li>
                  Full stack mobile fitness application using React Native.
                </li>
                <li>
                  Algorithm to track user fitness data and provide personalized
                  suggestions.
                </li>
                <li>
                  Integrated with Firebase as backend to handle user
                  authentication, real-time data syncing, and storage of data.
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
                  <Tooltip text="React Native">
                    <TbBrandReactNative size={35} />
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
                <li className="mx-4 hover:text-gray-300">
                  <Tooltip text="Apple App Store Connect">
                    <IoLogoAppleAppstore size={35} />
                  </Tooltip>
                </li>
              </ul>
              <h2 className="text-xl leading-none font-raleway text-gray-800 mt-3">
            Please contact me if you wish to join the MILO beta!
          </h2>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default MiloModal;
