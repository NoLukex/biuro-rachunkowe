import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Textarea } from '@/src/components/ui/textarea';
import { Label } from '@/src/components/ui/label';
import { SITE_CONFIG } from '@/src/constants';
import { Phone, Mail, MapPin } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Imię musi mieć co najmniej 2 znaki' }),
  phone: z.string().min(9, { message: 'Podaj prawidłowy numer telefonu' }),
  email: z.string().email({ message: 'Podaj prawidłowy adres email' }),
  message: z.string().min(10, { message: 'Wiadomość musi mieć co najmniej 10 znaków' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log('Form data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert('Wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.');
    reset();
  };

  return (
    <section className="py-24 bg-slate-50" id="kontakt">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Porozmawiajmy o Twojej firmie
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Umów się na darmową, 15-minutową konsultację. Sprawdzimy, jak możemy zoptymalizować Twoje podatki i przygotować Cię na KSeF.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-slate-900 mb-1">Zadzwoń do nas</h4>
                  <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                    {SITE_CONFIG.phone}
                  </a>
                  <p className="text-slate-500 text-sm mt-1">Pn-Pt: 8:00 - 16:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-slate-900 mb-1">Napisz maila</h4>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-lg font-medium text-slate-700 hover:text-emerald-600 transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-slate-900 mb-1">Odwiedź nas</h4>
                  <p className="text-lg font-medium text-slate-700">
                    {SITE_CONFIG.address}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Wyślij wiadomość</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Imię i nazwisko / Nazwa firmy</Label>
                <Input
                  id="name"
                  placeholder="Jan Kowalski"
                  {...register('name')}
                  className={errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="123 456 789"
                    {...register('phone')}
                    className={errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}
                  />
                  {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jan@firma.pl"
                    {...register('email')}
                    className={errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Wiadomość</Label>
                <Textarea
                  id="message"
                  placeholder="Opisz krótko, jakiej pomocy potrzebujesz..."
                  className={`min-h-[120px] resize-none ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  {...register('message')}
                />
                {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-base font-semibold" disabled={isSubmitting}>
                {isSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}
              </Button>
              <p className="text-xs text-slate-500 text-center mt-4">
                Wysyłając formularz, akceptujesz naszą Politykę Prywatności.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
