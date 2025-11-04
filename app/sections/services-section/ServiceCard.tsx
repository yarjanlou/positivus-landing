import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function ServiceCard({
  titlePart1,
  titlePart2,
  bgColor,
  textColor,
  imageUrl,
  link = "#",
}: Readonly<{
  titlePart1: string;
  titlePart2: string;
  bgColor: string;
  textColor: string;
  imageUrl: string;
  link?: string;
}>) {
  return (
    <div
      className={`flex justify-between rounded-4xl px-6 py-10 md:p-10 ${bgColor} border [box-shadow:0px_5px_0_0_black] ${bgColor === "bg-dark-secondary" ? "border-dark-secondary" : "border-neutral-500"}`}
    >
      <div className="flex flex-col justify-between gap-10">
        <h4 className="text-lg font-bold text-neutral-800 md:text-2xl">
          <span className={`${textColor} inline-block rounded-md px-1.5`}>
            {titlePart1}
          </span>
          <br />
          <span className={`${textColor} inline-block rounded-md px-1.5`}>
            {titlePart2}
          </span>
        </h4>
        <Link href={link} className="group flex items-center gap-2.5 md:gap-4">
          {/* bg-neutral-100 text-neutral-500 */}
          <span
            className={`inline-flex size-5.5 items-center justify-center rounded-full md:size-6.5 ${
              bgColor === "bg-dark-secondary"
                ? "bg-neutral-100"
                : "bg-dark-secondary text-neutral-100"
            }`}
          >
            <FiArrowUpRight className="inline-block size-3 stroke-3 transition-all group-hover:translate-x-[1.6px] group-hover:-translate-y-[1.3px] md:size-4" />
          </span>
          <span
            className={`text-sm font-medium md:text-base ${
              bgColor === "bg-dark-secondary"
                ? "text-neutral-100"
                : "text-dark-secondary"
            }`}
          >
            Learn more
          </span>
        </Link>
      </div>
      <div className="relative aspect-square w-[100px] md:w-[200px]">
        <Image
          src={imageUrl}
          alt={titlePart1 + " " + titlePart2}
          fill
          className="size-full object-contain"
        />
      </div>
    </div>
  );
}
