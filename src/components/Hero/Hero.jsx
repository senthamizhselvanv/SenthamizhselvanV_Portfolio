import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaEnvelope, FaArrowDown, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaReact, FaJs, FaNode } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiTailwindcss } from 'react-icons/si';
import './Hero.scss';

const socialLinks = [
  { icon: FaGithub, href: '[github.com](https://github.com)', label: 'GitHub' },
  { icon: FaLinkedin, href: '[linkedin.com](https://linkedin.com)', label: 'LinkedIn' },
  { icon: FaTwitter, href: '[twitter.com](https://twitter.com)', label: 'Twitter' }
];

const floatingIcons = [
  { icon: FaReact, color: '#61DAFB', delay: 0 },
  { icon: FaJs, color: '#F7DF1E', delay: 0.5 },
  { icon: SiTypescript, color: '#3178C6', delay: 1 },
  { icon: SiRedux, color: '#764ABC', delay: 1.5 },
  { icon: SiTailwindcss, color: '#06B6D4', delay: 2 },
  { icon: FaNode, color: '#339933', delay: 2.5 }
];

function Hero() {
  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
        <div className="grid-pattern" />
      </div>

      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="floating-icon"
          style={{ '--icon-color': item.color }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.6, 
            scale: 1,
            y: [0, -20, 0]
          }}
          transition={{ 
            delay: item.delay,
            y: { repeat: Infinity, duration: 3, delay: item.delay }
          }}
        >
          <item.icon />
        </motion.div>
      ))}

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="image-wrapper">
              <div className="image-placeholder">
                <span>SV</span>
              </div>
              <div className="image-ring" />
              <div className="image-ring ring-2" />
            </div>
            <motion.div 
              className="status-badge"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span className="status-dot" />
              Open to Work
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p 
              className="greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hi there, I'm 👋
            </motion.p>
            
            <h1 className="name">
              Senthamizhselvan <span className="highlight">V</span>
            </h1>

            <div className="role-wrapper">
              <TypeAnimation
                sequence={[
                  'React Developer',
                  2000,
                  'Frontend Engineer',
                  2000,
                  'JavaScript Specialist',
                  2000,
                  'UI Developer',
                  2000
                ]}
                wrapper="h2"
                className="role"
                repeat={Infinity}
                cursor={true}
              />
            </div>

            <p className="description">
              Frontend Developer with <strong>4+ years</strong> of experience building scalable, 
              responsive, and high-performance web applications using <strong>React.js</strong>, 
              Redux, JavaScript, and modern frontend technologies.
            </p>

            <div className="hero-actions">
              <a href="/resume.pdf" className="btn btn-primary" download>
                <FaDownload /> Download Resume
              </a>
              <button onClick={() => handleScroll('#contact')} className="btn btn-secondary">
                <FaEnvelope /> Contact Me
              </button>
              <button onClick={() => handleScroll('#projects')} className="btn btn-outline">
                View Projects
              </button>
            </div>

            <div className="hero-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, y: { repeat: Infinity, duration: 1.5 } }}
          onClick={() => handleScroll('#about')}
        >
          <FaArrowDown />
          <span>Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
