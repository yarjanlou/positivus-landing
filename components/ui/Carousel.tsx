"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, PanInfo } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

interface CarouselProps {
  slides: ReactNode[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [slideWidthPercent, setSlideWidthPercent] = useState(100);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const updateSlideWidth = () => {
      const isMobile = window.innerWidth < 768;
      setSlideWidthPercent(isMobile ? 100 : 55);
    };

    setIsClient(true);
    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);
    return () => window.removeEventListener("resize", updateSlideWidth);
  }, []);

  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const goToNext = () => {
    setCurrentIndex(([idx]) => {
      if (idx === slides.length - 1) {
        setTimeout(() => setCurrentIndex([0, 0]), 500);
        return [idx + 1, 1];
      }
      return [idx + 1, 1];
    });
  };

  const goToPrev = () => {
    setCurrentIndex(([idx]) => {
      if (idx === 0) {
        setTimeout(() => setCurrentIndex([slides.length - 1, 0]), 500);
        return [-1, -1];
      }
      return [idx - 1, -1];
    });
  };

  const goToSlide = (index: number) => {
    const dir = index > currentIndex ? 1 : -1;
    setCurrentIndex([index, dir]);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const onDragEnd = (_: any, info: PanInfo) => {
    if (slideWidthPercent === 100) return;

    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const threshold = 100;

    if (Math.abs(offset) > threshold || Math.abs(velocity) > 300) {
      if (offset > 0 || velocity > 0) {
        goToPrev();
      } else {
        goToNext();
      }
    } else {
      setCurrentIndex([currentIndex, 0]);
    }
  };

  const centerOffset = (100 - slideWidthPercent) / 2;
  const x = -(currentIndex + 1) * slideWidthPercent + centerOffset;

  if (!isClient) {
    return (
      <div className="relative h-[430px] w-full overflow-hidden md:h-[400px]">
        <div className="bg-dark-secondary h-full w-full animate-pulse rounded-xl" />
      </div>
    );
  }

  return (
    <div className="relative h-[430px] w-full overflow-hidden md:h-[400px]">
      <motion.div
        className="flex h-full w-fit"
        style={{ minWidth: "100%" }}
        drag={slideWidthPercent === 100 ? false : "x"}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.6}
        onDragEnd={onDragEnd}
        animate={{ x: `${x}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {extendedSlides.map((slide, i) => (
          <div
            key={i}
            className="shrink-0"
            style={{ width: `${slideWidthPercent}%` }}
          >
            {slide}
          </div>
        ))}
      </motion.div>

      {/* Navigation buttons: */}
      <>
        <button
          onClick={goToPrev}
          className="text-light-secondary absolute bottom-0 left-6 z-10 cursor-pointer text-sm md:left-50 md:text-base"
          aria-label="Previous slide"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={goToNext}
          className="text-light-secondary absolute right-6 bottom-0 z-10 cursor-pointer text-sm md:right-50 md:text-base"
          aria-label="Next slide"
        >
          <FaArrowRight />
        </button>
      </>

      {/* Indicators */}
      <div className="absolute bottom-0.5 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
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
