import Accordion from "@/components/ui/Accordion";
import HeadingBlock from "@/components/ui/HeadingBlock";

const acoordionData = [
  {
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Research and Strategy Development",
    content:
      "We begin by conducting thorough research and analysis of your industry, competitors, and target audience to develop a customized digital marketing strategy.",
  },
  {
    title: "Implementation",
    content:
      "We begin by conducting thorough research and analysis of your industry, competitors, and target audience to develop a customized digital marketing strategy.",
  },
  {
    title: "Monitoring and Optimization",
    content:
      "We begin by conducting thorough research and analysis of your industry, competitors, and target audience to develop a customized digital marketing strategy.",
  },
  {
    title: "Reporting and Communication",
    content:
      "We begin by conducting thorough research and analysis of your industry, competitors, and target audience to develop a customized digital marketing strategy.",
  },
  {
    title: "Continual Improvement",
    content:
      "We begin by conducting thorough research and analysis of your industry, competitors, and target audience to develop a customized digital marketing strategy.",
  },
];

export default function Process() {
  return (
    <section className="max-w-custom-width mx-auto mb-16 p-4">
      <HeadingBlock title="Our Working Process ">
        Step-by-Step Guide to Achieving Your Business Goals
      </HeadingBlock>
      <div className="w-full space-y-4.5">
        {acoordionData.map((item, index) => (
          <Accordion key={index} index={index + 1} title={item.title}>
            {item.content}
          </Accordion>
        ))}
      </div>
    </section>
  );
}
