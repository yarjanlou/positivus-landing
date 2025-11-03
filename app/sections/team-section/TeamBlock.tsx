import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";

export default function TeamBlock({
  name,
  position,
  desc,
  imageUrl,
}: Readonly<{
  name: string;
  position: string;
  desc: string;
  imageUrl: string;
}>) {
  return (
    <div className="[box-shadow:0px_4px_0_0_black] rounded-3xl border border-neutral-700 p-8">
      <div>
        <div className="relative flex items-end gap-4 border-b border-neutral-700 pb-5">
          <div className="relative aspect-square w-20">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="size-full object-contain"
            />
          </div>
          <div>
            <div className="mb-px text-sm font-medium">{name}</div>
            <div className="text-xs">{position}</div>
          </div>
          <span className="absolute top-0 right-0 flex size-6.5 items-center justify-center rounded-full bg-neutral-800">
            <FaLinkedinIn className="text-primary size-3.5" />
          </span>
        </div>
        <div className="pt-5">
          <p className="relative text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}
