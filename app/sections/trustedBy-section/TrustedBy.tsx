"use client";

import { motion } from "framer-motion";
import Dribbble from "@/public/images/dribbble.svg";
import Netflix from "@/public/images/netflix.svg";
import Hub from "@/public/images/hub.svg";
import Notion from "@/public/images/notion.svg";
import Amazon from "@/public/images/amazon.svg";
import Zoom from "@/public/images/zoom.svg";

const customers = [
  { icon: <Dribbble className="size-25" />, url: "#" },
  { icon: <Netflix className="size-24" />, url: "#" },
  { icon: <Hub className="size-25" />, url: "#" },
  { icon: <Notion className="size-25" />, url: "#" },
  { icon: <Amazon className="size-24" />, url: "#" },
  { icon: <Zoom className="size-22" />, url: "#" },
];

export default function TrustedBy() {
  return (
    <section className="max-w-custom-width mx-auto mb-10 p-4 pt-0">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-14"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...customers, ...customers].map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="inline-block shrink-0 grayscale"
            >
              {item.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
