import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FaBriefcase, FaProjectDiagram, FaClock, FaCode } from 'react-icons/fa';
import './About.scss';

const stats = [
  { icon: FaBriefcase, value: 4, suffix: '+', label: 'Years Experience' },
  { icon: FaProjectDiagram, value: 20, suffix: '+', label: 'Projects Completed' },
  { icon: FaCode, value: 15, suffix: '+', label: 'Technologies' },
  { icon: FaClock, value: 1000, suffix: '+', label: 'Development Hours' }
];

function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Passionate <span className="highlight">Frontend Developer</span>
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Building digital experiences that users love
          </motion.p>
        </div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Who I Am</h3>
            <p>
              I'm a dedicated Frontend Developer with <strong>4+ years</strong> of experience 
              specializing in building enterprise-grade web applications. My expertise lies in 
              <strong> React.js</strong>, where I create scalable, maintainable, and 
              high-performance user interfaces.
            </p>
            <p>
              Throughout my career, I've worked on diverse projects ranging from complex 
              dashboards to rule configuration systems, always focusing on delivering 
              exceptional user experiences with clean, efficient code.
            </p>
            <p>
              I'm passionate about staying current with the latest frontend technologies 
              and best practices. I believe in writing code that not only works but is 
              also readable, testable, and maintainable.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">⚡</span>
                <span>React.js Specialist</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <span>UI Performance Optimization</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">📱</span>
                <span>Responsive Design Expert</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🔧</span>
                <span>Modern Development Practices</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="image-card">
              <div className="image-placeholder">
                <div className="code-snippet">
                  <span className="code-line">
                    <span className="keyword">const</span> developer = {'{'}
                  </span>
                  <span className="code-line indent">
                    name: <span className="string">"Senthamizhselvan"</span>,
                  </span>
                  <span className="code-line indent">
                    role: <span className="string">"Frontend Developer"</span>,
                  </span>
                  <span className="code-line indent">
                    passion: <span className="string">"Building great UIs"</span>,
                  </span>
                  <span className="code-line indent">
                    coffee: <span className="boolean">true</span>
                  </span>
                  <span className="code-line">{'};'}</span>
                </div>
              </div>
              <div className="image-decoration decoration-1" />
              <div className="image-decoration decoration-2" />
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card card-glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="stat-icon">
                <stat.icon />
              </div>
              <div className="stat-value">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
