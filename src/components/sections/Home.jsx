import { SITE } from '../../data/site';
import RotatingBadge from '../ui/RotatingBadge';
import Badge from '../ui/Badge';

export default function Home({ onNavigate }) {
  const { intro } = SITE;

  return (
    <div className="flex flex-col h-full">
      <Badge>{intro.label}</Badge>

      <h1 className="mt-6 text-4xl desk:text-5xl font-bold leading-tight max-w-2xl">
        {intro.heading}
      </h1>

      <p className="mt-6 text-muted text-lg leading-relaxed max-w-xl">
        {intro.body}
      </p>

      {/* Bottom row: CV button + rotating badge */}
<div className="mt-6 flex flex-col xs:flex-row  xs:items-end justify-between gap-6 lg:mt-auto items-center">

  <button
  onClick={() => onNavigate('portfolio')}
  style={{ cursor: 'pointer' }}
  className="relative z-40 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-4 font-semibold text-black hover:brightness-110 transition"
>
  View Portfolio
</button>

  <RotatingBadge onClick={() => onNavigate('portfolio')} />
</div>
    </div>
  );
}