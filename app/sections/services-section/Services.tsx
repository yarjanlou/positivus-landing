import HeadingBlock from "@/components/ui/HeadingBlock";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="max-w-custom-width mx-auto mb-15 p-4">
      <HeadingBlock title="Services">
        At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:
      </HeadingBlock>
      <div className="grid grid-cols-2 gap-x-10 gap-y-10">
        <ServiceCard
          titlePart1="Search engine"
          titlePart2="optimization"
          imageUrl="/images/seo.png"
          bgColor="bg-light-secondary"
          textColor="bg-primary"
        />
        <ServiceCard
          titlePart1="Pay-per-click"
          titlePart2="advertising"
          imageUrl="/images/ppc.png"
          bgColor="bg-primary"
          textColor="bg-light-secondary"
        />
        <ServiceCard
          titlePart1="Social Media"
          titlePart2="Marketing"
          imageUrl="/images/social.png"
          bgColor="bg-dark-secondary"
          textColor="bg-light-secondary"
        />
        <ServiceCard
          titlePart1="Email"
          titlePart2="Marketing"
          imageUrl="/images/email.png"
          bgColor="bg-light-secondary"
          textColor="bg-primary"
        />
        <ServiceCard
          titlePart1="Content"
          titlePart2="Creation"
          imageUrl="/images/content.png"
          bgColor="bg-primary"
          textColor="bg-light-secondary"
        />
        <ServiceCard
          titlePart1="Analytics and"
          titlePart2="Tracking"
          imageUrl="/images/analytics.png"
          bgColor="bg-dark-secondary"
          textColor="bg-primary"
        />
      </div>
    </section>
  );
}
