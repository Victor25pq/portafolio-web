import React from 'react';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { profile } = portfolioData;

  const metrics = [
    {
      value: "+3",
      label: "AÑOS DE EXPERIENCIA"
    },
    {
      value: "6",
      label: "PROYECTOS EN PRODUCCIÓN"
    },
    {
      value: "100%",
      label: "ENFOQUE OFFLINE-FIRST"
    }
  ];

  const technologies = [
    "Flutter", "Dart", "React", "TypeScript", "Python", 
    "Supabase", "PostgreSQL", "Isar DB", "Node.js", "BigQuery"
  ];

  return (
    <section id="home" className="w-full py-16 lg:py-24 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Transformando ideas complejas en <span className="text-[var(--accent)]">soluciones reales</span>
        </h1>

        {/* Bio paragraph */}
        <p className="text-lg sm:text-xl text-[var(--text)] leading-relaxed mb-16 max-w-3xl">
          {profile.aboutLong}
        </p>

        {/* Metrics Grid (Typographic Style) */}
        <div className="grid grid-cols-3 gap-6 md:gap-12 mb-16">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-heading)] font-outfit tracking-tight">
                {metric.value}
              </span>
              <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text)] mt-2 leading-snug">
                {metric.label}
              </span>
            </div>
          ))}
        </div>


        {/* Tech Badges */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text)] mb-4">
            Stack Tecnológico Principal
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg text-sm font-medium border border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-heading)] hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)] transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
