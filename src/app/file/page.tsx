import { Download, Clock } from 'lucide-react';

const fileCategories = [
  {
    title: 'Galactic Central Board',
    desc: 'The main 20-tile circular board. Print on A2 or larger for best results.',
    status: 'coming-soon',
    files: [],
  },
  {
    title: 'Race Boards (All 5 Factions)',
    desc: 'Individual Race Boards for Turian, Asari, Krogan, Salarian, and Human. Includes 10-slot Ark Construction Track.',
    status: 'coming-soon',
    files: [],
  },
  {
    title: 'Card Decks',
    desc: 'Action Deck (30 cards), Sabotage Deck (20 cards), Solar Penalty Deck (10 cards). Print on cardstock.',
    status: 'coming-soon',
    files: [],
  },
  {
    title: 'Resource Tokens',
    desc: 'Metal, Fuel, and Crystal resource tokens. Cut and stack for physical play.',
    status: 'coming-soon',
    files: [],
  },
  {
    title: 'Rulebook (Printable)',
    desc: 'Full printable rulebook PDF — Game Setup, Race Board Details, Turn Sequence, and Win Conditions.',
    status: 'coming-soon',
    files: [],
  },
];

export default function FilesPage() {
  return (
    <div className="min-h-screen p-8 md:p-12">
      <h1 className="text-5xl md:text-6xl font-medieval text-white mb-4 text-center tracking-wider">
        Print & Play Files
      </h1>
      <p className="text-gray-500 text-center mb-16 italic max-w-xl mx-auto">
        Downloadable assets for Ark Ascension. Print, cut, and assemble your own copy.
      </p>

      <div className="max-w-3xl mx-auto space-y-6">
        {fileCategories.map((category, index) => (
          <section key={index} className="bg-[#0a0e1a] border border-[#1a2040] rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-[#1a2040] flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">{category.title}</h2>
                <p className="text-gray-500 text-sm mt-1">{category.desc}</p>
              </div>
            </div>
            <div className="px-6 py-5">
              {category.status === 'coming-soon' ? (
                <div className="flex items-center gap-3 text-gray-500 text-sm">
                  <Clock size={18} className="opacity-60" />
                  <span>Files coming soon — check back after final production.</span>
                </div>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {category.files.map((file: { name: string; url: string }) => (
                    <a
                      key={file.name}
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#6a9aff]/10 border border-[#6a9aff]/40 text-[#6a9aff] rounded-lg text-sm hover:bg-[#6a9aff]/20 transition-all"
                    >
                      <Download size={16} />
                      {file.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-12 bg-[#0a0e1a] border border-[#6a9aff]/20 rounded-xl p-6 text-center">
        <p className="text-gray-500 text-sm">
          All files will be released under a Creative Commons non-commercial license.
        </p>
        <p className="text-gray-600 text-xs mt-1">IAT 201 — Simon Fraser University · 2026</p>
      </div>
    </div>
  );
}
