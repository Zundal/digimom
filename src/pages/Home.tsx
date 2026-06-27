import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Writing from "../sections/Writing";
import Playground from "../sections/Playground";
import Connect from "../sections/Connect";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="hairline mx-auto max-w-6xl" />
      <About />
      <Experience />
      <Projects />
      <Writing />
      <Playground />
      <Connect />
    </>
  );
}
