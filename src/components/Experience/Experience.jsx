import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { experiences, education } from '../../data/experience';
import './Experience.scss';

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Work <span className="highlight">Experience</span>
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            My professional journey and career milestones
          </motion.p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              
              <div className="timeline-content card-glass">
                <div className="timeline-header">
                  <div className="timeline-meta">
                    <span className="badge">{exp.type}</span>
                    <span className="duration">
                      <FaCalendar /> {exp.duration}
                    </span>
                  </div>
                  <h3 className="role">{exp.role}</h3>
                  <div className="company-info">
                    <span className="company">{exp.company}</span>
                    <span className="location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </div>
                </div>

                <p className="description">{exp.description}</p>

                <div className="responsibilities">
                  <h4>Key Responsibilities</h4>
                  <ul>
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {exp.achievements && (
                  <div className="achievements">
                    {exp.achievements.map((achievement, i) => (
                      <span key={i} className="badge badge-success">
                        ✓ {achievement}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="subsection-title">
            <FaGraduationCap /> Education
          </h3>
          
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card card-glass"
              whileHover={{ y: -5 }}
            >
              <div className="education-header">
                <h4>{edu.degree}</h4>
                <span className="duration">{edu.duration}</span>
              </div>
              <p className="institution">
                {edu.institution} • {edu.location}
              </p>
              <p className="education-description">{edu.description}</p>
              <div className="education-achievements">
                {edu.achievements.map((achievement, i) => (
                  <span key={i} className="badge">{achievement}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
