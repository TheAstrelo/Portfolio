import { useState } from 'react';
import FadeIn from './FadeIn';
import { projects, projectCategories } from '../data/content';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-eyebrow">Projects</span>
            <h2 className="section-title">What I've Built</h2>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="project-filters">
            {projectCategories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id}>
              <article className="project-card">
                <div className="project-content">
                  <div className="project-header">
                    <span className="project-category">{project.category}</span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github"
                      aria-label="View on GitHub"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  {project.outcome && (
                    <p className="project-outcome">{project.outcome}</p>
                  )}
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
