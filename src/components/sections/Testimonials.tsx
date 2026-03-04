import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    company: 'TechFlow Sp. z o.o.',
    quote: 'Przejście na pełen KSeF było bezbolesne. Biuro zajęło się wszystkim, a my mamy podgląd na żywo w panelu. Polecam każdemu.',
    author: 'Michał Kowalski, CEO',
  },
  {
    company: 'E-commerce Plus',
    quote: 'Mamy tysiące faktur miesięcznie. Automatyzacja, którą wdrożyli, uratowała nam mnóstwo czasu. Zero błędów od 2 lat.',
    author: 'Anna Nowak, Właścicielka',
  },
  {
    company: 'Studio Architektoniczne',
    quote: 'Zawsze terminowo, zawsze profesjonalnie. Doradztwo podatkowe na najwyższym poziomie. Oszczędziliśmy sporo na podatkach.',
    author: 'Piotr Wiśniewski, Architekt',
  },
  {
    company: 'Agencja Marketingowa',
    quote: 'Aplikacja mobilna to sztos! Skanuję faktury kosztowe w biegu, a księgowa ma je od razu u siebie. Koniec z papierologią.',
    author: 'Katarzyna Lewandowska, Founder',
  },
  {
    company: 'Janusz-Pol Transport',
    quote: 'Bałem się tego całego KSeF-u, ale wytłumaczyli mi wszystko krok po kroku. Teraz to nawet wygodniejsze niż papier.',
    author: 'Janusz Dąbrowski, Właściciel',
  },
  {
    company: 'IT Consulting',
    quote: 'Jako programista cenię sobie nowoczesne rozwiązania. Ich panel klienta i API do integracji z naszym systemem to mistrzostwo.',
    author: 'Tomasz Zieliński, B2B',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50" id="opinie">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Zaufali nam najlepsi
          </h2>
          <p className="text-lg text-slate-600">
            Zobacz, co mówią o nas klienci, którzy już przeszli z nami rewolucję KSeF.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-sm"
          >
            <div className="text-4xl font-extrabold text-emerald-600 mb-2">1240+</div>
            <div className="text-slate-600 font-medium">Obsługiwanych firm</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-sm"
          >
            <div className="text-4xl font-extrabold text-emerald-600 mb-2">98%</div>
            <div className="text-slate-600 font-medium">Terminowość rozliczeń</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-sm"
          >
            <div className="text-4xl font-extrabold text-emerald-600 mb-2">2.3M+</div>
            <div className="text-slate-600 font-medium">Przetworzonych faktur KSeF</div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-slate-700 mb-8 flex-1 italic">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-bold text-slate-900">{testimonial.company}</div>
                <div className="text-sm text-slate-500">{testimonial.author}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
