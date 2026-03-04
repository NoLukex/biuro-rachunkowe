import { motion } from 'motion/react';

const integrations = [
  { name: 'PKO BP', image: 'https://logo.clearbit.com/pkobp.pl' },
  { name: 'mBank', image: 'https://logo.clearbit.com/mbank.pl' },
  { name: 'ING', image: 'https://logo.clearbit.com/ing.pl' },
  { name: 'Xero', image: 'https://logo.clearbit.com/xero.com' },
  { name: 'Comarch', image: 'https://logo.clearbit.com/comarch.pl' },
  { name: 'Allegro', image: 'https://logo.clearbit.com/allegro.pl' },
  { name: 'Shoper', image: 'https://logo.clearbit.com/shoper.pl' },
  { name: 'KSeF', image: 'https://logo.clearbit.com/gov.pl' },
];

export function Integrations() {
  return (
    <section className="py-24 bg-white" id="integracje">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Zintegrowani z Twoim biznesem
          </h2>
          <p className="text-lg text-slate-600">
            Pobieramy wyciągi bankowe i faktury sprzedażowe automatycznie. Nie musisz nam niczego wysyłać.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col items-center justify-center gap-4 hover:bg-white hover:shadow-md transition-all duration-300 group grayscale hover:grayscale-0"
            >
              <img 
                src={integration.image} 
                alt={integration.name} 
                className="w-12 h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = `https://api.dicebear.com/9.x/initials/svg?seed=${integration.name}&backgroundColor=f8fafc&textColor=64748b`;
                }}
              />
              <span className="font-semibold text-xs text-slate-500 group-hover:text-slate-900 transition-colors uppercase tracking-wider">
                {integration.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
