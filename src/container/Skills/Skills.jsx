import React from 'react';
import { motion } from 'framer-motion';

import { NavigationDots, SocialMedia } from '../../components';
import { experiences, skills } from '../../constants';
import './Skills.scss';

function Skills() {
  return (
    <div className="app__container app__whitebg" id="skills">
      <SocialMedia />
      <motion.div
        animate={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__skills app__flex"
      >
        <h2 className="head-text">Skills & Experiences</h2>

        <div className="app__skills-container">
          <motion.div
            className="app__skills-list"
          >
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={skill.name}
                className="app__skills-item app__flex"
              >
                <div className="app__flex">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="app__skills-exp">
            {experiences.map((experience) => (
              <motion.div
                className="app__skills-exp-item"
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div
                  className="app__skills-exp-works"
                >
                  {experience.works.map((work) => (
                    <motion.div
                      whileInView={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <NavigationDots active="skills" />
    </div>
  );
}

export default Skills;