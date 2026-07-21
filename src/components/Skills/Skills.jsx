import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';
import './Skills.scss';

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Skills
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Technologies & <span className="highlight">Tools</span>
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            The technologies and tools I use to build amazing web experiences
          </motion.p>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skills-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card card-glass"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div 
                      className="skill-icon"
                      style={{ '--skill-color': skill.color }}
                    >
                      <skill.icon />
                    </div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      {skill.level && (
                        <div className="skill-progress">
                          <div className="progress-bar">
                            <motion.div
                              className="progress-fill"
                              style={{ '--skill-color': skill.color }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.3 }}
                            />
                          </div>
                          <span className="progress-value">{skill.level}%</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
