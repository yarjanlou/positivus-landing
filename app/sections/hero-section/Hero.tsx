import PrimaryBtn from "@/components/ui/PrimaryBtn";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-custom-width mx-auto p-4">
      <div className="flex gap-20">
        <div className="w-1/2 space-y-4 pt-4 shrink">
          <h2 className="text-5xl font-semibold leading-16">
            Navigating the digital landscape for success
          </h2>
          <p className="text-sm text-neutral-600 leading-5.5">
            We help brands confidently navigate the constantly-evolving digital
            world and turn online potential into real-world results. From
            strategic planning to performance-driven execution.
          </p>
          <PrimaryBtn>Book the consultation</PrimaryBtn>
        </div>
        <div className="grow"></div>
        <div className="w-1/2 h-[440px] relative">
          <Image
            src="/images/hero-illustration.png"
            alt="hero-illustration"
            fill
            className="object-contain size-full"
          />
        </div>
      </div>
    </section>
  );
}
