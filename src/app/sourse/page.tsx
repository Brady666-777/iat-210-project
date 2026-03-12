import { ExternalLink } from 'lucide-react';

const sources = [
  {
    title: 'Game Design Inspiration',
    description: 'Mass Effect franchise (BioWare / EA) — Faction lore, universe setting, and species design.',
    url: 'https://www.masseffect.com',
  },
  {
    title: 'Board Game Mechanics Reference',
    description: 'BoardGameGeek — Resource management, race board patterns, and cooperative tension mechanics.',
    url: 'https://boardgamegeek.com',
  },
  {
    title: 'Inspiration — Monopoly',
    description: 'Hasbro — Circular board movement, property acquisition, and player interaction model.',
    url: null,
  },
  {
    title: 'Inspiration — Risk',
    description: 'Hasbro — Territory control, faction conflict, and strategic area denial.',
    url: null,
  },
  {
    title: 'Inspiration — Smash Up',
    description: 'AEG — Faction ability stacking, card deck mechanics, and asymmetric player powers.',
    url: null,
  },
  {
    title: 'Inspiration — King of Tokyo',
    description: 'IELLO — Push-your-luck dice mechanics and resource-to-progress conversion.',
    url: null,
  },
  {
    title: 'Flowchart Tool',
    description: 'Mermaid.js — Used to generate the game turn-sequence flowchart (graph TD syntax).',
    url: 'https://mermaid.js.org',
  },
  {
    title: 'Website Framework',
    description: 'Next.js 14 (Vercel) — App Router, TypeScript, Tailwind CSS for this demo site.',
    url: 'https://nextjs.org',
  },
];

export default function SourcesPage() {
  return (
    <div className="min-h-screen p-8 md:p-12">
      <h1 className="text-5xl md:text-6xl font-medieval text-white mb-16 text-center tracking-wider">
        Sources
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {sources.map((source, index) => (
          <div key={index} className="border-b border-[#1a2040] pb-6">
            <h2 className="text-xl font-medieval text-white mb-2 tracking-wide">
              {source.title}
            </h2>
            {source.url ? (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#6a9aff] transition-colors flex items-center gap-2 group"
              >
                <span className="group-hover:underline">{source.description}</span>
                <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" />
              </a>
            ) : (
              <p className="text-gray-400">{source.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
