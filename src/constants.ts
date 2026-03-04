const siteMode = (import.meta.env.VITE_SITE_MODE || 'demo').toLowerCase();

export const SITE_CONFIG = {
  name: 'Demo Biuro Rachunkowe',
  city: 'Poznań',
  cityForms: {
    nominative: 'Poznań',
    genitive: 'Poznania',
    locative: 'Poznaniu',
  },
  phone: '+48 500 600 700',
  email: 'kontakt@twojebiuro.pl',
  nip: '1234567890',
  regon: '123456789',
  address: 'ul. Przykładowa 12/34, 60-001 Poznań',
  siteMode,
  isDemo: siteMode !== 'prod',
  socials: {
    facebook: '',
    linkedin: '',
    instagram: '',
  },
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.975186555933!2d16.901676377072377!3d52.39785674618296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b3a8ea3f7d9%3A0x8f6ea0f678eca108!2sPozna%C5%84!5e0!3m2!1spl!2spl!4v1737025772234!5m2!1spl!2spl',
  contact: {
    formEndpoint: '',
    enableFloatingPhone: true,
    enableFloatingWhatsApp: true,
  },
};
