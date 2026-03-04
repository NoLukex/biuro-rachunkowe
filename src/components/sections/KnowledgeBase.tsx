import { motion } from 'motion/react';
import { ArrowRight, BookOpen } from 'lucide-react';

const articles = [
  {
    title: 'KSeF krok po kroku. Jak przygotować firmę?',
    category: 'Przewodnik',
    date: '12 Mar 2026',
    excerpt: 'Praktyczny poradnik dla przedsiębiorców. Dowiedz się, jak wdrożyć Krajowy System e-Faktur bez stresu i kar.',
    slug: 'ksef-krok-po-kroku',
  },
  {
    title: 'Zmiany w VAT 2026. Co musisz wiedzieć?',
    category: 'Podatki',
    date: '05 Mar 2026',
    excerpt: 'Nowe stawki, odliczenia i terminy. Sprawdź, jak zoptymalizować rozliczenia VAT w nowym roku podatkowym.',
    slug: 'zmiany-vat-2026',
  },
  {
    title: 'Optymalizacja składek ZUS dla B2B',
    category: 'Optymalizacja',
    date: '28 Lut 2026',
    excerpt: 'Mały ZUS Plus, ulga na start czy działalność nierejestrowana? Wybierz najlepszą opcję dla swojego biznesu.',
    slug: 'optymalizacja-zus-b2b',
  },
  {
    title: 'Ulgi podatkowe, o których zapominasz',
    category: 'Porady',
    date: '15 Lut 2026',
    excerpt: 'Ulga IP Box, B+R, na robotyzację. Zobacz, z jakich odliczeń możesz skorzystać, by płacić niższe podatki.',
    slug: 'ulgi-podatkowe-2026',
  },
];

export function KnowledgeBase() {
  return (
    <section className="py-24 bg-slate-50" id="wiedza">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Baza wiedzy przedsiębiorcy
            </h2>
            <p className="text-lg text-slate-600">
              Bądź na bieżąco ze zmianami w prawie. Nasi eksperci tłumaczą skomplikowane przepisy na ludzki język.
            </p>
          </div>
          <a href="/blog" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
            Zobacz wszystkie artykuły <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5" />
                    {article.category}
                  </span>
                  <span className="text-sm text-slate-400 font-medium">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                <a
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors mt-auto"
                >
                  Czytaj więcej <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
