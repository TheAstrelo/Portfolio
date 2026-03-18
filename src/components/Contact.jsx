import FadeIn from './FadeIn';
import { personalInfo } from '../data/content';

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <FadeIn>
            <span className="contact-eyebrow">Let's Connect</span>
            <h2 className="contact-title">Interested in working together?</h2>
          </FadeIn>
          <FadeIn>
            <p className="contact-subtitle">
              I'm currently open to new opportunities. Drop me a line and let's chat.
            </p>
          </FadeIn>
          <FadeIn>
            <a href={`mailto:${personalInfo.email}`} className="contact-email">
              {personalInfo.email}
            </a>
          </FadeIn>
          <FadeIn>
            <div className="contact-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                Resume
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
