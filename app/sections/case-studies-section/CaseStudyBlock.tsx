import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function CaseStudyBlock({
  children,
  url = "#",
}: Readonly<{ children: React.ReactNode; url?: string }>) {
  return (
    <div className="px-14 space-y-4">
      <p className="text-white text-sm">{children}</p>
      <Link
        href={url}
        className="text-primary flex items-center gap-2 text-[15px] font-semibold"
      >
        <span>Learn more</span>
        <span>
          <FiArrowUpRight className="text-lg stroke-[2.5]" />
        </span>
      </Link>
    </div>
  );
}
