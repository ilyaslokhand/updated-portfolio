import { useState } from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { SITE } from '../../data/site';
import Badge from '../ui/Badge';

const ACCESS_KEY = '3b807bb0-d3b1-4f73-ad9c-fb3e140802d1';

export default function Contact() {
  const { socials } = SITE;
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    formData.append('access_key', ACCESS_KEY);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-bg px-4 py-3 text-text placeholder:text-muted focus:border-accent focus:outline-none transition-colors';

  return (
    <div className="flex flex-col">
      <Badge>CONTACT</Badge>

      <h2 className="mt-6 text-3xl desk:text-5xl font-bold leading-tight max-w-2xl">
        Let's build something great together
      </h2>

      <p className="mt-6 text-muted text-base desk:text-lg leading-relaxed max-w-2xl">
        Have a project in mind or just want to say hello? Drop me a message and I'll get back to you soon.
      </p>

      <div className="mt-10 grid grid-cols-1 desk:grid-cols-2 gap-10">

        {/* Left: contact info */}
        <div className="flex flex-col gap-6">
          
          <a  href="mailto:ilokhandwala98@gmail.com"
            className="flex items-center gap-4 group"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent shrink-0">
              <Mail size={22} />
            </span>
            <div>
              <p className="text-sm text-muted">Email</p>
              <p className="font-medium group-hover:text-accent transition-colors">
                ilokhandwala98@gmail.com
              </p>
            </div>
          </a>

          <a href="tel:+919664202575"
            className="flex items-center gap-4 group"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent shrink-0">
              <Phone size={22} />
            </span>
            <div>
              <p className="text-sm text-muted">Phone</p>
              <p className="font-medium group-hover:text-accent transition-colors">
                +91 96642 02575
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent shrink-0">
              <MapPin size={22} />
            </span>
            <div>
              <p className="text-sm text-muted">Location</p>
              <p className="font-medium">Surat, Gujarat, India</p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-2">
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.2.8 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/>
              </svg>
            </a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0024 12.5C24 5.87 18.63.5 12 .5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="Your name" required className={inputClass} />
          <input type="email" name="email" placeholder="Your email" required className={inputClass} />
          <textarea name="message" placeholder="Your message" rows={5} required className={`${inputClass} resize-none`} />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 font-semibold text-black hover:brightness-110 transition disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : <>Send Message <Send size={18} /></>}
          </button>

          {status === 'success' && (
            <p className="text-accent text-sm">Thanks! Your message has been sent.</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-sm">Something went wrong. Please try again or email me directly.</p>
          )}
        </form>
      </div>
    </div>
  );
}