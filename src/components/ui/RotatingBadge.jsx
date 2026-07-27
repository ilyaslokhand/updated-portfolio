import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function RotatingBadge({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative h-40 w-40 flex items-center justify-center group cursor-pointer"
    >
      {/* Rotating text ring */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      >
        <defs>
          <path
            id="circlePath"
            d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text className="fill-text text-[15px] uppercase tracking-[0.3em] font-medium">
          <textPath href="#circlePath" startOffset="0%">
            My Projects • My Projects •
          </textPath>
        </text>
      </motion.svg>

      {/* Center arrow */}
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-text group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-colors">
        <ArrowDown size={20} />
      </span>
    </button>
  );
}