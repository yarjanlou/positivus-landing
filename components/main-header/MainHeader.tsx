import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    title: "about us",
    url: "#",
  },
  {
    title: "services",
    url: "#",
  },
  {
    title: "use cases",
    url: "#",
  },
  {
    title: "pricing",
    url: "#",
  },
  {
    title: "blog",
    url: "#",
  },
];

export default function MainHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white p-4 pb-3 md:mb-2 md:border-0 md:p-4">
      <div className="max-w-custom-width mx-auto flex items-center">
        <Link href="#" className="flex grow items-center gap-1.5 md:gap-2">
          <div className="relative size-3 md:size-5">
            <Image
              src="/images/black-logo.png"
              alt="logo"
              fill
              className="size-full object-contain"
            />
          </div>
          <h1 className="text-xl font-semibold capitalize md:text-2xl">
            positivus
          </h1>
        </Link>
        <nav className="hidden items-center gap-8 text-[15px] font-medium md:flex">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.title} className="inline-block">
                <Link
                  href={item.url}
                  className="text-dark-secondary capitalize transition-all hover:font-semibold"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <button className="text-dark-secondary cursor-pointer rounded-lg border border-neutral-500 bg-white px-4 py-2 drop-shadow-xs transition-all hover:drop-shadow-lg">
            Request a quote
          </button>
        </nav>
      </div>
    </header>
  );
}
