"use client";
import Image from "next/image";
import LaptopsSlides from "./components/LaptopsSlides";
import MobileSlides from "./components/MobileSlides";
import About from "./components/About";
import Skills from "./components/Skills";
import MiloProjectCard from "./components/MiloProjectCard";
import TaskrMobileCard from "./components/TaskrMobileCard";
import LizCard from "./components/LizCard";
import TaskrWebCard from "./components/TaskrWebCard";
import { useState } from "react";
import MiloModal from "./components/MiloModal";
import TaskrModal from "./components/TaskrModal";
import LizModal from "./components/LizModal";
import TaskrMobileModal from "./components/TaskrMobileModal";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const [miloModal, setMiloModal] = useState(false);
  const [taskrModal, setTaskrModal] = useState(false);
  const [lizModal, setLizModal] = useState(false);
  const [taskrMobileModal, setTaskrMobileModal] = useState(false);

  const handleOpenMiloModal = () => {
    setMiloModal(true);
    console.log("milo modal open");
  };

  const handleCloseMiloModal = () => {
    setMiloModal(false);
  };

  const handleOpenTaskrModal = () => {
    setTaskrModal(true);
    console.log("taskr modal open");
  };

  const handleCloseTaskrModal = () => {
    setTaskrModal(false);
  };

  const handleOpenLizModal = () => {
    setLizModal(true);
    console.log("liz modal open");
  };

  const handleCloseLizModal = () => {
    setLizModal(false);
  };

  const handleOpenTaskrMobileModal = () => {
    setTaskrMobileModal(true);
    console.log("taskr mobile modal open");
  };

  const handleCloseTaskrMobileModal = () => {
    setTaskrMobileModal(false);
  };


  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full justify-center items-center p-8">
            <h1 className="text-3xl md:text-5xl p-2 text-gray-900 font-raleway leading-none">
              Hi, I&apos;m <span className="text-blue-500">Sean Cooper</span>,
            </h1>
            <h2 className="text-3xl md:text-5xl leading-none font-raleway text-gray-800">
              a Frontend Engineer.
            </h2>
            <div className="flex flex-row justify-center items-center space-x-4 mt-8">
              <div className="relative hidden lg:block">
                <Image
                  src="/laptopScreen.png"
                  alt="laptop and mobile phone"
                  width={600}
                  height={50}
                />
                <div className="absolute top-0 left-0 w-full h-80 flex justify-center items-center">
                  <LaptopsSlides />
                </div>
              </div>
              <div className="relative ">
                <MobileSlides />
              </div>
            </div>
          </div>
          
        </div>
        <div id="about">
        <About />
        </div>
        <div id="skills">
        <Skills />
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 md:flex-wrap items-center pt-20" id="portfolio">
        <div className="w-full h-full flex justify-center items-center">
          <button className="w-full h-full p-4" onClick={handleOpenMiloModal}>
            <MiloProjectCard />
          </button>
          <MiloModal isOpen={miloModal} onClose={handleCloseMiloModal} />
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <button className="w-full h-full p-4" onClick={handleOpenTaskrModal}>
            <TaskrWebCard />
          </button>
          <TaskrModal isOpen={taskrModal} onClose={handleCloseTaskrModal} />
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <button className="w-full h-full p-4" onClick={handleOpenLizModal}>
            <LizCard />
          </button>
          <LizModal isOpen={lizModal} onClose={handleCloseLizModal} />
        </div>


        <div className="w-full h-full flex justify-center items-center">
          <button className="w-full h-full p-4" onClick={handleOpenTaskrMobileModal}>
            <TaskrMobileCard />
          </button>
        </div>
        <TaskrMobileModal isOpen={taskrMobileModal} onClose={handleCloseTaskrMobileModal} />

       
      </div>
      <div id="contact" className="flex flex-col w-full justify-center items-center p-8 bg-gray-100" >
        <h2 className="text-3xl md:text-5xl leading-none font-raleway text-gray-800 p-5">Contact Me</h2>
      <ContactForm />
      </div>
    </>
  );
}
