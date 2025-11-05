"use client";

import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
// import dynamic from "next/dynamic";
import MobileMenu from "./MobileMenu";
// const MobileMenu = dynamic(() => import("./MobileMenu"), { ssr: false });

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document?.body.classList.add("body-no-scroll");
    } else {
      document?.body.classList.remove("body-no-scroll");
    }

    return () => {
      document?.body.classList.remove("body-no-scroll");
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="bg-custom-neutral-200 flex items-center justify-center rounded-xl p-1 md:h-[45px] md:w-[45px] lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <FiMenu className="text-custom-neutral-700 text-xl" />
      </button>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
