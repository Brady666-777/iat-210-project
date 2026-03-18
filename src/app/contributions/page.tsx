const contributors = [
  {
    name: 'Nima Salehirad',
    overall: '20%',
    roles: ['Flowchart Designer', 'Quantitative Analyst', 'Video Production'],
    contributions: [
      'Turn-sequence flowchart (Mermaid/graph TD)',
      'Quantitative analysis of game balance',
      'Free-rider dynamics & Solar Sacrifice probability',
      'Video trailer production support',
    ],
    color: '#4a9eff',
    icon: '📊',
  },
  {
    name: 'Evan Wang',
    overall: '20%',
    roles: ['Playtesting Lead', 'Game Description Writer'],
    contributions: [
      'Playtesting log (5-round simulation)',
      'End-of-round state tracking',
      'Game description — overview and pillars',
      'Balance feedback writeup',
    ],
    color: '#35d4a0',
    icon: '🧪',
  },
  {
    name: 'Ruiyang Wu',
    overall: '20%',
    roles: ['Website Creator'],
    contributions: [
      'Website creation and implementation',
      'Built and maintained project pages in Next.js',
      'Structured site navigation and content sections',
      'Updated web content and layout during development',
    ],
    color: '#9b6bff',
    icon: '💻',
  },
  {
    name: 'Christopher Piek',
    overall: '20%',
    roles: ['Card Creator', 'Trailer Producer'],
    contributions: [
      'Card creation and design work',
      'Video trailer production',
      'Visual content support for presentation materials',
      'Helped shape card visuals to match game theme',
    ],
    color: '#eab308',
    icon: '🎬',
  },
  {
    name: 'Amirkia Safari',
    overall: '20%',
    roles: ['Rulebook Author', 'Visual Gallery Curator', 'Trailer Producer'],
    contributions: [
      'Complete rulebook (Setup, Race Boards, Turn Sequence, Win Condition)',
      'Visual gallery — faction card layouts',
      'Promotional trailer for Ark Ascension',
      'Print-and-play file preparation',
    ],
    color: '#ff6b35',
    icon: '📖',
  },
];

export default function ContributionsPage() {
  return (
    <div className="min-h-screen p-8 md:p-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-medieval text-white mb-4 tracking-wider">
          Contributions
        </h1>
        <p className="text-gray-500 text-lg italic max-w-2xl mx-auto">
          Ark Ascension was built by a team of five — each bringing unique skills to bring this board game to life.
        </p>
      </section>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {contributors.map(({ name, overall, roles, contributions, color, icon }) => (
          <div
            key={name}
            className="bg-[#0a0e1a] border rounded-xl overflow-hidden flex flex-col"
            style={{ borderColor: color + '40' }}
          >
            <div
              className="px-6 py-5 border-b flex items-center gap-4"
              style={{ borderColor: color + '40', backgroundColor: color + '15' }}
            >
              <span className="text-3xl">{icon}</span>
              <div>
                <h2 className="text-xl font-bold text-white">{name}</h2>
                <div className="flex flex-wrap gap-1 mt-1">
                  {roles.map((role) => (
                    <span
                      key={role}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: color + '20', color }}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div className="ml-auto text-right">
                <p className="text-2xl font-bold" style={{ color }}>{overall}</p>
                <p className="text-gray-500 text-xs">contribution</p>
              </div>
            </div>
            <div className="p-6 flex-1">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Deliverables</p>
              <ul className="space-y-2">
                {contributions.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span style={{ color }}>▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-12 bg-[#0a0e1a] border border-[#1a2040] rounded-xl p-6 text-center">
        <p className="text-gray-500 text-sm">
          IAT 201 — Interactive Arts & Technology · Simon Fraser University · 2026
        </p>
        <p className="text-gray-600 text-xs mt-1">
          Each team member contributed equally across research, design, and production phases.
        </p>
      </div>
    </div>
  );
}
