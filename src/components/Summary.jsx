import React from 'react';
import { Code2, Star, Rocket } from 'lucide-react';

const skills = [
  'React',
  'TypeScript',
  'Node.js',
  'FastAPI',
  'MongoDB',
  'GraphQL',
  'Tailwind',
  'CI/CD',
  'Cloud (AWS/GCP)'
];

const Summary = () => {
  return (
    <section className="relative isolate w-full bg-gradient-to-b from-black to-[#07080c] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-indigo-200">
              <Rocket className="h-3.5 w-3.5" />
              <span>Summary</span>
            </div>
            <h2 className="text-2xl font-bold sm:text-3xl">Full Stack Developer • 3+ years</h2>
            <p className="mt-3 max-w-3xl text-indigo-200/90">
              I build high-fidelity, performant web apps with a focus on immersive UI and robust backend systems. My
              expertise spans modern frontends, scalable APIs, and database design—shipped with craftsmanship and polish.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-indigo-200 shadow-sm">
            <div className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-300" /> Always exploring the edge of web UX</div>
          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((s) => (
            <div
              key={s}
              className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-indigo-100 transition hover:border-indigo-400/40 hover:bg-white/10"
            >
              <Code2 className="h-4 w-4 text-indigo-300" />
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Summary;
