import PrimaryBtn from "@/components/ui/PrimaryBtn";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-custom-width mx-auto p-4">
      <div className="flex flex-col md:flex-row md:gap-20">
        <h2 className="text-4xl leading-12 font-semibold md:hidden">
          Navigating the digital landscape for success
        </h2>
        <div className="order-last shrink space-y-3.5 md:order-first md:w-1/2 md:space-y-4 md:pt-4">
          <h2 className="hidden text-5xl leading-16 font-semibold md:block">
            Navigating the digital landscape for success
          </h2>
          <p className="text-[15px] leading-5.5 text-neutral-700 md:text-base">
            We help brands confidently navigate the constantly-evolving digital
            world and turn online potential into real-world results. From
            strategic planning to performance-driven execution.
          </p>
          <PrimaryBtn>Book the consultation</PrimaryBtn>
        </div>
        <div className="grow"></div>
        <div className="relative aspect-square w-full md:h-[440px] md:w-1/2">
          <Image
            src="/images/hero-Illustration.png"
            alt="hero-illustration"
            fill
            className="size-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
