import MainHeader from "@/components/main-header/MainHeader";
import Hero from "./sections/hero-section/Hero";
import TrustedBy from "./sections/trustedBy-section/TrustedBy";
import Services from "./sections/services-section/Services";
import CTA from "./sections/cta-section/CTA";
import CaseStudies from "./sections/case-studies-section/CaseStudies";
import Process from "./sections/process-section/Process";
import Team from "./sections/team-section/Team";
import ContactUs from "./sections/contact-us-section/ContactUs";
import MainFooter from "@/components/main-footer/MainFooter";
import Testimonials from "./sections/testimonial-section/Testimonials";

export default function Home() {
  return (
    <div>
      <MainHeader />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <CTA />
        <CaseStudies />
        <Process />
        <Team />
        <ContactUs />
        {/* <Testimonials /> */}
        <MainFooter />
      </main>
    </div>
  );
}
