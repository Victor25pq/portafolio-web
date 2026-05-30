import React, { useState, useEffect } from 'react';
import { X, Calendar, Code, User, Check, Info, Cpu, Sparkles, LayoutGrid, ExternalLink } from 'lucide-react';
import { portfolioData, type Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<'all' | 'mobile' | 'web' | 'data'>('all');
  const [ownershipFilter, setOwnershipFilter] = useState<'all' | 'own' | 'client'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'general' | 'features' | 'challenges'>('general');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const formatSectionText = (text: string) => {
    const colonIndex = text.indexOf(':');
    if (colonIndex !== -1) {
      return (
        <>
          <strong className="text-[var(--text-heading)] font-bold">{text.substring(0, colonIndex + 1)}</strong>
          {text.substring(colonIndex + 1)}
        </>
      );
    }
    const words = text.split(' ');
    if (words.length <= 3) {
      return <strong className="text-[var(--text-heading)] font-bold">{text}</strong>;
    }
    const boldText = words.slice(0, 3).join(' ') + ' ';
    const normalText = words.slice(3).join(' ');
    return (
      <>
        <strong className="text-[var(--text-heading)] font-bold">{boldText}</strong>
        {normalText}
      </>
    );
  };

  const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'mobile', label: 'Apps Móviles' },
    { value: 'web', label: 'Aplicaciones Web' },
    { value: 'data', label: 'Datos & ETL' }
  ];

  const ownershipCategories = [
    { value: 'all', label: 'Todas' },
    { value: 'own', label: 'Propias' },
    { value: 'client', label: 'Clientes' }
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesOwnership = ownershipFilter === 'all' || project.ownership === ownershipFilter;
    return matchesCategory && matchesOwnership;
  });

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="w-full py-16 border-t border-[var(--border)] scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Proyectos <span className="text-[var(--accent)] font-semibold">Destacados</span>
          </h2>
        </div>

        {/* Filters Group */}
        <div className="flex flex-col gap-5 mb-10 items-center justify-center">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value as any)}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  filter === cat.value
                    ? 'bg-[var(--accent)] text-white shadow'
                    : 'text-[var(--text)] border border-[var(--border)] hover:bg-[var(--accent-bg)] hover:text-[var(--text-heading)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Small modern divider */}
          <div className="w-12 h-[1px] bg-[var(--border)] opacity-60"></div>

          {/* Ownership Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {ownershipCategories.map((own) => (
              <button
                key={own.value}
                onClick={() => setOwnershipFilter(own.value as any)}
                className={`px-4 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  ownershipFilter === own.value
                    ? 'bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent-border)]'
                    : 'text-[var(--text)] border border-transparent hover:bg-[var(--accent-bg)] hover:text-[var(--text-heading)]'
                }`}
              >
                {own.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setActiveTab('general');
                }}
                className="glass-card overflow-hidden group cursor-pointer flex flex-col h-full border border-[var(--border)] hover:border-[var(--accent-border)] hover:shadow-lg transition-all duration-300"
              >
                {/* Project Image / Fallback Placeholder */}
                <div className="relative w-full aspect-[16/10] bg-[var(--accent-bg)] border-b border-[var(--border)] overflow-hidden">
                  {project.coverImage ? (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      onError={() => {
                        setImageErrors(prev => ({ ...prev, [project.id]: true }));
                      }}
                    />
                  ) : null}
                  {/* Styled Tech Placeholder */}
                  {(!project.coverImage || imageErrors[project.id]) && (
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center select-none pointer-events-none bg-gradient-to-br from-[var(--bg)] to-[var(--accent-bg)] opacity-95">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-[var(--accent)] uppercase mb-2">
                        {project.category}
                      </span>
                      <span className="text-base font-black text-[var(--text-heading)] mb-1 font-outfit">
                        {project.title}
                      </span>
                      <span className="text-[9px] font-mono text-[var(--text)] opacity-70">
                        Arrastrar imagen a: public/projects/{project.id}.png
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Text Content */}
                <div className="p-5 flex flex-col justify-between flex-grow bg-[var(--card-bg)]">
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[var(--text)] opacity-80 uppercase mb-1">
                      <span>{project.year}</span>
                      <span>•</span>
                      <span className="text-[var(--accent)]">{project.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--text-heading)] group-hover:text-[var(--accent)] transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-[var(--text)] mt-0.5 mb-3 leading-snug">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Tech stack row (first 4 items) */}
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.stack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-mono font-medium rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--text-heading)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent-border)]">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Detail Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative w-full max-w-3xl bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl shadow-2xl flex flex-col h-[80vh] md:h-[600px] overflow-hidden animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-[var(--card-bg)] border-b border-[var(--border)] px-6 py-4 flex items-center justify-between z-10 shrink-0">
                <div>
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-[var(--text)] font-semibold mb-2.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Año {selectedProject.year}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--border)]"></span>
                    <span className="uppercase text-[var(--accent)] font-bold">{selectedProject.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[var(--text-heading)] tracking-tight flex items-center gap-3">
                    {selectedProject.title}
                    {selectedProject.url && (
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent-border)] hover:bg-[var(--accent)] hover:text-white transition-all cursor-pointer"
                        title="Ver proyecto online"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Visitar</span>
                      </a>
                    )}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg border border-[var(--border)] text-[var(--text)] hover:text-[var(--text-heading)] hover:bg-[var(--accent-bg)] transition-all cursor-pointer"
                  title="Cerrar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tabs Navigation */}
              <div className="flex border-b border-[var(--border)] bg-[var(--card-bg)] px-6 sm:px-8 overflow-x-auto scrollbar-none shrink-0 z-10">
                <button
                  onClick={() => setActiveTab('general')}
                  className={`flex items-center gap-2 py-3 px-4 text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'general'
                      ? 'border-[var(--accent)] text-[var(--accent)] font-bold'
                      : 'border-transparent text-[var(--text)] hover:text-[var(--text-heading)]'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                  General
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`flex items-center gap-2 py-3 px-4 text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'features'
                      ? 'border-[var(--accent)] text-[var(--accent)] font-bold'
                      : 'border-transparent text-[var(--text)] hover:text-[var(--text-heading)]'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  Funcionalidades
                </button>
                <button
                  onClick={() => setActiveTab('challenges')}
                  className={`flex items-center gap-2 py-3 px-4 text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'challenges'
                      ? 'border-[var(--accent)] text-[var(--accent)] font-bold'
                      : 'border-transparent text-[var(--text)] hover:text-[var(--text-heading)]'
                  }`}
                >
                  <Cpu className="w-4 h-4" />
                  Desafíos Técnicos
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-grow overflow-y-auto p-6 sm:p-8">
                {activeTab === 'general' && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-fade-in">
                    {/* Columna Izquierda: Sobre el Proyecto + Stack Utilizado */}
                    <div className="md:col-span-7 flex flex-col gap-6">
                      {/* Card 1: Sobre el Proyecto */}
                      <div className="flex-grow p-5 sm:p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg)] shadow-sm flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text)] opacity-70 mb-3 flex items-center gap-1.5">
                            <Info className="w-3.5 h-3.5 text-[var(--accent)]" />
                            Sobre el Proyecto
                          </h4>
                          <p className="text-sm sm:text-base text-[var(--text)] leading-relaxed font-normal">
                            {selectedProject.description}
                          </p>
                        </div>
                      </div>

                      {/* Card 3: Stack Tecnológico */}
                      <div className="p-5 sm:p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg)] shadow-sm">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text)] opacity-70 mb-4 flex items-center gap-1.5">
                          <Code className="w-3.5 h-3.5 text-[var(--accent)]" />
                          Stack Utilizado
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.stack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-[var(--card-bg)] border border-[var(--border)] text-[var(--text-heading)] hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)] hover:text-[var(--accent)] transition-all cursor-default select-none shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Columna Derecha: Mi Rol */}
                    <div className="md:col-span-5 p-5 sm:p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg)] shadow-sm flex flex-col justify-start h-full">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text)] opacity-70 mb-3 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[var(--accent)]" />
                        Mi Rol
                      </h4>
                      <p className="text-sm sm:text-base font-bold text-[var(--text-heading)] mb-3 leading-snug">
                        {selectedProject.role}
                      </p>
                      {selectedProject.roleDetails && selectedProject.roleDetails.length > 0 && (
                        <ul className="text-sm text-[var(--text)] space-y-2.5 list-none">
                          {selectedProject.roleDetails.map((det, idx) => (
                            <li key={idx} className="flex gap-2 items-start">
                              <Check className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                              <span className="leading-snug">{det}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
                    {selectedProject.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent-border)] transition-all duration-300 shadow-sm flex gap-4 items-start"
                      >
                        <div className="p-2 rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] shrink-0">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <p className="text-sm text-[var(--text)] leading-relaxed">
                          {formatSectionText(feat)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'challenges' && (
                  <div className="grid grid-cols-1 gap-4 animate-fade-in">
                    {selectedProject.challenges.map((chal, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg)] hover:border-amber-500/30 transition-all duration-300 shadow-sm flex gap-4 items-start"
                      >
                        <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-500 shrink-0">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <p className="text-sm text-[var(--text)] leading-relaxed">
                          {formatSectionText(chal)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
