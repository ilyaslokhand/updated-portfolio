import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 cursor-pointer desk:top-6 desk:right-6 z-40 h-12 w-12 rounded-full bg-surface/80 backdrop-blur-md border border-border shadow-lg flex items-center justify-center overflow-hidden"
    >
      {/* Spinning ring around the button */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(var(--accent), transparent, var(--accent))`,
          opacity: 0.3,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Inner circle background */}
      <div className="absolute inset-[2px] rounded-full bg-surface" />

      {/* Icon swap with rotation */}
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        exit={{ rotate: 90, scale: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative z-10"
      >
        {isDark ? (
          <Moon size={20} className="text-accent" />
        ) : (
          <Sun size={20} className="text-accent" />
        )}
      </motion.div>
    </button>
  );
}