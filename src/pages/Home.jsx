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
        <title>Senthamizhselvan V | Senior Frontend Developer | React Developer</title>
        <meta 
          name="description" 
          content="Senthamizhselvan V - Senior Frontend developer with 6+ years of IT experience building enterprise web applications. Experienced in React.js, JavaScript, jQuery, Redux, HTML5, CSS3, Bootstrap, REST API integration, and modular UI development. Started with Visual Basic, later worked on React.js applications, and currently develop enterprise UI modules for Disaster Recovery Management systems." 
        />
        <meta name="keywords" content="Senior Frontend Developer, React Developer, JavaScript, Web Developer, UI Developer, Senthamizhselvan" />
        <meta name="author" content="Senthamizhselvan V" />
        {/* Open Graph */}
        <meta property="og:title" content="Senthamizhselvan V | Senior Frontend Developer" />
        <meta property="og:description" content="Senior Frontend Developer with 6+ years of experience building enterprise web applications." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Senthamizhselvan V Portfolio" />
        <meta property="og:url" content="https://senthamizhselvan.dev" />
        <meta property="og:image" content="/favicon.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Senthamizhselvan V | Senior Frontend Developer" />
        <meta name="twitter:description" content="Senior Frontend Developer with 6+ years of experience building enterprise web applications." />
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
