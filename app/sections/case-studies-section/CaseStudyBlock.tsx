import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function CaseStudyBlock({
  children,
  url = "#",
}: Readonly<{ children: React.ReactNode; url?: string }>) {
  return (
    <div className="bg-dark-secondary relative h-[200px] w-full rounded-3xl px-6 pt-8 pb-10 md:h-auto md:w-auto md:rounded-none md:px-14 md:py-6">
      <p className="text-light-secondary mb-4 text-sm font-medium">
        {children}
      </p>
      <Link
        href={url}
        className="text-primary absolute bottom-8 left-6 flex items-center gap-2 text-[15px] font-semibold md:bottom-0 md:left-14"
      >
        <span className="text-sm md:text-base">Learn more</span>
        <span>
          <FiArrowUpRight className="stroke-[2.5] md:text-lg" />
        </span>
      </Link>
    </div>
  );
}
