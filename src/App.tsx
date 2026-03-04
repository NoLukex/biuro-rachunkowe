/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { ClientPanel } from './components/sections/ClientPanel';
import { Testimonials } from './components/sections/Testimonials';
import { Team } from './components/sections/Team';
import { KnowledgeBase } from './components/sections/KnowledgeBase';
import { Guarantees } from './components/sections/Guarantees';
import { Integrations } from './components/sections/Integrations';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ClientPanel />
        <Testimonials />
        <Team />
        <KnowledgeBase />
        <Guarantees />
        <Integrations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
