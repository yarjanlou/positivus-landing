import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socialIcons = [
  { icon: <FaLinkedinIn className="size-3.5" />, url: "#" },
  { icon: <FaFacebookF className="size-3.5" />, url: "#" },
  { icon: <FaTwitter className="size-3.5" />, url: "#" },
];

export default function Socials() {
  return (
    <div className="flex items-center gap-3">
      {socialIcons.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          className="flex size-5.5 items-center justify-center rounded-full bg-white p-1 text-neutral-900"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
