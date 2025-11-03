import HeadingBlock from "@/components/ui/HeadingBlock";
import CaseStudyBlock from "./CaseStudyBlock";

export default function CaseStudies() {
  return (
    <section className="max-w-custom-width mx-auto mb-16 p-4">
      <div>
        <HeadingBlock title="Case Studies">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </HeadingBlock>
        <div className="flex w-full divide-x-[0.1px] divide-gray-100 rounded-4xl bg-dark-secondary py-16">
          <CaseStudyBlock>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </CaseStudyBlock>
          <CaseStudyBlock>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </CaseStudyBlock>
          <CaseStudyBlock>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </CaseStudyBlock>
        </div>
      </div>
    </section>
  );
}
