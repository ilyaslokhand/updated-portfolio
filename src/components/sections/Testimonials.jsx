import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';
import Badge from '../ui/Badge';

export default function Testimonials() {
  const [swiper, setSwiper] = useState(null);
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col">
      <Badge>TESTIMONIALS</Badge>

      <h2 className="mt-6 text-3xl desk:text-5xl font-bold leading-tight">
        Trusted by clients worldwide
      </h2>

      <p className="mt-6 text-muted text-base desk:text-lg leading-relaxed max-w-2xl">
        Here's what a few of the people I've worked with have to say.
      </p>

      <div className="mt-10">
        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiper}
          onSlideChange={(s) => setIndex(s.activeIndex)}
          spaceBetween={20}
          slidesPerView={1}
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="rounded-2xl border border-border bg-bg p-6 desk:p-8">
                {/* Header row */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-14 w-14 rounded-full object-cover border border-border"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{t.name}</h4>
                    <a  
                        href={t.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted hover:text-accent transition-colors"
                      >
                        {t.role}
                      </a>
                    </div>
                  </div>
                  <Quote size={32} className="text-accent shrink-0" />
                </div>

                {/* Stars */}
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 text-muted leading-relaxed">
                  {t.quote}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nav controls */}
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={() => swiper?.slidePrev()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-sm text-muted">
            {index + 1} / {TESTIMONIALS.length}
          </span>
          <button
            onClick={() => swiper?.slideNext()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}