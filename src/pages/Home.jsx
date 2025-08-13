import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Hero from "../components/Herosection";
import Showcase from "../components/Showcase";
import Projects from "../components/Projects";
// import Blogs from "../components/Blogs";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Amit Vishwakarma | Full Stack Developer</title>
        <meta
          name="description"
          content="Full Stack Developer with 2+ years experience building web and mobile applications. View my portfolio and projects."
        />
        <meta
          name="keywords"
          content="Amit Vishwakarma, Full Stack Developer, React Developer, Node.js Developer, MongoDB Developer, Web Developer, Mobile Developer, React Native, AWS Developer, Real-time Applications"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Amit Vishwakarma | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Full Stack Developer with 2+ years experience building web and mobile applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amitdev.netlify.app/" />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="Amit Vishwakarma | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Full Stack Developer with 2+ years experience building web and mobile applications."
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical */}
        <link rel="canonical" href="https://amitdev.netlify.app/" />
      </Helmet>

      <Header />
      <Hero />
      <Showcase />
      <Projects />
      {/* <Blogs /> */}
      <Contact />
    </>
  );
}
