import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { FaBriefcase, FaProjectDiagram, FaClock, FaCode } from "react-icons/fa";
import "./About.scss";

const stats = [
  {
    icon: FaBriefcase,
    value: 6,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: FaProjectDiagram,
    value: 4,
    suffix: "",
    label: "Enterprise Projects",
  },
  {
    icon: FaCode,
    value: 10,
    suffix: "+",
    label: "Core Technologies",
  },
  {
    icon: FaClock,
    value: 10,
    suffix: "+",
    label: "Enterprise Modules",
  },
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
              I'm a <strong>Senior UI Developer</strong> with{" "}
              <strong>6+ years</strong> of experience in designing and
              developing enterprise web applications. My core expertise includes
              <strong>
                {" "}
                React.js, JavaScript, jQuery, HTML5, CSS3, Bootstrap, Redux Toolkit and
                REST API integration
              </strong>
              , enabling me to build scalable, responsive, and user-friendly
              applications.
            </p>

            <p>
              Throughout my career, I've contributed to enterprise products such
              as
              <strong> Disaster Recovery Management (DRM) System</strong>,
              <strong> Bot Patrol</strong>,<strong> Scalehigh</strong>, and
              <strong> Timestamp</strong>. I've developed reusable UI
              components, implemented business modules, integrated REST APIs,
              managed CRUD operations, collaborated closely with backend teams,
              and resolved production issues while ensuring high-quality
              software delivery.
            </p>

            <p>
              I have experience working in Agile environments, participating in
              code reviews, production deployments, and post-release support. I
              enjoy solving complex UI challenges, improving application
              performance, and creating clean, maintainable, and reusable code
              that delivers an excellent user experience across modern web
              applications.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">⚛️</span>
                <span>React.js & JavaScript Developer</span>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">🌐</span>
                <span>REST API Integration</span>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">🧩</span>
                <span>Reusable UI Components</span>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">📊</span>
                <span>Enterprise Web Applications</span>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <span>Production Deployment & Support</span>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">🤝</span>
                <span>Agile Team Collaboration</span>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">🐞</span>
                <span>Bug Fixing & Performance Optimization</span>
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
                    <span className="keyword">const</span> developer = {"{"}
                  </span>

                  <span className="code-line indent">
                    name: <span className="string">"Senthamizhselvan V"</span>,
                  </span>

                  <span className="code-line indent">
                    role: <span className="string">"Senior UI Developer"</span>,
                  </span>

                  <span className="code-line indent">
                    experience: <span className="string">"6+ Years"</span>,
                  </span>

                  <span className="code-line indent">
                    skills: [<span className="string">"React.js"</span>,
                    <span className="string">"JavaScript"</span>,
                    <span className="string">"jQuery"</span>,
                    <span className="string">"Redux Toolkit"</span>
                    ],
                  </span>

                  <span className="code-line indent">
                    reusableComponents: <span className="boolean">true</span>,
                  </span>

                  <span className="code-line indent">
                    deployment: <span className="boolean">true</span>
                  </span>

                  <span className="code-line">{"};"}</span>
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
