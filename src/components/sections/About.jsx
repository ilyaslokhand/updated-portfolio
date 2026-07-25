import { SITE } from '../../data/site';
import Badge from '../ui/Badge';

export default function About() {
  const { about, socials } = SITE;

  const iconClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors";

  return (
    <div className="flex flex-col">
      <Badge>{about.label}</Badge>

      <h2 className="mt-6 text-3xl desk:text-5xl font-bold leading-tight max-w-2xl">
        {about.heading}
      </h2>

      <p className="mt-6 text-muted text-base desk:text-lg leading-relaxed max-w-2xl">
        {about.body}
      </p>

      <div className="mt-10 grid grid-cols-1 xs:grid-cols-2 gap-8 max-w-lg">
        {about.stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl desk:text-5xl font-bold text-accent">{stat.value}</p>
            <p className="mt-2 text-sm tracking-wider uppercase text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-4">
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconClass}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.2.8 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/>
          </svg>
        </a>
        <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconClass}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0024 12.5C24 5.87 18.63.5 12 .5z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}