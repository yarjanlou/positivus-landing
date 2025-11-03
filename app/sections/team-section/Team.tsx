import HeadingBlock from "@/components/ui/HeadingBlock";
import TeamBlock from "./TeamBlock";
import PrimaryBtn from "@/components/ui/PrimaryBtn";

const teamMates = [
  {
    name: "John Smith",
    position: "CEO and Founder",
    desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    imageUrl: "/images/person-01.png",
  },
  {
    name: "Jane Doe",
    position: "Director of Operations",
    desc: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    imageUrl: "/images/person-02.png",
  },
  {
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    imageUrl: "/images/person-03.png",
  },
  {
    name: "Emily Johnson",
    position: "PPC Manager",
    desc: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    imageUrl: "/images/person-04.png",
  },
  {
    name: "Brian Williams",
    position: "Social Media Specialist",
    desc: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    imageUrl: "/images/person-05.png",
  },
  {
    name: "Sarah Kim",
    position: "Content Creator",
    desc: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
    imageUrl: "/images/person-06.png",
  },
];

export default function Team() {
  return (
    <section className="max-w-custom-width mx-auto mb-10 p-4">
      <>
        <HeadingBlock title="Team">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </HeadingBlock>

        <div className="grid grid-cols-3 gap-8">
          {teamMates.map((item) => (
            <TeamBlock key="item.name" {...item} />
          ))}
        </div>

        <div className="mt-7 flex w-full justify-end">
          <PrimaryBtn>See all team</PrimaryBtn>
        </div>
      </>
    </section>
  );
}
