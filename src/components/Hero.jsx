import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Phone, ExternalLink, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth (no pointer capture) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Foreground Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <Rocket className="h-4 w-4 text-indigo-300" />
            <span className="text-xs tracking-wider text-indigo-200">Otherworldly Portfolio Experience</span>
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.1] text-white drop-shadow-sm sm:text-6xl md:text-7xl">
            Vibhav Joshi
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-indigo-200/90 sm:text-base">
            Full Stack Developer crafting immersive, futuristic web experiences. Step onto the cosmic rollercoaster—where
            high-performance engineering meets holographic aesthetics.
          </p>

          {/* Quick links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:vibhav.joshi005@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-indigo-500/90 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
            >
              <Mail className="h-4 w-4" /> Contact
              <ExternalLink className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
            </a>
            <a
              href="tel:7769952213"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              <Phone className="h-4 w-4" /> 7769952213
            </a>
            <a
              href="#links"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              <ExternalLink className="h-4 w-4" /> Links
            </a>
          </div>

          {/* Socials Row */}
          <div id="links" className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-indigo-100 transition hover:bg-white/15"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-indigo-100 transition hover:bg-white/15"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-indigo-100 transition hover:bg-white/15"
            >
              <ExternalLink className="h-4 w-4" /> Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
