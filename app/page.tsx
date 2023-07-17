import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        <div className="flex flex-col w-full justify-center items-center p-8">
          <h1 className="text-3xl md:text-5xl p-2 text-gray-900 font-raleway leading-none">
            Hi, I'm <span className="text-blue-500">Sean Cooper</span>
          </h1>
          <h2 className="text-3xl md:text-5xl leading-none font-raleway text-gray-800">
            I am a Frontend Engineer.
          </h2>
          <Image
            src="/screens.png"
            alt="laptop and mobile phone"
            width={800}
            height={500}
          />
        </div>
        </div>
     
    </main>
  )
}
