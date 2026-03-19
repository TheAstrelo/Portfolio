import FadeIn from './FadeIn';
import { impactMetrics } from '../data/content';

const ImpactNumbers = () => (
  <section className="impact">
    <div className="container">
      <div className="impact-grid">
        {impactMetrics.map((metric, i) => (
          <FadeIn key={metric.label} delay={i * 100}>
            <div className="impact-card">
              <span className={`impact-card__number impact-card__number--${metric.gradient}`}>
                {metric.value}
              </span>
              <span className="impact-card__label">{metric.label}</span>
              <div className={`impact-card__glow impact-card__glow--${metric.gradient}`} />
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactNumbers;
