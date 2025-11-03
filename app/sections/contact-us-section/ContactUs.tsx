import FormInput from "@/components/ui/FormInput";
import FormTextarea from "@/components/ui/FormTextarea";
import HeadingBlock from "@/components/ui/HeadingBlock";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import RadioButton from "@/components/ui/RadioButton";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="max-w-custom-width mx-auto mb-15 p-4">
      <HeadingBlock title="Contact Us">
        Connect with Us: Let's Discuss Your Digital Marketing Needs
      </HeadingBlock>

      <div className="relative w-full rounded-3xl bg-light-secondary px-16 py-12">
        <form action="" className="w-full max-w-md space-y-4">
          <div className="mb-7 flex gap-8">
            <RadioButton name="contactType" value="hi" label="Say Hi" checked />
            <RadioButton name="contactType" value="quote" label="Get a Quote" />
          </div>
          <FormInput name="name" type="text" required />
          <FormInput name="email" type="text" required />
          <FormTextarea name="message" required />
          <PrimaryBtn isFullWidth>Send Message</PrimaryBtn>
        </form>
        <div className="absolute top-0 -right-[23.5%] h-full w-1/2">
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
