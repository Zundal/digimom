import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Writing from "../sections/Writing";
import Connect from "../sections/Connect";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="hairline mx-auto max-w-6xl" />
      <About />
      <Projects />
      <Writing />
      <Connect />
    </>
  );
}
