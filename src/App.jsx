import { lazy, Suspense } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import AmbientOrbs from './components/AmbientOrbs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

const FeaturedWork = lazy(() => import('./components/FeaturedWork'));
const CTABanner = lazy(() => import('./components/CTABanner'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <ErrorBoundary>
      <AmbientOrbs />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <FeaturedWork />
          <CTABanner />
          <Contact />
        </Suspense>
      </main>
    </ErrorBoundary>
  );
}

export default App;
