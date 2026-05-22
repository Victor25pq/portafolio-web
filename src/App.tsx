import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { WhatPowersMyWork } from './components/WhatPowersMyWork';
import { Contact } from './components/Contact';

function AppContent() {
  return (
    <div className="relative min-h-screen transition-colors duration-300">
      {/* Floating Navigation Pill */}
      <Navbar />

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Sticky Profile Sidebar */}
          <aside className="lg:col-span-4 w-full lg:sticky lg:top-28">
            <Sidebar />
          </aside>

          {/* Right Column: Scrollable Main Content */}
          <main className="lg:col-span-8 w-full flex flex-col gap-4">
            <Hero />
            <Projects />
            <WhatPowersMyWork />
            <Contact />
          </main>

        </div>
      </div>
      
      {/* Tiny Credit Footer */}
      <footer className="w-full text-center py-8 border-t border-[var(--border)] text-xs font-mono text-[var(--text)]">
        Victor Angel PQ &copy; {new Date().getFullYear()} | Hecho con React, TypeScript y Tailwind v4.
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
