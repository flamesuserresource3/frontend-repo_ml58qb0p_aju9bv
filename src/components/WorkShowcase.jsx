import React from 'react';
import { ExternalLink, Star, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'Nebula Commerce',
    tagline: 'Headless storefront with holographic UI and real-time inventory',
    tech: ['React', 'FastAPI', 'MongoDB', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Quantum Notes',
    tagline: 'Collaborative editing with CRDTs and cosmic gradients',
    tech: ['Vite', 'Node.js', 'WebSockets'],
    link: '#',
  },
  {
    title: 'Orion Streams',
    tagline: 'Video processing pipeline with GPU acceleration',
    tech: ['TypeScript', 'FFmpeg', 'GCP'],
    link: '#',
  },
];

const Badge = ({ label }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-indigo-200">{label}</span>
);

const WorkShowcase = () => {
  return (
    <section id="portfolio" className="relative w-full bg-[#07080c] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-indigo-200">
              <Rocket className="h-3.5 w-3.5" />
              <span>Featured Work</span>
            </div>
            <h2 className="text-2xl font-bold sm:text-3xl">Projects from the Cosmic Workshop</h2>
          </div>
          <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-indigo-200 shadow-sm sm:flex">
            <Star className="h-4 w-4 text-yellow-300" /> Curated highlights
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 transition hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)]"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(99,102,241,0.15), transparent 40%)'}} />
              <header className="mb-3 flex items-start justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <a href={p.link} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-indigo-100 transition hover:bg-white/20">
                  View <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </header>
              <p className="mb-4 text-sm text-indigo-200/90">{p.tagline}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Badge key={t} label={t} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
