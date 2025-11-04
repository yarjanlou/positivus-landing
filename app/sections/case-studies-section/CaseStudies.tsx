import HeadingBlock from "@/components/ui/HeadingBlock";
import CaseStudyBlock from "./CaseStudyBlock";

const caseStudyItems = [
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  " For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
];

export default function CaseStudies() {
  return (
    <section className="max-w-custom-width mx-auto mb-3 p-4 md:mb-16">
      <div>
        <HeadingBlock title="Case Studies">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </HeadingBlock>
        <div className="md:bg-dark-secondary md: w-full rounded-4xl md:pt-14 md:pb-16">
          <div className="-mx-4 flex overflow-x-scroll px-4 pb-5 md:hidden">
            {caseStudyItems.map((item, index) => (
              <div
                key={index}
                className="mx-2 w-[calc(100%-2rem)] max-w-md shrink-0 sm:w-[calc(80%-1rem)]"
              >
                <CaseStudyBlock>{item}</CaseStudyBlock>
              </div>
            ))}
          </div>
          <div className="hidden w-full gap-10 divide-x-[0.1px] divide-gray-100 md:flex">
            {caseStudyItems.map((item, index) => (
              <CaseStudyBlock>{item}</CaseStudyBlock>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
