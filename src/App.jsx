import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Projects from "./components/Projects";
import Talent from "./components/Talent";
import TalentProfile from "./components/TalentProfile";
import ProjectDetail from "./components/ProjectDetail";
import HowItWorks from "./components/HowItWorks";
import Reputation from "./components/Reputation";
import WhyHamroBridge from "./components/WhyHamroBridge";
import MarketplacePreview from "./components/MarketplacePreview";
import SmartMatching from "./components/SmartMatching";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Categories />
        <Projects />
        <Talent />
        <TalentProfile />
        <ProjectDetail />
        <HowItWorks />
        <Reputation />
        <WhyHamroBridge />
        <MarketplacePreview />
        <SmartMatching />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

export default App;