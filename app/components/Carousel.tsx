import React, { useState } from 'react'
import Image from 'next/image'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

interface CarouselProps {
    slides: string[];
    imageSize?: number
}

function Carousel({ slides, imageSize }: CarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
    }

  return (
    
    <div className="relative overflow-hidden" id='about'>
        <div className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
            {slides.map((slide) => (
                <div className="w-full flex justify-center flex-shrink-0" key={slide}>
                    <Image
                        src={slide}
                        alt={slide}
                        width={imageSize}
                        height={50}
                        key={slide}  
                    />
                </div>
                
            ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between">
            <button onClick={prevSlide} className="p-3 rounded-full shadow bg-gray-300  hover:bg-gray-100">
                <FaChevronLeft size={24} color='gray' />
            </button>
            <button onClick={nextSlide} className="p-3 rounded-full shadow bg-gray-300  hover:bg-gray-100">
                <FaChevronRight size={24} color='gray' />
            </button>
        </div>
        <div className="absolite bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-gray-300 rounded-full
              ${currentSlide === i ? "p-2" : "bg-opacity-50"}
            `}
            key={i}
            />
          ))}
        </div>
        </div>
    </div>
    
  )
}

export default Carousel