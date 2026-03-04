import { motion } from 'motion/react';
import { Star, Building2, Clock, FileCheck2 } from 'lucide-react';

const testimonials = [
  {
    company: 'TechFlow Sp. z o.o.',
    quote: 'Przejście na pełen KSeF było bezbolesne. Biuro zajęło się wszystkim, a my mamy podgląd na żywo w panelu. Polecam każdemu.',
    author: 'Michał Kowalski, CEO',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=TechFlow&backgroundColor=1e40af',
  },
  {
    company: 'E-commerce Plus',
    quote: 'Mamy tysiące faktur miesięcznie. Automatyzacja, którą wdrożyli, uratowała nam mnóstwo czasu. Zero błędów od 2 lat.',
    author: 'Anna Nowak, Właścicielka',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Ecommerce&backgroundColor=047857',
  },
  {
    company: 'Studio Architektoniczne',
    quote: 'Zawsze terminowo, zawsze profesjonalnie. Doradztwo podatkowe na najwyższym poziomie. Oszczędziliśmy sporo na podatkach.',
    author: 'Piotr Wiśniewski, Architekt',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Studio&backgroundColor=be185d',
  },
  {
    company: 'Agencja Marketingowa',
    quote: 'Aplikacja mobilna to sztos! Skanuję faktury kosztowe w biegu, a księgowa ma je od razu u siebie. Koniec z papierologią.',
    author: 'Katarzyna Lewandowska, Founder',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Agencja&backgroundColor=b45309',
  },
  {
    company: 'Janusz-Pol Transport',
    quote: 'Bałem się tego całego KSeF-u, ale wytłumaczyli mi wszystko krok po kroku. Teraz to nawet wygodniejsze niż papier.',
    author: 'Janusz Dąbrowski, Właściciel',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Janusz&backgroundColor=4338ca',
  },
  {
    company: 'IT Consulting',
    quote: 'Jako programista cenię sobie nowoczesne rozwiązania. Ich panel klienta i API do integracji z naszym systemem to mistrzostwo.',
    author: 'Tomasz Zieliński, B2B',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=IT&backgroundColor=334155',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white" id="opinie">
      <div className="container mx-auto px-4 md:px-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
              <Building2 size={32} strokeWidth={1.5} />
            </div>
            <div className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">1240+</div>
            <div className="text-lg text-slate-600 font-medium">Obsługiwanych firm</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
              <Clock size={32} strokeWidth={1.5} />
            </div>
            <div className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">98%</div>
            <div className="text-lg text-slate-600 font-medium">Terminowość rozliczeń</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
              <FileCheck2 size={32} strokeWidth={1.5} />
            </div>
            <div className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">2.3M+</div>
            <div className="text-lg text-slate-600 font-medium">Przetworzonych faktur KSeF</div>
          </motion.div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Zaufali nam najlepsi
          </h2>
          <p className="text-lg text-slate-600">
            Zobacz, co mówią o nas klienci, którzy już przeszli z nami rewolucję KSeF.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-slate-700 mb-8 flex-1 text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.company} 
                  className="w-12 h-12 rounded-full shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-slate-900">{testimonial.company}</div>
                  <div className="text-sm text-slate-500">{testimonial.author}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
