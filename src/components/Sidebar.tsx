import React from 'react';
import { Mail, MapPin, Sun, Moon, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import { LinkedinIcon, YoutubeIcon } from './SocialIcons';

export const Sidebar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { profile } = portfolioData;

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Profile Card */}
      <div className="glass-card p-6 flex flex-col items-center text-center">
        {/* Theme Toggle Button (Top Right) */}
        <div className="w-full flex justify-end mb-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-[var(--border)] text-[var(--text)] hover:text-[var(--text-heading)] hover:bg-[var(--accent-bg)] hover:border-[var(--accent-border)] transition-all cursor-pointer"
            title={theme === 'light' ? 'Cambiar a Modo Oscuro' : 'Cambiar a Modo Hueso'}
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>

        {/* Avatar Image Wrapper */}
        <div className="relative w-36 h-36 mb-5">
          <div className="w-full h-full rounded-2xl overflow-hidden border border-[var(--border)] shadow-md">
            <img
              src="/profile.webp"
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Animated availability indicator (green pulse dot) */}
          <span 
            className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 z-20"
            title="Disponible para trabajar"
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[var(--accent)] border-2 border-[var(--card-bg)]"></span>
          </span>
        </div>

        {/* Info */}
        <h2 className="text-2xl font-black text-[var(--text-heading)] tracking-tight mb-1">
          {profile.name}
        </h2>
        <p className="text-sm font-semibold text-[var(--accent)] mb-4">
          {profile.title}
        </p>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-xs text-[var(--text)] mb-6 font-semibold">
          <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>{profile.location}</span>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mb-6 w-full">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg border border-[var(--border)] text-[var(--text)] hover:text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all cursor-pointer"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4.5 h-4.5" />
          </a>
          <a
            href={profile.youtube}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg border border-[var(--border)] text-[var(--text)] hover:text-white hover:bg-red-600 hover:border-red-600 transition-all cursor-pointer"
            title="YouTube"
          >
            <YoutubeIcon className="w-4.5 h-4.5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="p-2.5 rounded-lg border border-[var(--border)] text-[var(--text)] hover:text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all cursor-pointer"
            title="Email"
          >
            <Mail className="w-4.5 h-4.5" />
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] font-bold transition-all shadow-md cursor-pointer"
        >
          Hablemos
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

