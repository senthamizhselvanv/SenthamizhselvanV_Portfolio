import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { FaBriefcase, FaProjectDiagram, FaClock, FaCode } from "react-icons/fa";
import "./About.scss";
import { aboutData, imageCard } from "../../data/about";

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
            {aboutData}
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="image-card">
              {imageCard}

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
