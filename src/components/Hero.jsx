import { useCallback } from 'react';
import { personalInfo, companies, impactMetrics } from '../data/content';
import { useScrollTo } from '../hooks';

const CompanyCard = ({ company }) => (
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
);

const Hero = () => {
  const scrollTo = useScrollTo();

  const handleCTAClick = useCallback((e, id) => {
    e.preventDefault();
    scrollTo(id);
  }, [scrollTo]);

  return (
    <section id="experience" className="hero">
      <div className="hero__main">
        {/* Left — intro */}
        <div className="hero__intro">
          <div className="hero__eyebrow">
            <span className="section-label__dot" />
            <span className="hero__eyebrow-text">Where I've Built</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-setup">{personalInfo.headlineSetup}</span>
            <span className="hero__title-payoff">{personalInfo.headlinePayoff}</span>
          </h1>

          <p className="hero__sub">
            Full-stack engineer forged in high-stakes systems at{' '}
            <strong>NASA</strong> and <strong>ExxonMobil</strong>.
            {' '}Built{' '}
            <a href={personalInfo.astreloUrl} target="_blank" rel="noopener noreferrer">
              Astrelo
            </a>
            {' '}&mdash; an AI company &mdash; because the standard I hold myself to doesn&apos;t clock out.
          </p>

          <div className="hero__ctas">
            <a
              href="#contact"
              className="hero__btn hero__btn--primary"
              onClick={(e) => handleCTAClick(e, 'contact')}
            >
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <a
              href={personalInfo.resume}
              className="hero__btn hero__btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>
            </a>
          </div>

          <div className="hero__socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero__social">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right — company cards */}
        <div className="hero__cards">
          {companies.map((company) => (
            <CompanyCard key={company.name} company={company} />
          ))}
        </div>
      </div>

      {/* Impact numbers strip at the bottom of hero */}
      <div className="hero__impact">
        {impactMetrics.map((metric) => (
          <div key={metric.label} className="impact-card">
            <span className={`impact-card__number impact-card__number--${metric.gradient}`}>
              {metric.value}
            </span>
            <span className="impact-card__label">{metric.label}</span>
            <div className={`impact-card__glow impact-card__glow--${metric.gradient}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
