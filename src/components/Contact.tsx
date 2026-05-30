import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full py-16 border-t border-[var(--border)] scroll-mt-24 mb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-card p-8 sm:p-12 relative overflow-hidden bg-gradient-to-br from-[var(--card-bg)] to-[var(--bg)]">
          {/* Subtle Glow Background */}
          <div className="absolute -right-24 -bottom-24 w-64 h-64 rounded-full bg-[var(--accent-bg)] filter blur-3xl opacity-60 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] px-2.5 py-1 rounded-full bg-[var(--accent-bg)] border border-[var(--accent-border)] mb-4 inline-block">
              ¿Listo para dar el salto?
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Hablemos de tu <span className="text-[var(--accent)]">proyecto</span>
            </h2>
            <p className="text-md sm:text-lg text-[var(--text)] mb-8 leading-relaxed">
              ¿Buscas un desarrollador que entienda procesos complejos, integre IA y construya soluciones robustas con bases de datos sólidas? Ponte en contacto conmigo.
            </p>

            {/* Contact Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-between sm:justify-start gap-3 px-6 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-heading)] font-semibold hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-5 h-5 text-[var(--accent)]" />
                  <span className="font-mono text-sm sm:text-base">{profile.email}</span>
                </div>
                <div className="p-1 rounded bg-[var(--card-bg)] border border-[var(--border)] ml-2">
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-[var(--text)]" />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

