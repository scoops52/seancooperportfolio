import Image from "next/image";
import LaptopsSlides from "./components/LaptopsSlides";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        <div className="flex flex-col w-full justify-center items-center p-8">
          <h1 className="text-3xl md:text-5xl p-2 text-gray-900 font-raleway leading-none">
            Hi, I'm <span className="text-blue-500">Sean Cooper</span>,
          </h1>
          <h2 className="text-3xl md:text-5xl leading-none font-raleway text-gray-800">
            a Frontend Engineer.
          </h2>
          <div className="flex flex-row justify-center items-center space-x-4 mt-8">
            <div className="relative">
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
              <Image
                src="/phoneScreen.png"
                alt="laptop and mobile phone"
                width={150}
                height={500}
              />
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <LaptopsSlides />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
