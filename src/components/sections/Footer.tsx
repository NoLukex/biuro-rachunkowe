import { SITE_CONFIG } from '@/src/constants';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const socialLinks = [
    { key: 'facebook', href: SITE_CONFIG.socials.facebook, icon: Facebook, label: 'Facebook' },
    { key: 'linkedin', href: SITE_CONFIG.socials.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { key: 'instagram', href: SITE_CONFIG.socials.instagram, icon: Instagram, label: 'Instagram' },
  ].filter((item) => item.href);

  const quickLinks = [
    { label: 'Nasze usługi', to: { pathname: '/', hash: '#uslugi' } },
    { label: 'Kalkulator ceny', to: { pathname: '/', hash: '#kalkulator' } },
    { label: 'Pakiety współpracy', to: { pathname: '/', hash: '#pakiety' } },
    { label: 'O nas', to: '/o-nas' },
    { label: 'Baza wiedzy', to: '/wiedza' },
    { label: 'FAQ', to: { pathname: '/', hash: '#faq' } },
    { label: 'Kontakt', to: { pathname: '/', hash: '#kontakt' } },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">B</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Nowoczesne biuro rachunkowe w {SITE_CONFIG.cityForms.locative}. Pełna automatyzacja, obsługa KSeF i doradztwo podatkowe dla wymagających.
            </p>
            {socialLinks.length > 0 && (
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.key}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Na skróty</h4>
            <ul className="space-y-4 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Kontakt</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="block text-slate-500 mb-1">Telefon</span>
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="text-white hover:text-blue-400 transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <span className="block text-slate-500 mb-1">Email</span>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-white hover:text-blue-400 transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <span className="block text-slate-500 mb-1">Adres</span>
                <span className="text-white">{SITE_CONFIG.address}</span>
              </li>
              <li>
                <span className="block text-slate-500 mb-1">NIP</span>
                <span className="text-white">{SITE_CONFIG.nip}</span>
              </li>
              <li>
                <span className="block text-slate-500 mb-1">REGON</span>
                <span className="text-white">{SITE_CONFIG.regon}</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-white font-semibold mb-6">Lokalizacja</h4>
            <div className="w-full h-48 rounded-xl overflow-hidden bg-slate-800">
              <iframe 
                src={SITE_CONFIG.mapEmbedUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa dojazdu"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Wszelkie prawa zastrzeżone.</p>
            {SITE_CONFIG.isDemo && (
              <p className="text-xs text-blue-300 mt-1">Wersja demonstracyjna - dane i treści wymagają personalizacji przed publikacją.</p>
            )}
          </div>
          <div className="flex gap-6">
            <Link to="/polityka-prywatnosci" className="hover:text-blue-400 transition-colors">
              Polityka prywatności (RODO)
            </Link>
            <Link to="/regulamin" className="hover:text-blue-400 transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
