import Hero from "./components/Herosection";
import Showcase from "./components/Showcase";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Showcase />
      <Projects />
      {/* <Blogs /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
