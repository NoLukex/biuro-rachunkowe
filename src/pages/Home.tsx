import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { HowItWorks } from '../components/sections/HowItWorks';
import { ClientPanel } from '../components/sections/ClientPanel';
import { Testimonials } from '../components/sections/Testimonials';
import { Team } from '../components/sections/Team';
import { KnowledgeBase } from '../components/sections/KnowledgeBase';
import { Guarantees } from '../components/sections/Guarantees';
import { Integrations } from '../components/sections/Integrations';
import { Contact } from '../components/sections/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <ClientPanel />
      <Testimonials />
      <Team />
      <KnowledgeBase />
      <Guarantees />
      <Integrations />
      <Contact />
    </>
  );
}
