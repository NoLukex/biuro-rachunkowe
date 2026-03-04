import { SITE_CONFIG } from '../constants';

export function Regulamin() {
  return (
    <section className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Regulamin</h1>
        <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6 text-slate-700 leading-relaxed">
          {SITE_CONFIG.isDemo && (
            <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
              Wersja demonstracyjna: przed publikacją doprecyzuj zakres usług, odpowiedzialność i procedury reklamacji.
            </p>
          )}

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Dane usługodawcy</h2>
            <p>{SITE_CONFIG.name}</p>
            <p>{SITE_CONFIG.address}</p>
            <p>NIP: {SITE_CONFIG.nip}</p>
            <p>REGON: {SITE_CONFIG.regon}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Zakres strony</h2>
            <p>
              Strona ma charakter informacyjny i służy do prezentacji oferty usług księgowych, kadrowych oraz
              doradczych. Wysłanie formularza kontaktowego nie stanowi zawarcia umowy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Zasady kontaktu</h2>
            <p>
              Odpowiedzi na zapytania przesyłane są telefonicznie lub mailowo. Termin odpowiedzi zależy od stopnia
              złożoności zapytania i aktualnego obciążenia zespołu.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Odpowiedzialność</h2>
            <p>
              Treści publikowane na stronie mają charakter ogólny i nie stanowią indywidualnej porady prawnej,
              podatkowej ani księgowej. Szczegółowe warunki współpracy określa odrębna umowa.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Kontakt</h2>
            <p>Telefon: {SITE_CONFIG.phone}</p>
            <p>Email: {SITE_CONFIG.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
