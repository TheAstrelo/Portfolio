import FadeIn from './FadeIn';
import { companies } from '../data/content';

const CompanyCard = ({ company, index }) => (
  <FadeIn delay={index * 100}>
    <div className={`company-card company-card--${company.accent}`}>
      <div className="company-card__glow" />
      <div className="company-card__header">
        <div className={`company-card__icon company-card__icon--${company.accent}`}>
          {company.letter}
        </div>
        <span className="company-card__tenure">{company.tenure}</span>
      </div>
      <h3 className="company-card__name">{company.name}</h3>
      <p className={`company-card__role company-card__role--${company.accent}`}>{company.role}</p>
      <p className="company-card__desc">{company.description}</p>
      <div className="company-card__divider" />
      <div className="company-card__tech">
        {company.tech.map((t) => (
          <span key={t} className="company-card__tag">{t}</span>
        ))}
      </div>
    </div>
  </FadeIn>
);

const WhereIveBuilt = () => (
  <section id="experience" className="where-built">
    <div className="container">
      <FadeIn>
        <div className="section-label">
          <span className="section-label__dot" />
          <span className="section-label__text">Where I've Built</span>
          <span className="section-label__line" />
        </div>
      </FadeIn>
      <div className="company-grid">
        {companies.map((company, i) => (
          <CompanyCard key={company.name} company={company} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default WhereIveBuilt;
