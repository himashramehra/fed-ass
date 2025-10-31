import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const slides = [
  {
    url: "https://picsum.photos/id/1015/800/400",
    caption: "Beautiful Mountain View",
  },
  {
    url: "https://picsum.photos/id/1016/800/400",
    caption: "Serene Lake Reflection",
  },
  {
    url: "https://picsum.photos/id/1018/800/400",
    caption: "Vibrant Forest Path",
  },
  {
    url: "https://picsum.photos/id/1020/800/400",
    caption: "Golden Sunset Glow",
  },
  {
    url: "https://picsum.photos/id/1024/800/400",
    caption: "City Lights at Night",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Swipe support
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative w-full max-w-4xl mx-auto mt-10 shadow-xl rounded-3xl overflow-hidden"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={slides[current].url}
            alt="carousel"
            className="w-full h-64 md:h-96 object-cover"
          />
          {/* Gradient Overlay with Caption */}
          <div className="absolute bottom-0 w-full h-24 md:h-32 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
            <h2 className="text-white text-lg md:text-2xl font-bold">
              {slides[current].caption}
            </h2>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-4 p-3 bg-gradient-to-br from-pink-400 to-yellow-400 text-white rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-4 p-3 bg-gradient-to-br from-green-400 to-blue-500 text-white rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaArrowRight />
      </button>

      {/* Colorful Dots */}
      <div className="flex justify-center gap-3 mt-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-4 md:w-5 md:h-5 rounded-full transition transform hover:scale-125 ${
              idx === current
                ? "bg-gradient-to-r from-pink-500 to-yellow-500"
                : "bg-gray-300"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
