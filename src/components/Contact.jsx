import { personalInfo } from '../data/content';

const Contact = () => (
  <footer className="footer">
    <div className="container">
      <p>&copy; {new Date().getFullYear()} {personalInfo.name}</p>
    </div>
  </footer>
);

export default Contact;
