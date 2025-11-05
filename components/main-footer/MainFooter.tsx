import Image from "next/image";
import Link from "next/link";
import FormInput from "../ui/FormInput";
import Socials from "./Socials";

const footeLinks = [
  { text: "about us", url: "#" },
  { text: "services", url: "#" },
  { text: "use cases", url: "#" },
  { text: "pricing", url: "#" },
  { text: "blog", url: "#" },
];

export default function MainFooter() {
  return (
    <footer className="max-w-custom-width mx-auto p-4 pb-0 text-neutral-200">
      <div className="bg-dark-secondary w-full rounded-t-3xl px-8 pt-8 pb-6 md:px-12 md:pt-10 md:pb-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex items-center gap-1 md:gap-2">
            <div className="relative aspect-square w-3.5 md:w-4">
              <Image
                src="/images/white-logo.png"
                alt="logo"
                fill
                className="size-full object-contain"
              />
            </div>
            <h5 className="text-lg font-semibold">Positivus</h5>
          </div>
          <div className="mt-2 md:mt-0 md:grow">
            <ul className="flex flex-col items-center gap-1.5 md:flex-row md:justify-center md:gap-7">
              {footeLinks.map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.url}
                    className="text-xs font-light capitalize underline md:text-[13px]"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            <Socials />
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 border-b border-neutral-400 py-7 md:flex-row md:items-end md:justify-between md:pt-10 md:pb-9">
          <div className="space-y-3 text-center text-xs md:text-left">
            <h6 className="bg-primary text-dark-secondary mb-4.5 inline-block rounded-sm px-1 text-sm font-semibold">
              Contact us:
            </h6>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>
              Address: 1234 Main St
              <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
          <div className="rounded-lg bg-[#292A32] p-5 md:px-6 md:py-9">
            <form
              action=""
              className="space-y-3 text-[13px] md:space-x-3 md:text-sm"
            >
              <input
                type="text"
                placeholder="Email"
                className="w-full rounded-lg border border-white bg-[#292A32] px-4 py-2 outline-0 placeholder:font-light placeholder:text-white md:w-auto md:py-2.5"
              />
              <button className="bg-primary w-full rounded-lg px-5 py-2 font-medium text-neutral-900 md:w-auto md:py-2.5">
                Subscribe to news
              </button>
            </form>
          </div>
          <div className="md:hidden">
            <Socials />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 pt-5 text-xs md:flex-row md:gap-6 md:pt-8 md:text-[13px]">
          <p>&copy; 2025 Positivus. All Rights Reserved.</p>
          <Link href="#" className="underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
