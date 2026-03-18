import FadeIn from './FadeIn';
import { techStack } from '../data/content';

const Skills = () => {
  const categories = Object.keys(techStack);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-eyebrow">Stack</span>
            <h2 className="section-title">Technologies I Use</h2>
          </div>
        </FadeIn>
        <div className="tech-grid">
          {categories.map((category, catIndex) => (
            <FadeIn key={category}>
              <div className="tech-category">
                <h3 className="tech-category-title">{category}</h3>
                <div className="tech-items">
                  {techStack[category].map((tech, techIndex) => (
                    <span key={techIndex} className="tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
