import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-custom-width mx-auto p-4">
      <div className="flex gap-10">
        <div className="w-1/2 space-y-4 pt-4 shrink">
          <h2 className="text-5xl font-semibold leading-16">
            Navigating the digital landscape for success
          </h2>
          <p className="text-sm text-neutral-600 leading-5.5">
            We help brands confidently navigate the constantly-evolving digital
            world and turn online potential into real-world results. From
            strategic planning to performance-driven execution.
          </p>
          <button className="bg-neutral-800 text-white rounded-lg py-3 px-5 text-[13px] font-medium mt-2">
            Book the consultation
          </button>
        </div>
        {/* <div className="grow"></div> */}
        <div className="w-1/2 h-[440px] relative">
          <Image
            src="/images/hero-illustration.jpg"
            alt="hero-illustration"
            fill
            className="object-cover size-full"
          />
        </div>
      </div>
    </section>
  );
}
