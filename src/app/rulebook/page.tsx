'use client';

import { ChevronUp } from 'lucide-react';

const factions = [
  {
    name: 'Turian: The Hierarchy Fleet',
    color: '#4a9eff',
    passive: 'Tactical Discipline — Movement fuel cost −1 (Min. 1 fuel per move action).',
    active: 'Covering Fire — Spend 1 Fuel; gain +2 to your die roll this turn (movement or mining).',
    slots: [
      'Slots 1–3: 2 Metal',
      'Slots 4–5: 2 Metal + 1 Fuel',
      'Slots 6–7: 2 Fuel',
      'Slots 8–9: 3 Metal',
      'Slot 10: 1 Metal + 2 Fuel + 3 Crystals',
    ],
  },
  {
    name: 'Asari: Guardians of Thessia',
    color: '#9b6bff',
    passive: 'Biotic Resonance — When drawing an Action Card, draw 2 and keep 1; discard the other.',
    active: 'Enthrall — Spend 1 Crystal; target an opponent to force a 1-for-1 resource swap.',
    slots: [
      'Slots 1–3: 2 Crystals',
      'Slots 4–5: 2 Crystals + 1 Metal',
      'Slots 6–7: 2 Metal',
      'Slots 8–9: 3 Crystals',
      'Slot 10: 2 Crystals + 2 Fuel + 2 Metal',
    ],
  },
  {
    name: 'Krogan: Sons of Tuchanka',
    color: '#ff6b35',
    passive: 'Blood Rage — Once per turn, spend 1 Fuel to negate a Sabotage Card played against you.',
    active: 'Hardcore Charge — Spend 2 Fuel; move immediately to any unoccupied space on the board.',
    slots: [
      'Slots 1–4: 3 Metal',
      'Slots 5–6: 2 Metal + 2 Fuel',
      'Slots 7–8: 4 Metal',
      'Slot 9: 3 Fuel',
      'Slot 10: 3 Metal + 3 Fuel + 3 Crystals',
    ],
  },
  {
    name: 'Salarian: STG Tech',
    color: '#35d4a0',
    passive: 'Research Acceleration — Gain 1 Crystal automatically at the start of your turn.',
    active: 'Intel Analysis — Spend 1 Crystal; look at the top 3 cards of the Sabotage Deck. Reorder or draw 1.',
    slots: [
      'Slots 1–3: 2 Crystals',
      'Slots 4–5: 1 Crystal + 2 Metal',
      'Slots 6–7: 2 Fuel',
      'Slots 8–9: 3 Crystals',
      'Slot 10: 4 Crystals + 2 Metal + 2 Fuel',
    ],
  },
  {
    name: 'Human: Alliance Ark Program',
    color: '#ffd700',
    passive: 'Indomitable — During Solar Sacrifice, if the goal is failed, any penalty you personally receive is halved (rounded up).',
    active: 'Alliance Will — Spend 1 resource of any type; your trades this turn cannot be sabotaged.',
    slots: [
      'Slots 1–6: Alternating 2 Metal, 2 Fuel, or 2 Crystals',
      'Slots 7–9: Mixed resource pairs',
      'Slot 10: 2 Metal + 2 Fuel + 2 Crystals',
    ],
  },
];

const boardTiles = [
  { tile: '0', name: 'Citadel', type: 'Start / Safe', effect: 'No effect on stop; pass through to repair (discard 1 Sabotage card).', color: '#6a9aff' },
  { tile: '1, 11, 16', name: 'Asteroid / Colony / Fortress', type: 'Metal Mine', effect: 'Roll die to mine Metal (Tile 16 gives 2× bonus).', color: '#9ca3af' },
  { tile: '2, 10', name: 'Mass Relay', type: 'Special', effect: 'Spend 1 Fuel to warp to any other Mass Relay tile.', color: '#6a9aff' },
  { tile: '3, 9, 14', name: 'Illium / Ruins / Temple', type: 'Crystal Mine', effect: 'Roll die to mine Crystals (Tile 14 gives 2× bonus).', color: '#9b6bff' },
  { tile: '4', name: 'Omega Station', type: 'Black Market', effect: 'Draw 1 Sabotage card for free or buy 1 for 1 Crystal.', color: '#ff6b35' },
  { tile: '5, 7, 12, 17', name: 'Hazard Zones', type: 'Danger', effect: 'Draw 1 Action Card immediately.', color: '#ef4444' },
  { tile: '6, 18', name: 'Wreck / Lab', type: 'Fuel Depot', effect: 'Roll die to collect Fuel (Tile 18 gives 2× bonus).', color: '#35d4a0' },
  { tile: '8', name: 'Citadel Council', type: 'Trading', effect: 'Force a trade with any player; both roll, winner sets terms.', color: '#ffd700' },
  { tile: '15', name: 'Solar Observatory', type: 'Special', effect: 'Peek at the top Solar Penalty card; choose whether to trigger it now.', color: '#fbbf24' },
  { tile: '19', name: 'Ark Drydock', type: 'Finish / Safe', effect: 'Stop here to build 1 Ark Slot for free (Limit: once per game).', color: '#4a9eff' },
];

