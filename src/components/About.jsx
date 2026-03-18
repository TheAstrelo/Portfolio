import FadeIn from './FadeIn';
import { personalInfo, aboutContent } from '../data/content';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-layout">
          <FadeIn>
            <div className="about-image">
              <div className="about-image-placeholder">
                {personalInfo.initials}
              </div>
            </div>
          </FadeIn>
          <div className="about-text">
            <FadeIn>
              <span className="section-eyebrow">About</span>
              <h2 className="about-intro">{aboutContent.intro}</h2>
            </FadeIn>
            {aboutContent.paragraphs.map((paragraph, index) => (
              <FadeIn key={index}>
                <p>{paragraph}</p>
              </FadeIn>
            ))}
            <FadeIn>
              <div className="about-cta">
                <a href={personalInfo.resume} className="resume-link" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  Download Resume
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
