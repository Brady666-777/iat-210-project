'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  Home,
  Info,
  BookOpen,
  Cog,
  ScrollText,
  ClipboardList,
  Image,
  Users,
  Link2,
  FileDown,
  ChevronDown,
  Rocket,
} from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: Info },
  {
    href: '/lore',
    label: 'Lore',
    icon: BookOpen,
    sub: [
      { href: '/lore#turian', label: 'Turian Hierarchy' },
      { href: '/lore#asari', label: 'Asari Guardians' },
      { href: '/lore#krogan', label: 'Krogan Sons' },
      { href: '/lore#salarian', label: 'Salarian STG' },
      { href: '/lore#human', label: 'Human Alliance' },
    ],
  },
  { href: '/mechanics', label: 'Mechanics', icon: Cog },
  { href: '/rulebook', label: 'Rulebook', icon: ScrollText },
  { href: '/logs', label: 'Logs', icon: ClipboardList },
  { href: '/gallery', label: 'Gallery', icon: Image },
  { href: '/contributions', label: 'Contributions', icon: Users },
  { href: '/sourse', label: 'Sources', icon: Link2 },
  { href: '/file', label: 'Files', icon: FileDown },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [loreOpen, setLoreOpen] = useState(false);

  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] bg-[#07090f] border-r border-[#1a2040] flex flex-col z-40 overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-[#1a2040]">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-[#0d1530] border border-[#2a3a6a] flex items-center justify-center group-hover:border-[#4a6aaa] transition-colors">
            <Rocket size={18} className="text-[#6a9aff]" />
          </div>
          <div>
            <span className="font-medieval text-white text-sm tracking-widest block leading-tight">
              ARK
            </span>
            <span className="font-medieval text-[#6a9aff] text-xs tracking-widest block">
              ASCENSION
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          const hasSubItems = item.sub && item.sub.length > 0;

          if (hasSubItems) {
            return (
              <div key={item.href}>
                <button
                  onClick={() => setLoreOpen(!loreOpen)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all ${
                    pathname.startsWith('/lore')
                      ? 'bg-[#0d1530] text-white border border-[#2a3a6a]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </div>
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${loreOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {loreOpen && (
                  <div className="ml-7 mt-1 space-y-0.5 border-l border-[#1a2040] pl-3">
                    {item.sub!.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-2 py-2 text-xs text-gray-500 hover:text-gray-200 transition-colors rounded"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                isActive
                  ? 'bg-[#0d1530] text-white border border-[#2a3a6a]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={16} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#1a2040]">
        <p className="text-gray-600 text-xs text-center">IAT 201 — Group Project</p>
        <p className="text-gray-700 text-xs text-center mt-0.5">SFU 2026</p>
      </div>
    </aside>
  );
}
