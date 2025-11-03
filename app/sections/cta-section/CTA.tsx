import PrimaryBtn from "@/components/ui/PrimaryBtn";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="max-w-custom-width mx-auto mb-16 p-4">
      <div className="bg-light-secondary relative w-full rounded-4xl">
        <div className="w-1/2 p-12">
          <h4 className="mb-5 text-xl font-semibold">
            Let’s make things happen
          </h4>
          <p className="mb-3 text-[13px] text-neutral-700">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <PrimaryBtn>Get your free proposal</PrimaryBtn>
        </div>
        <div className="absolute top-1/2 right-25 aspect-square w-[270px] -translate-y-1/2">
          <Image
            src="/images/cta.png"
            alt="cta-illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
