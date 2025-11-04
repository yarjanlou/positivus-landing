import FormInput from "@/components/ui/FormInput";
import FormTextarea from "@/components/ui/FormTextarea";
import HeadingBlock from "@/components/ui/HeadingBlock";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import Image from "next/image";
import RadioGroup from "./RadioGroup";

export default function ContactUs() {
  return (
    <section className="max-w-custom-width mx-auto mb-6 p-4 md:mb-15">
      <HeadingBlock title="Contact Us">
        Connect with Us: Let's Discuss Your Digital Marketing Needs
      </HeadingBlock>

      <div className="bg-light-secondary relative w-full rounded-3xl p-8 md:px-16 md:py-12">
        <form action="" className="w-full max-w-md space-y-4">
          <RadioGroup />
          <FormInput name="name" type="text" required />
          <FormInput name="email" type="text" required />
          <FormTextarea name="message" required />
          <PrimaryBtn isFullWidth>Send Message</PrimaryBtn>
        </form>
        <div className="absolute top-0 -right-[23.5%] hidden h-full w-1/2 md:block">
          <Image
            src="/images/form-Illustration.png"
            alt="form illustration"
            fill
            className="size-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
