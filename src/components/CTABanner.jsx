import FadeIn from './FadeIn';
import { personalInfo } from '../data/content';

const CTABanner = () => (
  <section id="contact" className="cta-section">
    <div className="container">
      <FadeIn>
        <div className="cta-banner">
          <div className="cta-banner__left">
            <h2 className="cta-banner__title">
              Let's build something <span className="cta-banner__gradient">together.</span>
            </h2>
            <p className="cta-banner__subtitle">{personalInfo.availabilitySubtitle}</p>
            <div className="cta-banner__pills">
              <span className="cta-pill">Remote</span>
              <span className="cta-pill">UK / EU Timezone</span>
              <span className="cta-pill">Available Now</span>
            </div>
          </div>
          <div className="cta-banner__right">
            <a href={`mailto:${personalInfo.email}`} className="cta-btn cta-btn--primary">
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <a href={personalInfo.resume} className="cta-btn cta-btn--secondary" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default CTABanner;
