import FadeIn from './FadeIn';
import { featuredWork } from '../data/content';

const ProjectRow = ({ project, index }) => (
  <FadeIn delay={index * 100}>
    <a
      href={project.github || '#'}
      target={project.github ? '_blank' : undefined}
      rel={project.github ? 'noopener noreferrer' : undefined}
      className={`project-row project-row--${project.accent}`}
    >
      <div className="project-row__sidebar" />
      <div className="project-row__info">
        <span className="project-row__name">{project.name}</span>
        <span className="project-row__subtitle">{project.subtitle}</span>
      </div>
      <div className="project-row__tech">
        {project.tech.map((t) => (
          <span key={t} className="project-row__tag">{t}</span>
        ))}
      </div>
      <span className="project-row__arrow">&rarr;</span>
    </a>
  </FadeIn>
);

const FeaturedWork = () => (
  <section id="work" className="featured-work">
    <div className="container">
      <FadeIn>
        <div className="section-label">
          <span className="section-label__dot" />
          <span className="section-label__text">Featured Work</span>
          <span className="section-label__line" />
        </div>
      </FadeIn>
      <div className="project-list">
        {featuredWork.map((project, i) => (
          <ProjectRow key={project.name} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedWork;
