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
    <header className="max-w-custom-width mx-auto p-4 mb-5">
      <div className="flex items-center">
        <h1 className="capitalize text-2xl font-semibold grow">positivus</h1>
        <nav className="flex items-center gap-8 text-sm">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li
                key={item.title}
                className="inline-block"
              >
                <Link
                  href={item.url}
                  className="capitalize text-gray-700 hover:text-gray-900"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <button className="border border-neutral-500 bg-white rounded-lg px-4 py-2 text-gray-700 drop-shadow-xs">
            Request a quote
          </button>
        </nav>
      </div>
    </header>
  );
}
