"use client";

import { useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMinus, FiPlus } from "react-icons/fi";

interface AccordionProps {
  title: string;
  index?: number;
  children: ReactNode;
}

const formatIndex = (i: number) => String(i).padStart(2, "0");

export default function Accordion({ title, index, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <motion.div
      layout
      transition={{ duration: 0.4, ease: "linear" }}
      className={`mx-auto w-full overflow-hidden rounded-3xl border border-neutral-500 bg-neutral-50 px-4 [box-shadow:0px_3px_0_0_black] md:px-10 ${
        isOpen ? "bg-primary pb-6" : "bg-light-secondary pb-0"
      }`}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className={`flex w-full cursor-pointer items-center justify-between gap-2 py-8 ${
          isOpen ? "border-b border-neutral-800" : ""
        }`}
      >
        <div className="flex items-center gap-6">
          {index && (
            <span className="text-3xl font-semibold">{formatIndex(index)}</span>
          )}
          <span className="text-lg font-medium whitespace-nowrap">{title}</span>
        </div>
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 md:h-9 md:w-9 ${
            isOpen
              ? "border-neutral-800 text-neutral-800"
              : "border-neutral-600 text-neutral-600"
          }`}
        >
          <span>
            {isOpen ? (
              <FiPlus className="stroke-3" />
            ) : (
              <FiMinus className="stroke-3" />
            )}
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            key="content"
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "linear" }}
            className="mt-4 w-7/8 text-justify text-xs leading-7.5 md:text-[13px]"
          >
            {children}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
