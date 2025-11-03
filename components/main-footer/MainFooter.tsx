import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import FormInput from "../ui/FormInput";

const footeLinks = [
  { text: "about us", url: "#" },
  { text: "services", url: "#" },
  { text: "use cases", url: "#" },
  { text: "pricing", url: "#" },
  { text: "blog", url: "#" },
];

const socialIcons = [
  { icon: <FaLinkedinIn className="size-3.5" />, url: "#" },
  { icon: <FaFacebookF className="size-3.5" />, url: "#" },
  { icon: <FaTwitter className="size-3.5" />, url: "#" },
];

export default function MainFooter() {
  return (
    <footer className="max-w-custom-width mx-auto p-4 pb-0 text-neutral-200">
      <div className="bg-dark-secondary w-full rounded-t-3xl px-12 pt-10 pb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative aspect-square w-4">
              <Image
                src="/images/white-logo.png"
                alt="logo"
                fill
                className="size-full object-contain"
              />
            </div>
            <h5 className="text-lg font-semibold">Positivus</h5>
          </div>
          <div className="grow">
            <ul className="flex items-center justify-center gap-7">
              {footeLinks.map((item) => (
                <li>
                  <Link
                    href={item.url}
                    className="text-[13px] font-light capitalize underline"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            {socialIcons.map((item) => (
              <Link
                href={item.url}
                className="flex size-5.5 items-center justify-center rounded-full bg-white p-1 text-neutral-900"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-end justify-between border-b border-neutral-400 pt-10 pb-9">
          <div className="space-y-3 text-xs">
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
          <div className="rounded-lg bg-[#292A32] px-6 py-9">
            <form action="" className="space-x-3">
              <input
                type="text"
                placeholder="Email"
                className="rounded-lg border border-white bg-[#292A32] px-4 py-2.5 text-sm outline-0 placeholder:font-light placeholder:text-white"
              />
              <button className="bg-primary rounded-lg px-5 py-2.5 text-sm font-medium text-neutral-900">
                Subscribe to news
              </button>
            </form>
          </div>
        </div>
        <div className="flex items-center gap-6 pt-8 text-[13px]">
          <p>&copy; 2025 Positivus. All Rights Reserved.</p>
          <Link href="#" className="underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
