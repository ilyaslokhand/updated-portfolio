import { SKILLS_ROW_1, SKILLS_ROW_2 } from '../../data/skills';
import Badge from '../ui/Badge';

function SkillPill({ skill }) {
  return (
    <div
      className="flex items-center px-5 h-[52px] rounded-xl border border-border border-l-[3.5px] bg-bg shadow-sm shrink-0 whitespace-nowrap"
      style={{ borderLeftColor: skill.color }}
    >
      <span className="text-sm font-semibold">{skill.name}</span>
    </div>
  );
}

function MarqueeRow({ skills, direction }) {
  // Duplicate the list so the loop is seamless
  const doubled = [...skills, ...skills];
  const animClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className="marquee-row flex overflow-hidden w-full relative">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      <div className={`${animClass} flex gap-4 pr-4`}>
        {doubled.map((skill, i) => (
          <SkillPill key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="flex flex-col">
      <Badge>MY SKILLS</Badge>

      <h2 className="mt-6 text-3xl desk:text-5xl font-bold leading-tight max-w-2xl">
        The tools I use to bring your project to life
      </h2>

      <p className="mt-6 text-muted text-base desk:text-lg leading-relaxed max-w-2xl">
        From custom code to no-code platforms, here's the tech stack I work with every day to build fast, reliable, and scalable web experiences.
      </p>

      <div className="mt-10 flex flex-col gap-5">
        <MarqueeRow skills={SKILLS_ROW_1} direction="left" />
        <MarqueeRow skills={SKILLS_ROW_2} direction="right" />
      </div>
    </div>
  );
}