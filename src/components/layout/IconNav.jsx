import { NAV } from '../../data/nav';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function DesktopNav({ active, onNavigate }) {
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 hidden nav:flex flex-col items-center gap-3 bg-surface/80 backdrop-blur-md rounded-2xl py-4 px-2 z-20 shadow-xl border border-border">
      {NAV.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;

        return (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {isActive && (
              <motion.span
                layoutId="activeBorderDesktop"
                className="absolute -left-2 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-accent"
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            )}

            <motion.button
              onClick={() => onNavigate(item.id)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className={`relative flex h-11 w-11 items-center justify-center rounded-full border-2 transition-colors
                ${isActive
                  ? 'border-accent text-accent'
                  : 'border-transparent text-muted hover:border-accent hover:text-accent'
                }`}
            >
              <AnimatePresence>
                {hovered === item.id && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.15, scale: 1.4 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="absolute inset-0 rounded-full bg-accent"
                  />
                )}
              </AnimatePresence>
              <Icon size={20} className="relative z-10" />
            </motion.button>

            <AnimatePresence>
              {hovered === item.id && (
                <motion.span
                  initial={{ opacity: 0, x: -10, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -10, scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="absolute left-full top-1/2 -translate-y-1/2 ml-3 rounded-full bg-accent px-4 py-1 text-sm font-semibold text-black whitespace-nowrap pointer-events-none shadow-lg"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}

function MobileNav({ active, onNavigate }) {
  return (
<nav className="fixed bottom-0 left-0 right-0 nav:hidden z-30 bg-surface/90 backdrop-blur-xl border-t border-border shadow-2xl">  <div className="flex overflow-x-auto gap-1 px-4 py-3 scrollbar-hide">
        {NAV.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              whileTap={{ scale: 0.9 }}
              className="relative flex-1 min-w-[44px] flex flex-col items-center justify-center py-2 rounded-xl"
            >
              {/* Active background pill */}
              {isActive && (
  <motion.div
    layoutId="activePillMobile"
    className="absolute top-1 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-accent/15"
    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
  />
)}

              <Icon
                size={22}
                className={`relative z-10 transition-colors ${
                  isActive ? 'text-accent' : 'text-muted'
                }`}
              />

              {/* Active dot below icon */}
              {isActive && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="relative z-10 mt-1 h-1 w-1 rounded-full bg-accent"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}

export default function IconNav({ active, onNavigate }) {
  return (
    <>
      <DesktopNav active={active} onNavigate={onNavigate} />
      <MobileNav active={active} onNavigate={onNavigate} />
    </>
  );
}