import Image from "next/image";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

const navLinks = [
  { label: "About us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Use Cases", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Blog", href: "#" },
];

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/55 transition-opacity duration-400 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />
      {/* Sidebar */}
      <div
        className={`bg-light-secondary fixed top-0 right-0 z-50 flex h-full w-64 transform flex-col justify-between px-6 py-5 shadow-lg transition-transform duration-400 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/images/black-logo.png"
                alt="logo"
                width={15}
                height={15}
              />
              <h2 className="text-[17px] font-semibold">Positivus</h2>
            </div>
            <span className="p-1" onClick={onClose}>
              <RxCross2 />
            </span>
          </div>
          <ul className="space-y-0.5">
            {navLinks.map(({ label, href }, index) => (
              <li key={index}>
                <Link
                  href={href}
                  onClick={onClose}
                  className="flex w-full items-center gap-2.5 py-2"
                >
                  <span className="text-[13px]">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
