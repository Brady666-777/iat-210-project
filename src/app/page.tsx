export default function Home() {
  return (
    <div className="min-h-screen p-8 md:p-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <p className="text-[#6a9aff] text-sm tracking-widest uppercase mb-4">IAT 201 - Board Game Project</p>
        <h1 className="text-5xl md:text-6xl font-medieval text-white mb-6 tracking-wider">
          Ark Ascension
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          The sun is dying. Five civilizations must set aside millennia of blood feuds to race for survival -
          but there are only enough resources to complete a single Ark.
        </p>
      </section>

      {/* Story Teaser */}
      <section className="mb-16 max-w-4xl mx-auto">
        <div className="bg-[#0a0f1e] border border-[#1a2040] rounded-xl p-8">
          <h2 className="text-2xl font-medieval text-white mb-4 tracking-wider text-center">The Crisis</h2>
          <p className="text-gray-300 leading-relaxed text-center italic">
            &quot;Within a century, the life-giving star will completely collapse, swallowing the entire galaxy
            in darkness and flame. Only those aboard the Ark will live to witness a new dawn.&quot;
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="mb-16">
        <h2 className="text-2xl font-medieval text-white mb-8 tracking-wider text-center">At a Glance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-[#0a0f1e] rounded-xl p-6 border border-[#1a2040] text-center">
            <div className="text-3xl mb-3 text-[#6a9aff] font-bold">2-5</div>
            <h3 className="text-white font-bold mb-2">Players</h3>
            <p className="text-gray-400 text-sm">2 to 5 players</p>
          </div>
          <div className="bg-[#0a0f1e] rounded-xl p-6 border border-[#1a2040] text-center">
            <div className="text-3xl mb-3 text-[#6a9aff] font-bold">60-90</div>
            <h3 className="text-white font-bold mb-2">Play Time</h3>
            <p className="text-gray-400 text-sm">60 to 90 minutes</p>
          </div>
          <div className="bg-[#0a0f1e] rounded-xl p-6 border border-[#1a2040] text-center">
            <div className="text-3xl mb-3 text-[#6a9aff] font-bold">10</div>
            <h3 className="text-white font-bold mb-2">Win Condition</h3>
            <p className="text-gray-400 text-sm">First to fill all 10 Ark Slots</p>
          </div>
        </div>
      </section>

      {/* Factions Preview */}
      <section className="mb-16">
        <h2 className="text-2xl font-medieval text-white mb-8 tracking-wider text-center">Five Civilizations</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {[
            { name: 'Turian', color: '#4a9eff', abbr: 'TH' },
            { name: 'Asari', color: '#9b6bff', abbr: 'AG' },
            { name: 'Krogan', color: '#ff6b35', abbr: 'KS' },
            { name: 'Salarian', color: '#35d4a0', abbr: 'ST' },
            { name: 'Human', color: '#ffd700', abbr: 'HA' },
          ].map((f) => (
            <div
              key={f.name}
              className="bg-[#0a0f1e] border border-[#1a2040] rounded-xl px-6 py-4 text-center min-w-[120px]"
              style={{ borderColor: f.color + '44' }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold"
                style={{ backgroundColor: f.color + '22', color: f.color }}
              >
                {f.abbr}
              </div>
              <p className="text-sm font-bold" style={{ color: f.color }}>{f.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trailer */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-medieval text-white mb-8 tracking-wider text-center">Trailer</h2>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl border border-[#1a2040]"
            src="https://www.youtube.com/embed/CCkbA2eXHso"
            title="Ark Ascension Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Resources */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-medieval text-white mb-8 tracking-wider text-center">Key Resources</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { abbr: 'MT', color: '#aaaaaa', name: 'Metal', desc: 'Build your Ark' },
            { abbr: 'FL', color: '#ff9944', name: 'Fuel', desc: 'Power movement' },
            { abbr: 'CX', color: '#44ddff', name: 'Crystals', desc: 'Element Zero' },
          ].map((r) => (
            <div key={r.name} className="bg-[#0a0f1e] border border-[#1a2040] rounded-xl p-5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold"
                style={{ backgroundColor: r.color + '22', color: r.color }}
              >
                {r.abbr}
              </div>
              <p className="text-white font-bold text-sm">{r.name}</p>
              <p className="text-gray-500 text-xs mt-1">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
