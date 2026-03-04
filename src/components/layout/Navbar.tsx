import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { SITE_CONFIG } from '@/src/constants';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Usługi', href: '#uslugi' },
    { name: 'Panel', href: '#panel' },
    { name: 'Opinie', href: '#opinie' },
    { name: 'Zespół', href: '#zespol' },
    { name: 'Wiedza', href: '#wiedza' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">B</span>
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            {SITE_CONFIG.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled 
                      ? 'text-slate-600 hover:text-blue-600' 
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild className="rounded-full px-6 bg-blue-600 hover:bg-blue-700 text-white">
            <a href="#kontakt">Darmowa Konsultacja</a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-slate-600' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-base font-medium text-slate-700 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white">
            <a href="#kontakt" onClick={() => setIsMobileMenuOpen(false)}>
              Darmowa Konsultacja
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
