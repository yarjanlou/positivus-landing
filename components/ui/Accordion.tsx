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
      className={`mx-auto w-full overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-50 px-5 [box-shadow:0px_3px_0_0_black] md:px-12 ${
        isOpen ? "bg-primary" : "bg-light-secondary"
      }`}
    >
      <motion.button
        layout
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className={`flex w-full cursor-pointer items-center justify-between gap-2 py-5 md:pt-10 md:pb-8`}
      >
        <div className="flex items-center gap-4 md:gap-6">
          {index && (
            <span className="text-xl font-semibold md:text-3xl">
              {formatIndex(index)}
            </span>
          )}
          <span className="text-left text-[15px] font-medium md:text-lg">
            {title}
          </span>
        </div>
        <motion.div
          layout
          className={`flex size-6.5 shrink-0 items-center justify-center rounded-full border transition-colors md:size-9 ${
            isOpen
              ? "border-neutral-800 text-neutral-800"
              : "border-neutral-600 text-neutral-600"
          }`}
        >
          {isOpen ? (
            <FiMinus className="stroke-3" />
          ) : (
            <FiPlus className="stroke-3" />
          )}
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={{
              expanded: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="overflow-hidden"
          >
            <div
              className={`py-4 text-xs leading-5 md:py-7 md:text-sm md:leading-7.5 ${isOpen ? "border-t border-neutral-500" : ""}`}
            >
              <p className="w-7/8">{children}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
