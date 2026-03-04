/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/sections/Footer';
import { Home } from './pages/Home';
import { PelnaKsiegowosc } from './pages/PelnaKsiegowosc';
import { KpirRyczalt } from './pages/KpirRyczalt';
import { FloatingContact } from './components/ui/FloatingContact';
import { ScrollToHash } from './components/layout/ScrollToHash';

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pelna-ksiegowosc" element={<PelnaKsiegowosc />} />
            <Route path="/kpir-ryczalt" element={<KpirRyczalt />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}
