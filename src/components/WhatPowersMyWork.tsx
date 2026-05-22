import React, { useState } from 'react';
import { 
  Monitor, 
  Mic, 
  Code2, 
  Code, 
  Orbit, 
  Sparkles, 
  ListTodo,
  Terminal,
  Cpu
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ToolItem {
  name: string;
  imageUrl?: string;
}

interface ToolGroupProps {
  title: string;
  items: ToolItem[];
}

type IconConfig =
  | { type: 'simple-icon'; value: string; color?: string | { dark: string; light: string } }
  | { type: 'lucide'; value: any }
  | { type: 'local-png'; value: string };

const iconMap: Record<string, IconConfig> = {
  // Hardware
  'Mac mini M4': { type: 'simple-icon', value: 'apple', color: { dark: 'ffffff', light: '000000' } },
  'Monitor 4K': { type: 'lucide', value: Monitor },
  'Hypercast': { type: 'lucide', value: Mic },
  
  // Ambiente Dev
  'Codex': { type: 'local-png', value: '/icons/codex.png' },
  'OpenCode': { type: 'local-png', value: '/icons/opencode.png' },
  'Antigravity': { type: 'local-png', value: '/icons/antigravity.png' },
  'Claude': { type: 'simple-icon', value: 'anthropic', color: { dark: 'E0DCD3', light: '191919' } },
  
  // CLI
  'GitHub CLI': { type: 'simple-icon', value: 'github', color: { dark: 'ffffff', light: '181717' } },
  'gcloud': { type: 'local-png', value: '/icons/gcloud.png' },
  'Homebrew': { type: 'simple-icon', value: 'homebrew', color: 'FBB040' },
  
  // Apps
  'To-Do': { type: 'local-png', value: '/icons/todo.png' },
  'Google WS': { type: 'local-png', value: '/icons/google.png' },
  'Gemini': { type: 'local-png', value: '/icons/gemini.png' },
  'YT Music': { type: 'simple-icon', value: 'youtubemusic', color: 'FF0000' }
};

const ToolIcon: React.FC<{ name: string }> = ({ name }) => {
  const [hasError, setHasError] = useState(false);
  const { theme } = useTheme();
  const config = iconMap[name];

  if (!config || hasError) {
    // Graceful fallbacks
    if (name.toLowerCase().includes('mac') || name.toLowerCase().includes('apple')) {
      return <Cpu className="w-5 h-5 text-[var(--text)] opacity-70" />;
    }
    if (name.toLowerCase().includes('monitor') || name.toLowerCase().includes('pantalla')) {
      return <Monitor className="w-5 h-5 text-[var(--text)] opacity-70" />;
    }
    return <Terminal className="w-5 h-5 text-[var(--text)] opacity-70" />;
  }

  if (config.type === 'lucide') {
    const LucideIcon = config.value;
    return <LucideIcon className="w-5 h-5 text-[var(--accent)]" />;
  }

  if (config.type === 'local-png') {
    return (
      <img
        src={config.value}
        alt={name}
        className="w-6 h-6 object-contain"
        onError={() => setHasError(true)}
      />
    );
  }

  // Simple-icon CDN with dynamic color based on theme
  let iconColor = '';
  if (config.color) {
    if (typeof config.color === 'string') {
      iconColor = config.color;
    } else {
      iconColor = theme === 'dark' ? config.color.dark : config.color.light;
    }
  }

  const colorParam = iconColor ? `/${iconColor}` : '';
  const url = `https://cdn.simpleicons.org/${config.value}${colorParam}`;

  return (
    <img
      src={url}
      alt={name}
      className="w-5 h-5 object-contain"
      onError={() => setHasError(true)}
    />
  );
};

const ToolGroup: React.FC<ToolGroupProps> = ({ title, items }) => (
  <div className="flex flex-col gap-3">
    <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
      {title}
    </h3>
    <div className="flex flex-wrap gap-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center gap-1.5 w-16">
          {item.name === 'To-Do' ? (
            <div className="relative w-12 h-12 rounded-lg border-2 border-[var(--accent)] bg-[var(--accent-bg)] flex items-center justify-center shadow-[0_0_12px_var(--accent)] hover:scale-105 hover:shadow-[0_0_16px_var(--accent)] transition-all duration-300 cursor-default">
              <ToolIcon name={item.name} />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-lg border border-[var(--border)] bg-[var(--accent-bg)] flex items-center justify-center hover:border-[var(--accent-border)] hover:bg-[var(--bg)] hover:scale-105 transition-all duration-300 cursor-default shadow-sm">
              <ToolIcon name={item.name} />
            </div>
          )}
          <span className={`text-xs font-medium text-center leading-tight ${item.name === 'To-Do' ? 'text-[var(--accent)] font-bold' : 'text-[var(--text-heading)]'}`}>
            {item.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export const WhatPowersMyWork: React.FC = () => {
  const groups = [
    {
      title: 'Hardware',
      items: [
        { name: 'Mac mini M4' },
        { name: 'Monitor 4K' },
        { name: 'Hypercast' }
      ]
    },
    {
      title: 'Ambiente Dev',
      items: [
        { name: 'Codex' },
        { name: 'OpenCode' },
        { name: 'Antigravity' },
        { name: 'Claude' }
      ]
    },
    {
      title: 'CLI',
      items: [
        { name: 'GitHub CLI' },
        { name: 'gcloud' },
        { name: 'Homebrew' }
      ]
    },
    {
      title: 'Apps',
      items: [
        { name: 'To-Do' },
        { name: 'Google WS' },
        { name: 'Gemini' },
        { name: 'YT Music' }
      ]
    }
  ];

  return (
    <div id="stack" className="w-full py-16 border-t border-[var(--border)] scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Qué <span className="text-[var(--accent)] font-semibold">Potencia</span> Mi Trabajo
          </h2>
        </div>

        {/* Tool Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {groups.map((group) => (
            <ToolGroup key={group.title} title={group.title} items={group.items} />
          ))}
        </div>
      </div>
    </div>
  );
};