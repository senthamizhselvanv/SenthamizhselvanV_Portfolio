import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

function Home() {
  return (
    <>
      <Helmet>
        <title>Senthamizhselvan V | Frontend Developer | React Developer</title>
        <meta 
          name="description" 
          content="Senthamizhselvan V - Frontend Developer with 4+ years of experience building scalable React applications. Expert in React.js, Redux, JavaScript, and modern frontend technologies." 
        />
        <meta name="keywords" content="Frontend Developer, React Developer, JavaScript, Redux, Web Developer, UI Developer, Senthamizhselvan" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Senthamizhselvan V | Frontend Developer" />
        <meta property="og:description" content="Frontend Developer with 4+ years of experience building scalable React applications." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Senthamizhselvan V Portfolio" />
        <meta property="og:url" content="https://senthamizhselvan.dev" />
        <meta property="og:image" content="/favicon.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Senthamizhselvan V | Frontend Developer" />
        <meta name="twitter:description" content="Frontend Developer with 4+ years of experience building scalable React applications." />
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
