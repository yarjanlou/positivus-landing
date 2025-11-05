"use client";

import { motion } from "framer-motion";
import Dribbble from "@/public/images/dribbble.svg";
import Netflix from "@/public/images/netflix.svg";
import Hub from "@/public/images/hub.svg";
import Notion from "@/public/images/notion.svg";
import Amazon from "@/public/images/amazon.svg";
import Zoom from "@/public/images/zoom.svg";

const logos = [
  { icon: <Dribbble className="w-18 sm:w-24" />, url: "#" },
  { icon: <Netflix className="w-18 sm:w-24" />, url: "#" },
  { icon: <Hub className="w-18 sm:w-24" />, url: "#" },
  { icon: <Notion className="w-18 sm:w-24" />, url: "#" },
  { icon: <Amazon className="w-18 sm:w-24" />, url: "#" },
  { icon: <Zoom className="w-18 sm:w-22" />, url: "#" },
];

const reversedLogos = [...logos].reverse();

export default function TrustedByAnimated() {
  return (
    <section className="max-w-custom-width mx-auto px-4 py-6 md:pb-16">
      <div className="overflow-hidden">
        {/* Row 1 */}
        <div className="mb-3 md:mb-6">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                repeatDelay: 0,
                ease: "linear",
              },
            }}
          >
            {[...logos, ...logos, ...logos].map((item, index) => (
              <a
                key={`row1-${index}`}
                href={item.url}
                className="px-4 grayscale transition hover:grayscale-0 md:px-6"
                aria-label={`Visit ${item.url}`}
              >
                {item.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="md:hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 22,
                repeatDelay: 0,
                ease: "linear",
              },
            }}
          >
            {[...reversedLogos, ...reversedLogos, ...reversedLogos].map(
              (item, index) => (
                <a
                  key={`row2-${index}`}
                  href={item.url}
                  className="px-4 grayscale transition hover:grayscale-0 md:px-6"
                  aria-label={`Visit ${item.url}`}
                >
                  {item.icon}
                </a>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
