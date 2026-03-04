import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/button';
import { LayoutDashboard, Smartphone, Zap, ShieldCheck } from 'lucide-react';

export function ClientPanel() {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden" id="panel">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
              <Zap className="h-4 w-4" />
              Real-time KSeF
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Twój biznes w zasięgu ręki, 24/7
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Dostęp do faktur, podatków i raportów z każdego urządzenia. Automatyczna integracja z KSeF pozwala na podgląd dokumentów w czasie rzeczywistym.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  <LayoutDashboard className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Intuicyjny Dashboard</h4>
                  <p className="text-slate-400 text-sm">Wszystkie kluczowe wskaźniki w jednym miejscu.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  <Smartphone className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Aplikacja Mobilna</h4>
                  <p className="text-slate-400 text-sm">Skanuj paragony i wysyłaj faktury prosto z telefonu.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Automat KSeF</h4>
                  <p className="text-slate-400 text-sm">Faktury pobierają się same, bez Twojej ingerencji.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Bezpieczeństwo</h4>
                  <p className="text-slate-400 text-sm">Szyfrowanie bankowe i codzienne kopie zapasowe.</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base" asChild>
              <a href="/login">Zaloguj się do panelu</a>
            </Button>
          </motion.div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
              {/* Browser Chrome */}
              <div className="h-12 bg-slate-900 border-b border-slate-700 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto w-1/2 h-6 bg-slate-800 rounded-md border border-slate-700 flex items-center justify-center">
                  <span className="text-xs text-slate-500">panel.biuro-rachunkowe.pl</span>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="flex-1 p-6 flex flex-col gap-6 bg-slate-900/50">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-white">Podsumowanie miesiąca</h3>
                    <p className="text-sm text-slate-400">Marzec 2026</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                    JD
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                    <p className="text-xs text-slate-400 mb-1">Przychody</p>
                    <p className="text-lg font-bold text-white">45 200 zł</p>
                    <p className="text-xs text-blue-400 mt-1">+12% m/m</p>
                  </div>
                  <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                    <p className="text-xs text-slate-400 mb-1">Koszty</p>
                    <p className="text-lg font-bold text-white">12 450 zł</p>
                    <p className="text-xs text-red-400 mt-1">-5% m/m</p>
                  </div>
                  <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                    <p className="text-xs text-slate-400 mb-1">Podatek VAT</p>
                    <p className="text-lg font-bold text-white">7 532 zł</p>
                    <p className="text-xs text-slate-500 mt-1">Do 25.04</p>
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="flex-1 bg-slate-800 rounded-xl border border-slate-700 p-4 flex flex-col relative overflow-hidden">
                  <p className="text-sm font-medium text-slate-300 mb-4 z-10">Wykres przychodów i kosztów</p>
                  <div className="absolute inset-0 top-12 opacity-50" style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    mixBlendMode: 'luminosity'
                  }} />
                  <div className="flex-1 flex items-end gap-2 z-10">
                    {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col justify-end gap-1 h-full">
                        <div className="w-full bg-blue-500/80 rounded-t-sm" style={{ height: `${h}%` }} />
                        <div className="w-full bg-slate-600 rounded-t-sm" style={{ height: `${h * 0.4}%` }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
