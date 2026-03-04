import { motion } from 'motion/react';
import { Award, Briefcase } from 'lucide-react';

const team = [
  {
    name: 'Marta Kowalska',
    role: 'Główna Księgowa',
    exp: '15 lat doświadczenia',
    certs: 'Biegły Rewident',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Tomasz Nowak',
    role: 'Doradca Podatkowy',
    exp: '12 lat doświadczenia',
    certs: 'Doradca Podatkowy nr 12345',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Anna Wiśniewska',
    role: 'Ekspert ds. Kadr i ZUS',
    exp: '10 lat doświadczenia',
    certs: 'Specjalista ds. Kadr',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Piotr Zieliński',
    role: 'Specjalista KSeF',
    exp: '8 lat doświadczenia',
    certs: 'Ekspert ds. Cyfryzacji',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
  },
];

export function Team() {
  return (
    <section className="py-24 bg-slate-50" id="zespol">
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
              className="group bg-white p-4 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-slate-100 aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Briefcase className="w-4 h-4 text-blue-400" />
                      {member.exp}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Award className="w-4 h-4 text-blue-400" />
                      {member.certs}
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 pb-2 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
