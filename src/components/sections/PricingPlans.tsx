import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PLAN_PRICING } from '@/src/content/pricing';

const plans = [
  {
    name: 'Start',
    price: PLAN_PRICING.start,
    subtitle: 'Dla JDG i małych działalności usługowych',
    features: [
      'Prowadzenie KPiR / ryczałtu',
      'Rozliczenia podatkowe i ZUS',
      'Panel klienta i przypomnienia terminów',
      'Konsultacje mailowe i telefoniczne',
    ],
  },
  {
    name: 'Biznes',
    price: PLAN_PRICING.biznes,
    subtitle: 'Dla firm rozwijających sprzedaż i zespół',
    features: [
      'Rozliczenia VAT i większa liczba dokumentów',
      'Obsługa kadrowo-płacowa',
      'Wsparcie przy KSeF i obiegu dokumentów',
      'Dedykowany opiekun 1:1',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: PLAN_PRICING.premium,
    subtitle: 'Dla spółek i firm o złożonej strukturze',
    features: [
      'Pełna księgowość i raportowanie zarządcze',
      'Doradztwo podatkowe i scenariusze decyzji',
      'Niestandardowe procesy i automatyzacje',
      'Priorytetowe wsparcie operacyjne',
    ],
  },
];

export function PricingPlans() {
  return (
    <section className="py-24 bg-slate-100" id="pakiety">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Pakiety współpracy
          </h2>
          <p className="text-lg text-slate-600">
            Proste poziomy cenowe, które pomagają szybko dobrać zakres obsługi do etapu Twojego biznesu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl border p-7 flex flex-col ${
                plan.featured
                  ? 'bg-slate-900 border-slate-800 text-white shadow-xl'
                  : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-4 ${plan.featured ? 'text-slate-300' : 'text-slate-500'}`}>{plan.subtitle}</p>
              <p className={`text-xl font-semibold mb-6 ${plan.featured ? 'text-blue-300' : 'text-blue-700'}`}>{plan.price}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 ${plan.featured ? 'text-blue-300' : 'text-blue-600'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={{ pathname: '/', hash: '#kontakt' }}
                className={`inline-flex items-center gap-2 font-semibold ${
                  plan.featured ? 'text-white hover:text-blue-200' : 'text-blue-600 hover:text-blue-700'
                } transition-colors`}
              >
                Umów konsultację <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
