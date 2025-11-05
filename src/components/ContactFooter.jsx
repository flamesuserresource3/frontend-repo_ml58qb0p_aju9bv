import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const ContactFooter = () => {
  return (
    <footer className="relative w-full bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Let’s build something stellar</h3>
            <p className="mt-2 max-w-md text-sm text-indigo-200/90">
              Open to roles, collaborations, and wild ideas. If it pushes the web forward, I’m in.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href="mailto:vibhav.joshi005@gmail.com" className="flex items-center gap-2 text-indigo-200 transition hover:text-white">
                <Mail className="h-4 w-4" /> vibhav.joshi005@gmail.com
              </a>
              <a href="tel:7769952213" className="flex items-center gap-2 text-indigo-200 transition hover:text-white">
                <Phone className="h-4 w-4" /> 7769952213
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wider text-indigo-300">Links</h4>
            <div className="mt-3 flex flex-wrap gap-3">
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
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-indigo-300/80">
          © {new Date().getFullYear()} Vibhav Joshi — Crafted with love and cosmic gradients.
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
