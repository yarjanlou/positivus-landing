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
          <p className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-[57%] px-8 text-sm font-medium md:-translate-y-[60%]">
            {desc}
          </p>
        </div>
        <div className="relative w-full">
          <div className="absolute left-[12%] w-full -translate-y-4 md:left-[29%] md:-translate-y-6">
            <p className="text-primary font-bold">{name}</p>
            <p className="text-sm font-medium">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
