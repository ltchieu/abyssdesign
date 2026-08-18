import React from 'react';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { CONTACT_DATA } from '../data/contactData';

export const FloatingZalo: React.FC = () => {
  return (
    <aside
      aria-label="Liên hệ Zalo tư vấn trực tiếp"
      className="fixed bottom-6 right-6 z-50 flex items-center group select-none pointer-events-auto"
    >
      <motion.a
        id="floating-zalo-btn"
        href={CONTACT_DATA.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        animate={{
          y: [0, -8, 0],
          boxShadow: [
            '0 8px 25px -4px rgba(2, 132, 199, 0.25), 0 4px 12px rgba(0, 0, 0, 0.08)',
            '0 18px 36px -4px rgba(2, 132, 199, 0.45), 0 8px 20px rgba(0, 245, 212, 0.25)',
            '0 8px 25px -4px rgba(2, 132, 199, 0.25), 0 4px 12px rgba(0, 0, 0, 0.08)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{
          scale: 1.06,
          y: -4,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-3 bg-white/95 backdrop-blur-md text-neutral-900 px-4 py-2.5 rounded-full border border-sky-300/80 hover:border-sky-400 cursor-pointer overflow-visible"
      >
        {/* Continuous Subtle Expanding Ripple Beacon behind button */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1.45],
            opacity: [0.6, 0.25, 0],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400/30 via-teal-300/30 to-blue-500/30 -z-10 pointer-events-none filter blur-[2px]"
        />

        {/* Zalo Icon / Hologram Circular Badge */}
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-hologram text-white shadow-md shrink-0">
          <FontAwesomeIcon icon={faCommentDots} className="text-sm" />
          {/* Pulsing Active Green Dot */}
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white" />
          </span>
        </div>

        {/* Text Details */}
        <div className="flex flex-col text-left pr-1">
          <span className="text-[11px] font-bold text-neutral-900 leading-tight flex items-center gap-1">
            Chat Zalo 24/7
          </span>
          <span className="text-[10px] font-mono text-neutral-500 leading-tight">
            {CONTACT_DATA.formattedPhone}
          </span>
        </div>
      </motion.a>
    </aside>
  );
};
