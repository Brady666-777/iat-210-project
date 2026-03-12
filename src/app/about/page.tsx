export default function AboutPage() {
  return (
    <div className="min-h-screen p-8 md:p-12">
      {/* Title */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-medieval text-white mb-6 tracking-wider">
          About
        </h1>
        <p className="text-gray-500 italic">~ Ark Ascension — IAT 201 Board Game Project ~</p>
      </section>

      {/* Description */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-medieval text-white mb-6 text-center tracking-wider">The Game</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          <strong className="text-white">Ark Ascension</strong> is a strategic resource-management board game for 2–5 players.
          Set in a Mass Effect-inspired universe, players each control one of five civilizations racing to complete
          their Ark before the dying sun destroys everything. The game blends cooperative tension — through a shared
          Solar Sacrifice mechanic — with competitive strategy as players mine resources, sabotage rivals, and navigate
          a 20-tile galactic board. Inspired by Monopoly, Risk, Smash Up, King of Tokyo, and Snakes &amp; Ladders,
          Ark Ascension rewards both tactical planning and opportunistic play.
        </p>
      </section>

      {/* Pillars */}
      <section className="mb-16">
        <h2 className="text-3xl font-medieval text-white mb-10 text-center tracking-wider">Game Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-[#0a0f1e] rounded-xl p-8 border border-[#1a2040]">
            <h3 className="text-xl font-bold text-[#4a9eff] mb-4">What?</h3>
            <p className="text-gray-400 leading-relaxed">
              Gather Metal, Fuel, and Crystals to fill all 10 slots on your Ark before the supernova claims everyone.
            </p>
          </div>
          <div className="bg-[#0a0f1e] rounded-xl p-8 border border-[#1a2040]">
            <h3 className="text-xl font-bold text-[#9b6bff] mb-4">Why?</h3>
            <p className="text-gray-400 leading-relaxed">
              The sun is dying. Every civilization competes to be the one species that escapes the apocalypse alive.
            </p>
          </div>
          <div className="bg-[#0a0f1e] rounded-xl p-8 border border-[#1a2040]">
            <h3 className="text-xl font-bold text-[#35d4a0] mb-4">How?</h3>
            <p className="text-gray-400 leading-relaxed">
              Move across the galactic board, mine resource tiles, trade with opponents, and play Sabotage cards
              to slow rivals while feeding the sun to delay doomsday.
            </p>
          </div>
        </div>
      </section>

      {/* Inspirations */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-medieval text-white mb-8 text-center tracking-wider">Inspirations</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {['Monopoly', 'Risk', 'Smash Up', 'King of Tokyo', 'Snakes and Ladders'].map((game) => (
            <span
              key={game}
              className="px-5 py-2 bg-[#0a0f1e] border border-[#1a2040] rounded-full text-gray-300 text-sm"
            >
              {game}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
