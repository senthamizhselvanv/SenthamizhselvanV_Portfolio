import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import { metaData } from "../data/home";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Senthamizhselvan V | Senior Frontend Developer | React Developer
        </title>
        <meta name={metaData.description} content={metaData.descContent} />
        <meta name={metaData.keywords} content={metaData.keyContent} />
        <meta name="author" content="Senthamizhselvan V" />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="Senthamizhselvan V | Senior Frontend Developer"
        />
        <meta property={metaData.property} content={metaData.propertyContent} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Senthamizhselvan V Portfolio" />
        <meta property="og:url" content="https://senthamizhselvan.dev" />
        <meta property="og:image" content="/favicon.svg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Senthamizhselvan V | Senior Frontend Developer"
        />
        <meta name={metaData.twitter} content={metaData.twitterDesc} />
        <meta name="twitter:image" content="/favicon.svg" />

        {/* Canonical */}
        <link rel="canonical" href="https://senthamizhselvan.dev" />
      </Helmet>

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
