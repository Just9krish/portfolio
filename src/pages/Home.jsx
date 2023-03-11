import Header from "../components/Header";
import Hero from "../components/Herosection";
import Showcase from "../components/Showcase";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";

export default function home() {
  return (
    <>
      <Header />
      <Hero />
      <Showcase />
      <Projects />
      {/* <Blogs /> */}
      <Contact />
    </>
  );
}
