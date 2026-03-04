import { SITE_CONFIG } from '@/src/constants';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
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
              Nowoczesne biuro rachunkowe w {SITE_CONFIG.city}. Pełna automatyzacja, obsługa KSeF i doradztwo podatkowe dla wymagających.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Na skróty</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/#uslugi" className="hover:text-blue-400 transition-colors">Nasze usługi</a></li>
              <li><a href="/#panel" className="hover:text-blue-400 transition-colors">Panel klienta</a></li>
              <li><a href="/#opinie" className="hover:text-blue-400 transition-colors">Opinie klientów</a></li>
              <li><a href="/#zespol" className="hover:text-blue-400 transition-colors">Nasz zespół</a></li>
              <li><a href="/#wiedza" className="hover:text-blue-400 transition-colors">Baza wiedzy</a></li>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155859.34960144124!2d16.781845199999996!3d52.40066315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470444d2ece10ab7%3A0xa4ea31980334bfd1!2sPozna%C5%84!5e0!3m2!1spl!2spl!4v1709538421000!5m2!1spl!2spl" 
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
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-6">
            <a href="/polityka-prywatnosci" className="hover:text-blue-400 transition-colors">
              Polityka prywatności (RODO)
            </a>
            <a href="/regulamin" className="hover:text-blue-400 transition-colors">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
