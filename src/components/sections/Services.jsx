import { SERVICES } from '../../data/services';
import Badge from '../ui/Badge';
import { Code, Layout, ShoppingCart, Gauge, Workflow, Globe } from 'lucide-react';

const ICONS = {
  code: Code,
  wordpress: Globe,
  layout: Layout,
  cart: ShoppingCart,
  gauge: Gauge,
  workflow: Workflow,
};

export default function Services() {
  return (
    <div className="flex flex-col">
      <Badge>MY SERVICES</Badge>

      <h2 className="mt-6 text-3xl desk:text-5xl font-bold leading-tight max-w-2xl">
        What I can build for you
      </h2>

      <p className="mt-6 text-muted text-base desk:text-lg leading-relaxed max-w-2xl">
        Whether you need custom code or a fast no-code build, I deliver complete solutions end-to-end designed to grow your business and built to last.
      </p>

      {/* Service cards */}
      <div className="mt-10 grid grid-cols-1 xs:grid-cols-2 gap-5">
        {SERVICES.map((service) => {
          const Icon = ICONS[service.icon] || Code;

          return (
            <div
              key={service.title}
              className="rounded-2xl border border-border bg-bg p-6 hover:border-accent transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}