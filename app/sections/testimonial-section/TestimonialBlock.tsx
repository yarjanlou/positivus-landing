import Image from "next/image";

type TestimonialProps = {
  name: string;
  position: string;
  desc: string;
};

export default function TestimonialBlock({
  name,
  position,
  desc,
}: TestimonialProps) {
  return (
    <div className="text-light-secondary bg-dark-secondary relative flex h-full w-full items-center justify-center">
      <div className="flex size-full flex-col items-center">
        <div className="relative h-[350px] w-full max-w-[500px] md:h-[300px]">
          <Image
            src="/images/Bubble.png"
            alt="bubble message"
            fill
            className="hidden size-full object-contain md:block"
          />
          <Image
            src="/images/mobile-bubble.png"
            alt="bubble message"
            fill
            className="size-full object-contain md:hidden"
          />
          <p className="absolute top-15 w-full px-8 text-[13px] font-medium md:top-20 md:text-sm">
            {desc}
          </p>
        </div>
        <div className="relative w-full">
          <div className="absolute left-[12%] w-full -translate-y-4 md:left-[29%] md:-translate-y-6">
            <p className="text-primary font-bold">{name}</p>
            <p className="text-[13px] font-medium md:text-sm">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
