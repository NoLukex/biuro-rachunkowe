import { motion } from 'motion/react';
import { Building2, ShoppingCart, CreditCard, Box, FileSpreadsheet, Server, Database, Cloud } from 'lucide-react';

const integrations = [
  { name: 'PKO BP', icon: Building2 },
  { name: 'mBank', icon: CreditCard },
  { name: 'ING', icon: Building2 },
  { name: 'Xero', icon: FileSpreadsheet },
  { name: 'Comarch', icon: Server },
  { name: 'Allegro', icon: ShoppingCart },
  { name: 'Shoper', icon: Box },
  { name: 'KSeF', icon: Database },
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

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col items-center justify-center gap-4 hover:bg-white hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-400 group-hover:text-emerald-600 group-hover:scale-110 transition-all duration-300">
                <integration.icon size={32} strokeWidth={1.5} />
              </div>
              <span className="font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                {integration.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
