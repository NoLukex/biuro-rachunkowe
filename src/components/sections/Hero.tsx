import { Button } from '@/src/components/ui/button';
import { SITE_CONFIG } from '@/src/constants';
import { ArrowRight, CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';
import { trackEvent } from '@/src/lib/analytics';

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-slate-900" id="home">
      <div className="absolute -top-32 -left-16 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl z-0" />
      <div className="absolute top-20 right-0 w-[28rem] h-[28rem] rounded-full bg-sky-500/10 blur-3xl z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[44rem] h-[20rem] rounded-full bg-indigo-500/15 blur-3xl z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900 z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 text-sm font-semibold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Biuro rachunkowe dla firm z {SITE_CONFIG.cityForms.genitive}
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Księgowość, kadry i KSeF
              <span className="block text-blue-300">w jednym zespole.</span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light mx-auto lg:mx-0">
              Od razu wiesz, że rozmawiasz z biurem rachunkowym: dedykowana księgowa, przejrzyste rozliczenia i wsparcie w codziennych decyzjach.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20" asChild>
                <a
                  href="#kontakt"
                  onClick={() => trackEvent('hero_cta_click', { cta: 'consultation' })}
                >
                  Umów darmową 15-minutową konsultację
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 rounded-full border-slate-600 text-white hover:bg-slate-800 hover:text-white bg-transparent" asChild>
                <a
                  href="#panel"
                  onClick={() => trackEvent('hero_cta_click', { cta: 'panel_demo' })}
                >
                  Zobacz demo panelu klienta
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-blue-400" /><span>Bez ukrytych opłat</span></div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-blue-400" /><span>Pełna integracja z KSeF</span></div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-blue-400" /><span>Wsparcie dedykowanej księgowej</span></div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
              <img
                src="/images/hero-accountant.jpg"
                alt="Uśmiechnięty doradca finansowy w garniturze"
                width={1200}
                height={900}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-[440px] object-cover object-[center_9%]"
                referrerPolicy="no-referrer"
                onError={(event) => {
                  const img = event.currentTarget;
                  if (img.dataset.fallbackApplied === '1') return;
                  img.dataset.fallbackApplied = '1';
                  img.src = '/images/hero-accountant-fallback.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/25 to-transparent" />

              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 text-slate-900 px-3 py-1.5 text-xs font-semibold">
                <Building2 className="w-4 h-4 text-blue-600" />
                Biuro rachunkowe
              </div>

              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-950/80 border border-slate-700 p-3">
                  <div className="text-xs text-slate-400">Klienci B2B</div>
                  <div className="text-lg font-bold text-white">350+</div>
                </div>
                <div className="rounded-xl bg-slate-950/80 border border-slate-700 p-3">
                  <div className="text-xs text-slate-400">Dedykowany opiekun</div>
                  <div className="text-lg font-bold text-white">1:1</div>
                </div>
              </div>

              <div className="absolute top-4 right-4 rounded-xl bg-blue-600/90 text-white px-3 py-2 text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-900/30">
                <ShieldCheck className="w-4 h-4" />
                Zgodność i bezpieczeństwo
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
