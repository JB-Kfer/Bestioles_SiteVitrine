import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 7000,
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className="overflow-hidden rounded-lg relative z-0">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-bestiolegreen"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-bestiolegreen"
        >
        <ChevronRight size={40} />
        </button>
      </div>

      <div className=" ">
        <div className="flex items-center justify-center rounded-lg gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              opacity-0 transition-opacity rounded-lg  bg-white
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}