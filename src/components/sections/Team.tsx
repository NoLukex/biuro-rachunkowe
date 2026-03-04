import { motion } from 'motion/react';
import { Award, Briefcase } from 'lucide-react';

const team = [
  {
    name: 'Marta Kowalska',
    role: 'Główna Księgowa',
    exp: '15 lat doświadczenia',
    certs: 'Certyfikat MF, Biegły Rewident',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Marta&backgroundColor=b6e3f4',
  },
  {
    name: 'Tomasz Nowak',
    role: 'Doradca Podatkowy',
    exp: '12 lat doświadczenia',
    certs: 'Doradca Podatkowy nr 12345',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Tomasz&backgroundColor=c0aede',
  },
  {
    name: 'Anna Wiśniewska',
    role: 'Ekspert ds. Kadr i ZUS',
    exp: '10 lat doświadczenia',
    certs: 'Specjalista ds. Kadr',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Anna&backgroundColor=ffdfbf',
  },
  {
    name: 'Piotr Zieliński',
    role: 'Specjalista KSeF',
    exp: '8 lat doświadczenia',
    certs: 'Ekspert ds. Cyfryzacji',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Piotr&backgroundColor=d1d4f9',
  },
];

export function Team() {
  return (
    <section className="py-24 bg-white" id="zespol">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Twój dedykowany zespół
          </h2>
          <p className="text-lg text-slate-600">
            Nie jesteś tylko numerem w systemie. Nad Twoimi finansami czuwają licencjonowani eksperci z wieloletnim stażem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-slate-100 aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <div className="flex items-center gap-2 text-sm font-medium mb-1">
                      <Briefcase className="w-4 h-4 text-emerald-400" />
                      {member.exp}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Award className="w-4 h-4 text-emerald-400" />
                      {member.certs}
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-emerald-600 font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