const phases = [
  { step: '0', title: 'Start of Turn', desc: 'Salarians gain 1 Crystal automatically.' },
  { step: '1', title: 'Solar Sacrifice', desc: 'Active player rolls 2 dice for the "Sacrifice Value." All players contribute resources to the pool. If total < Value, trigger a Solar Penalty and advance the failure track. 3 failures = Game Over for everyone.' },
  { step: '2', title: 'Movement', desc: 'Spend 1 Fuel. Roll 1 die. Move clockwise. If landing on a space with another player, pay them 1 resource or draw an Action card.' },
  { step: '3', title: 'Tile Resolution', desc: 'Execute the effect of the space landed upon (Mining, Danger Zone, Special, Black Market, etc.).' },
  { step: '4', title: 'Action Phase', desc: 'Choose up to one of each: Use 1 Race Ability · Play 1 Sabotage Card · Trade with others · Build Ark (pay resources to fill slots in order).' },
  { step: '5', title: 'End of Turn', desc: 'Check hand limit (7 cards max) and pass play to the left.' },
];

export default function RulebookPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen p-8 md:p-12">
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 px-4 py-2 border border-[#1a2040] rounded-full text-gray-400 hover:text-white hover:border-[#6a9aff] transition-all flex items-center gap-2 bg-[#05070f]/80 backdrop-blur z-50"
      >
        <ChevronUp size={18} />
        Back to Top
      </button>

      <section className="text-center mb-16" id="top">
        <h1 className="text-4xl md:text-5xl font-medieval text-white mb-4 tracking-wider">
          Ark Ascension
        </h1>
        <p className="text-[#6a9aff] italic text-lg">~ THE OFFICIAL RULEBOOK ~</p>
      </section>

      {/* Table of Contents */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-medieval text-white mb-8 text-center tracking-wider">
          Table of Contents
        </h2>
        <div className="bg-[#0a0e1a] border border-[#1a2040] rounded-xl p-6">
          <ol className="list-decimal list-inside space-y-2 text-gray-400 pl-4">
            <li><a href="#setup" className="hover:text-[#6a9aff] transition-colors">Game Setup</a></li>
            <li><a href="#raceboards" className="hover:text-[#6a9aff] transition-colors">Race Board Details</a></li>
            <li><a href="#boarddesign" className="hover:text-[#6a9aff] transition-colors">Galactic Central Board</a></li>
            <li><a href="#turns" className="hover:text-[#6a9aff] transition-colors">Turn Sequence</a></li>
            <li><a href="#winning" className="hover:text-[#6a9aff] transition-colors">Winning Condition</a></li>
          </ol>
        </div>
      </section>

      {/* I. Game Setup */}
      <section className="max-w-4xl mx-auto mb-16" id="setup">
        <h2 className="text-3xl font-medieval text-white mb-8 tracking-wider border-b border-[#1a2040] pb-4">
          I. Game Setup
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[#6a9aff] mb-4">Board Setup</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-400 pl-4">
              <li>Place the <span className="text-white font-semibold">Galactic Central Board</span> in the center of the table.</li>
              <li>Place the <span className="text-white font-semibold">Resource Pools</span> (Metal, Fuel, Crystal) beside the board.</li>
              <li>Shuffle the three card decks and place them face-down:
                <ul className="list-disc list-inside pl-6 mt-2 space-y-1">
                  <li><span className="text-white">Action Deck</span> — Place in the "Event Zone"</li>
                  <li><span className="text-white">Sabotage Deck</span> — Place in the "Black Market Zone"</li>
                  <li><span className="text-white">Solar Penalty Deck</span> — Place in the "Solar Zone"</li>
                </ul>
              </li>
              <li>Set the <span className="text-white font-semibold">Solar Sacrifice Marker</span> to "0" on the Cumulative Failure Track.</li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#6a9aff] mb-4">Player Setup</h3>
            <p className="text-gray-400 mb-4">
              Each player chooses a <span className="text-white font-semibold">Race Board</span> and their Ship Miniature.
              All players receive <span className="text-white">3 Metal, 3 Fuel, 2 Crystals</span> plus racial bonuses:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#1a2040]">
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Race</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  {factions.map((f) => (
                    <tr key={f.name} className="border-b border-[#1a2040]/50 hover:bg-[#0a0e1a]">
                      <td className="py-3 px-4 font-semibold" style={{ color: f.color }}>{f.name.split(':')[0]}</td>
                      <td className="py-3 px-4 text-gray-400">{f.slots[0].includes('Metal') ? '+1 Metal' : f.slots[0].includes('Crystal') ? '+1 Crystal' : '+1 Fuel'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-400 pl-4 mt-6">
              <li>Each player draws <span className="text-white">2 Sabotage Cards</span> as their starting hand.</li>
              <li>All ships start at <span className="text-white font-semibold">The Citadel</span> (Tile 0).</li>
              <li>Determine starting player by highest die roll.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* II. Race Boards */}
      <section className="max-w-4xl mx-auto mb-16" id="raceboards">
        <h2 className="text-3xl font-medieval text-white mb-8 tracking-wider border-b border-[#1a2040] pb-4">
          II. Race Board Details
        </h2>
        <p className="text-gray-400 mb-8">
          Each Race Board includes the faction name, Passive Ability, Active Ability (with cost), and the Ark Construction Track (10 slots).
        </p>
        <div className="space-y-6">
          {factions.map((faction) => (
            <div
              key={faction.name}
              className="bg-[#0a0e1a] border rounded-xl overflow-hidden"
              style={{ borderColor: faction.color + '40' }}
            >
              <div
                className="px-6 py-4 border-b"
                style={{ borderColor: faction.color + '40', backgroundColor: faction.color + '18' }}
              >
                <h3 className="text-xl font-bold text-white">{faction.name}</h3>
              </div>
              <div className="p-6 grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-3 bg-[#05070f] rounded-lg border border-[#1a2040]">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Passive</p>
                    <p className="text-gray-300 text-sm">{faction.passive}</p>
                  </div>
                  <div className="p-3 bg-[#05070f] rounded-lg border border-[#1a2040]">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Active</p>
                    <p className="text-gray-300 text-sm">{faction.active}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Ark Construction Track</p>
                  <ul className="space-y-1">
                    {faction.slots.map((slot) => (
                      <li key={slot} className="text-gray-400 text-sm flex items-start gap-2">
                        <span style={{ color: faction.color }}>▸</span>
                        <span>{slot}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* III. Board Design */}
      <section className="max-w-4xl mx-auto mb-16" id="boarddesign">
        <h2 className="text-3xl font-medieval text-white mb-8 tracking-wider border-b border-[#1a2040] pb-4">
          III. Galactic Central Board
        </h2>
        <p className="text-gray-400 mb-6">
          The board consists of <span className="text-white font-semibold">20 tiles</span> arranged in a circular loop.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#1a2040]">
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Tile #</th>
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Name</th>
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Type</th>
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Effect</th>
              </tr>
            </thead>
            <tbody>
              {boardTiles.map((row) => (
                <tr key={row.tile} className="border-b border-[#1a2040]/50 hover:bg-[#0a0e1a]">
                  <td className="py-2 px-4 font-mono text-xs" style={{ color: row.color }}>{row.tile}</td>
                  <td className="py-2 px-4 text-white font-semibold text-sm">{row.name}</td>
                  <td className="py-2 px-4 text-gray-500 text-xs">{row.type}</td>
                  <td className="py-2 px-4 text-gray-400 text-sm">{row.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* IV. Turn Sequence */}
      <section className="max-w-4xl mx-auto mb-16" id="turns">
        <h2 className="text-3xl font-medieval text-white mb-8 tracking-wider border-b border-[#1a2040] pb-4">
          IV. Turn Sequence
        </h2>
        <div className="space-y-4">
          {phases.map(({ step, title, desc }) => (
            <div key={step} className="flex gap-4 bg-[#0a0e1a] border border-[#1a2040] rounded-xl p-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6a9aff]/20 border border-[#6a9aff]/50 flex items-center justify-center">
                <span className="text-[#6a9aff] font-bold">{step}</span>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* V. Winning Condition */}
      <section className="max-w-4xl mx-auto mb-16" id="winning">
        <h2 className="text-3xl font-medieval text-white mb-8 tracking-wider border-b border-[#1a2040] pb-4">
          V. Winning Condition
        </h2>
        <div className="bg-[#0a0e1a] border border-[#6a9aff]/40 rounded-xl p-8 text-center">
          <p className="text-2xl text-white font-bold mb-4">Fill All 10 Ark Slots</p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The first player to fill all 10 Ark Slots on their Race Board wins the game and saves their species from the supernova.
          </p>
          <div className="mt-6 flex justify-center gap-8 text-sm text-gray-500">
            <div><span className="text-white font-semibold">2–5</span> players</div>
            <div><span className="text-white font-semibold">60–90 min</span> play time</div>
            <div><span className="text-white font-semibold">3 failures</span> = collective loss</div>
          </div>
        </div>
      </section>
    </div>
  );
}
