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
    <header className="max-w-custom-width mx-auto mb-2 p-4">
      <div className="flex items-center">
        <Link href="#" className="flex grow items-center gap-2">
          <div className="relative size-5">
            <Image
              src="/images/black-logo.png"
              alt="logo"
              fill
              className="size-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-semibold capitalize">positivus</h1>
        </Link>
        <nav className="flex items-center gap-8 text-sm">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.title} className="inline-block">
                <Link
                  href={item.url}
                  className="text-dark-secondary capitalize transition-all hover:font-medium"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <button className="cursor-pointer rounded-lg border border-neutral-500 bg-white px-4 py-2 text-dark-secondary drop-shadow-xs transition-all hover:drop-shadow-lg">
            Request a quote
          </button>
        </nav>
      </div>
    </header>
  );
}
