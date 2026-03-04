import { lazy, Suspense, useEffect, useState } from 'react';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';

const Testimonials = lazy(() => import('../components/sections/Testimonials').then((m) => ({ default: m.Testimonials })));
const Team = lazy(() => import('../components/sections/Team').then((m) => ({ default: m.Team })));
const ClientPanel = lazy(() => import('../components/sections/ClientPanel').then((m) => ({ default: m.ClientPanel })));
const PricingCalculator = lazy(() =>
  import('../components/sections/PricingCalculator').then((m) => ({ default: m.PricingCalculator })),
);
const PricingPlans = lazy(() => import('../components/sections/PricingPlans').then((m) => ({ default: m.PricingPlans })));
const Faq = lazy(() => import('../components/sections/Faq').then((m) => ({ default: m.Faq })));
const Contact = lazy(() => import('../components/sections/Contact').then((m) => ({ default: m.Contact })));

function SectionFallback() {
  return <div className="h-40 bg-slate-50" aria-hidden="true" />;
}

export function Home() {
  const [loadRest, setLoadRest] = useState(false);

  useEffect(() => {
    const w = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    let idleId: number | undefined;
    let timeoutId: number | undefined;

    if (w.requestIdleCallback) {
      idleId = w.requestIdleCallback(() => setLoadRest(true), { timeout: 800 });
    } else {
      timeoutId = window.setTimeout(() => setLoadRest(true), 300);
    }

    return () => {
      if (idleId && w.cancelIdleCallback) w.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Hero />
      {loadRest ? (
        <Suspense fallback={<SectionFallback />}>
          <Services />
          <PricingCalculator />
          <PricingPlans />
          <Team />
          <ClientPanel />
          <Testimonials />
          <Contact />
          <Faq />
        </Suspense>
      ) : (
        <SectionFallback />
      )}
    </>
  );
}
