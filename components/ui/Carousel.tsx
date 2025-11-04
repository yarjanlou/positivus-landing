"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

interface CarouselProps {
  slides: ReactNode[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    }),
  };

  return (
    <div className="relative mx-auto h-[430px] w-full max-w-4xl overflow-hidden md:h-[400px]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {slides[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="text-light-secondary absolute bottom-0 left-10 z-10 cursor-pointer rounded-full md:left-60 md:text-lg"
        aria-label="Previous slide"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="text-light-secondary absolute right-10 bottom-0 z-10 cursor-pointer rounded-full md:right-60 md:text-lg"
        aria-label="Next slide"
      >
        <FaArrowRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-0.5 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className="relative size-2.5 md:size-3"
            aria-label={`Go to slide ${i + 1}`}
          >
            <Image
              src={
                i === currentIndex
                  ? "/images/active-indicator.png"
                  : "/images/inactive-indicator.png"
              }
              alt={
                i === currentIndex ? `Active slide ${i + 1}` : `Slide ${i + 1}`
              }
              fill
              className="size-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
