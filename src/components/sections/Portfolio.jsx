import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import Badge from '../ui/Badge';

export default function Portfolio() {
  return (
    <div className="flex flex-col">
      <Badge>PORTFOLIO</Badge>

      <h2 className="mt-6 text-3xl desk:text-5xl font-bold leading-tight max-w-2xl">
        Selected work
      </h2>

      <p className="mt-6 text-muted text-base desk:text-lg leading-relaxed max-w-2xl">
        A mix of custom web apps and client websites I've designed, built, and shipped.
      </p>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 grid:grid-cols-2 gap-5">
        {PROJECTS.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl border border-border aspect-[4/3]"
          >
            {/* Screenshot */}
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay on hover */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black group-hover:via-black/60 transition-colors duration-300" />

            {/* Text + arrow revealed on hover */}
            <div className="absolute inset-0 flex flex-col justify-end p-5">
    <div className="flex items-end justify-between">
      <div>
        <h3 className="text-white font-bold text-lg">{project.title}</h3>
        <p className="text-gray-300 text-sm">{project.subtitle}</p>
      </div>
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-black shrink-0 transition-transform duration-300 group-hover:scale-110">
        <ArrowUpRight size={20} />
      </span>
    </div>
  </div>
          </a>
        ))}
      </div>
    </div>
  );
}