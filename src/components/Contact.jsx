import { personalInfo } from '../data/content';

const Contact = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__inner">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}</p>
        <a
          href="https://astrelo-book.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__book-link"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          Astrelo Book
        </a>
      </div>
    </div>
  </footer>
);

export default Contact;
