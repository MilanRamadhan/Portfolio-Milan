import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import WhatDrivesMe from "./components/WhatDrivesMe";
import FeaturedProjects from "./components/FeaturedProjects";
import Leadership from "./components/Leadership";
import Learning from "./components/Learning";
import BeyondTech from "./components/BeyondTech";
import WhyApple from "./components/WhyApple";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Journey />
        <WhatDrivesMe />
        <FeaturedProjects />
        <Leadership />
        <Learning />
        <BeyondTech />
        <WhyApple />
        <Contact />
      </main>
    </>
  );
}
