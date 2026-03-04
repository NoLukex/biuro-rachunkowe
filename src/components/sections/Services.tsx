import { Link } from 'react-router-dom';
import { 
  Calculator, 
  FileText, 
  Users, 
  FileCheck, 
  Lightbulb, 
  BarChart,
  ArrowRight
} from 'lucide-react';
import { SERVICE_PRICING } from '@/src/content/pricing';

const services = [
  {
    icon: Calculator,
    title: 'Pełna księgowość',
    description: 'Kompleksowe prowadzenie ksiąg rachunkowych dla spółek z o.o., S.A. i innych podmiotów.',
    price: SERVICE_PRICING.pelnaKsiegowosc,
    link: '/pelna-ksiegowosc'
  },
  {
    icon: FileText,
    title: 'KPiR / ryczałt',
    description: 'Uproszczona księgowość dla jednoosobowych działalności gospodarczych i spółek cywilnych.',
    price: SERVICE_PRICING.kpirRyczalt,
    link: '/kpir-ryczalt'
  },
  {
    icon: Users,
    title: 'Kadry i ZUS',
    description: 'Pełna obsługa kadrowo-płacowa, rozliczenia z ZUS, umowy, urlopy i zwolnienia lekarskie.',
    price: SERVICE_PRICING.kadryZus,
    link: '/kadry-zus'
  },
  {
    icon: FileCheck,
    title: 'Obsługa KSeF (automat)',
    description: 'W pełni zautomatyzowane pobieranie i wysyłanie faktur ustrukturyzowanych z KSeF.',
    price: SERVICE_PRICING.obslugaKsef,
    link: '/obsluga-ksef'
  },
  {
    icon: Lightbulb,
    title: 'Doradztwo podatkowe',
    description: 'Optymalizacja podatkowa, wybór formy opodatkowania i reprezentacja przed US.',
    price: SERVICE_PRICING.doradztwo,
    link: '/doradztwo-podatkowe'
  },
  {
    icon: BarChart,
    title: 'Sprawozdania',
    description: 'Przygotowywanie rocznych sprawozdań finansowych oraz raportów zarządczych.',
    price: SERVICE_PRICING.sprawozdania,
    link: '/sprawozdania'
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
            Dostosowujemy zakres obsługi do etapu Twojego biznesu. Wybierz pakiet, który najlepiej odpowiada Twoim potrzebom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl">
              <div className="h-full bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
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
                  <span className="text-blue-600 group-hover:text-blue-700 flex items-center gap-1 text-sm font-medium">
                    Szczegóły <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
