import { motion } from 'motion/react';
import { ShieldAlert, PiggyBank, Scale, CheckCircle } from 'lucide-react';

const guarantees = [
  {
    icon: PiggyBank,
    title: 'Zwrot 100% w 30 dni',
    description: 'Jeśli nie będziesz zadowolony z naszych usług w pierwszym miesiącu, oddamy Ci pieniądze bez pytań.',
  },
  {
    icon: ShieldAlert,
    title: 'OC na 2 000 000 zł',
    description: 'Posiadamy ubezpieczenie od odpowiedzialności cywilnej na kwotę 2 milionów złotych.',
  },
  {
    icon: Scale,
    title: 'Odpowiedzialność za błędy',
    description: 'Bierzemy pełną odpowiedzialność prawną i finansową za prawidłowość Twoich rozliczeń.',
  },
  {
    icon: CheckCircle,
    title: 'Zero kar z US',
    description: 'Z nami nie musisz obawiać się kontroli. Gwarantujemy zgodność z aktualnymi przepisami.',
  },
];

export function Guarantees() {
  return (
    <section className="py-24 bg-emerald-900 text-white" id="gwarancje">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Bezpieczeństwo przede wszystkim
          </h2>
          <p className="text-lg text-emerald-100/80">
            Współpraca z nami to spokój ducha. Chronimy Twój biznes na każdym kroku.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-emerald-800/50 rounded-2xl p-8 border border-emerald-700/50 hover:bg-emerald-800 transition-colors"
            >
              <div className="w-14 h-14 bg-emerald-700 rounded-xl flex items-center justify-center mb-6 text-emerald-300">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-emerald-100/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
