import { EXPERIENCE, EDUCATION } from '../../data/resume';
import Badge from '../ui/Badge';

function TimelineItem({ item }) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      {/* Vertical line */}
      <span className="absolute left-[6px] top-2 bottom-0 w-[2px] bg-border" />
      {/* Dot */}
      <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-surface" />

      <p className="text-xs text-muted tracking-[2px] uppercase">
        {item.period}
      </p>
      <h4 className="mt-2 text-xl font-bold leading-snug">
        {item.role || item.degree}
      </h4>
      <p className="mt-1 text-accent font-medium">
        {item.company || item.school}
      </p>

      <ul className="mt-3 space-y-2">
        {item.points.map((point, j) => (
          <li key={j} className="text-muted leading-relaxed">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Resume() {
  return (
    <div className="flex flex-col">
      <Badge>RESUME</Badge>

      <h2 className="mt-6 text-3xl desk:text-5xl font-bold">
        Experience & Education
      </h2>

      {/* Experience */}
      <h3 className="mt-10 text-2xl font-bold mb-8">Experience</h3>
      <div>
        {EXPERIENCE.map((item, i) => (
          <TimelineItem key={i} item={item} />
        ))}
      </div>

      {/* Education */}
      <h3 className="mt-8 text-2xl font-bold mb-8">Education</h3>
      <div>
        {EDUCATION.map((item, i) => (
          <TimelineItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}