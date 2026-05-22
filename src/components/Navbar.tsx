import React, { useState, useEffect } from 'react';
import { Home, Folder, Layers, Mail } from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const navItems: NavItem[] = [
    { href: '#home', label: 'Inicio', icon: <Home className="w-4 h-4" /> },
    { href: '#projects', label: 'Proyectos', icon: <Folder className="w-4 h-4" /> },
    { href: '#stack', label: 'Stack', icon: <Layers className="w-4 h-4" /> },
    { href: '#contact', label: 'Contacto', icon: <Mail className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const item of navItems) {
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <div className="flex items-center gap-1 sm:gap-2 px-2 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card-bg)] bg-opacity-70 dark:bg-opacity-75 backdrop-blur-md shadow-lg">
        {navItems.map((item) => {
          const sectionId = item.href.substring(1);
          const isActive = activeSection === sectionId;

          return (
            <a
              key={item.href}
              href={item.href}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer select-none ${
                isActive
                  ? 'bg-[var(--accent)] text-white shadow-sm'
                  : 'text-[var(--text)] hover:bg-[var(--accent-bg)] hover:text-[var(--text-heading)]'
              }`}
              title={item.label}
            >
              {item.icon}
              <span className="hidden sm:inline">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
