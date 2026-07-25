import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import IconNav from './components/layout/IconNav';
import ThemeToggle from './components/layout/ThemeToggle';
import ProfileCard from './components/layout/ProfileCard';
import { SECTIONS } from './components/sections';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState('home');

  const Section = SECTIONS[active];

  return (
    <div className="min-h-screen bg-bg text-text">
      <IconNav active={active} onNavigate={setActive} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <div className="desk:min-h-screen flex items-center justify-center px-4 py-8 pb-28 desk:pb-8 desk:pl-28 desk:pr-8">
  <div className="w-full max-w-[700px] desk:max-w-[1360px] flex flex-col desk:flex-row items-center">


          <ProfileCard />

         <main
      className="
        relative z-10 w-full desk:flex-1
        bg-surface rounded-[40px] shadow-lg
        mt-6 desk:mt-0 desk:-ml-24
        px-6 py-10
        desk:pl-36 desk:pr-14 desk:py-14
        desk:h-[688px] desk:overflow-y-auto
      "
    >
      <Section onNavigate={setActive} />
    </main>

        </div>
      </div>
    </div>
  );
}