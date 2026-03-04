import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Calculator, 
  FileText, 
  Users, 
  FileCheck, 
  Lightbulb, 
  BarChart,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Calculator,
    title: 'Pełna księgowość',
    description: 'Kompleksowe prowadzenie ksiąg rachunkowych dla spółek z o.o., S.A. i innych podmiotów.',
    price: 'od 1200 zł/mc',
    link: '/pelna-ksiegowosc'
  },
  {
    icon: FileText,
    title: 'KPiR / Ryczałt',
    description: 'Uproszczona księgowość dla jednoosobowych działalności gospodarczych i spółek cywilnych.',
    price: 'od 250 zł/mc',
    link: '/kpir-ryczalt'
  },
  {
    icon: Users,
    title: 'Kadry i ZUS',
    description: 'Pełna obsługa kadrowo-płacowa, rozliczenia z ZUS, umowy, urlopy i zwolnienia lekarskie.',
    price: 'od 50 zł/pracownika',
  },
  {
    icon: FileCheck,
    title: 'Obsługa KSeF (automat)',
    description: 'W pełni zautomatyzowane pobieranie i wysyłanie faktur ustrukturyzowanych z KSeF.',
    price: 'W cenie pakietu',
  },
  {
    icon: Lightbulb,
    title: 'Doradztwo podatkowe',
    description: 'Optymalizacja podatkowa, wybór formy opodatkowania i reprezentacja przed US.',
    price: 'od 300 zł/h',
  },
  {
    icon: BarChart,
    title: 'Sprawozdania',
    description: 'Przygotowywanie rocznych sprawozdań finansowych oraz raportów zarządczych.',
    price: 'od 1500 zł/rok',
  },
];

export function Services() {
  return (
    <section className="py-24 bg-slate-50" id="uslugi">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Kompleksowe usługi księgowe
          </h2>
          <p className="text-lg text-slate-600">
            Dostosowujemy się do Twojego biznesu. Wybierz pakiet, który najlepiej odpowiada Twoim potrzebom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  {service.price}
                </span>
                {service.link && (
                  <Link to={service.link} className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm font-medium">
                    Szczegóły <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
