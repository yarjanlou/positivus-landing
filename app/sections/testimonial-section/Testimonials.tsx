import Carousel from "@/components/ui/Carousel";
import HeadingBlock from "@/components/ui/HeadingBlock";
import TestimonialBlock from "./TestimonialBlock";

const testimonialItems = [
  {
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
    desc: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
  },
  {
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
    desc: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
  },
  {
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
    desc: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
  },
  {
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
    desc: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-custom-width mx-auto mb-6 p-4 md:mb-15">
      <HeadingBlock title="Testimonials">
        Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
        about Our Digital Marketing Services
      </HeadingBlock>
      <div className="bg-dark-secondary rounded-4xl px-5 pt-1 pb-10 md:rounded-3xl md:px-0 md:pt-10 md:pb-15">
        <Carousel
          slides={testimonialItems.map((item, index) => (
            <TestimonialBlock key={index} {...item} />
          ))}
        />
      </div>
    </section>
  );
}
