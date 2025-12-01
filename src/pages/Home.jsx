import FaqSection from "../components/FaqSection";
import Hero from "../components/Hero";
import HowSolarWorks from "../components/HowSolarWorks";
import BlogSection from "../components/BlogSection";
import KeyHighlights from "../components/KeyHighlights";
import Testimonials from "../components/Testimonials";
function Home() {
  return (
    <>
      <Hero />
      <HowSolarWorks />
      <KeyHighlights />
      <FaqSection />
      <Testimonials />
      <BlogSection />
    </>
  );
}

export default Home;
