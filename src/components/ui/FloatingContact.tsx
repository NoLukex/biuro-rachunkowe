import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../../constants';

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a
        href={`https://wa.me/${SITE_CONFIG.phone.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Napisz na WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
      <motion.a
        href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Zadzwoń do nas"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
