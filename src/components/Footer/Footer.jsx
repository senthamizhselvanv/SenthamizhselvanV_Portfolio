import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.scss';

const socialLinks = [
  { icon: FaGithub, href: '[github.com](https://github.com)', label: 'GitHub' },
  { icon: FaLinkedin, href: '[linkedin.com](https://linkedin.com)', label: 'LinkedIn' },
  { icon: FaTwitter, href: '[twitter.com](https://twitter.com)', label: 'Twitter' }
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={(e) => handleClick(e, '#home')}>
              <span className="logo-icon">SV</span>
              <span className="logo-text">Senthamizhselvan V</span>
            </a>
            <p className="footer-tagline">
              Frontend Developer crafting modern web experiences with React.js
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Senthamizhselvan V. Made with <FaHeart className="heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
