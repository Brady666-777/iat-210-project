'use client';

import { useState } from 'react';
import { FileText, Play } from 'lucide-react';

const tabs = [
  { id: 'minutes', name: 'Meeting Minutes', icon: FileText },
  { id: 'playtests', name: 'Play Tests', icon: Play },
];

const playtestRounds = [
  {
    round: 1,
    startingPlayer: 'Turian (T)',
    sacrifice: { roll: '5+3 = 8', result: 'Paid 10 total -- success, no penalty.' },
    summary: 'T moves to Omega Station (Black Market), draws S07: Fuel Siphon, plays it -- each opponent loses 1 Fuel (T gains equivalent). T builds Slot 1 for 2 Metal.',
    states: [
      { player: 'T', metal: 2, fuel: 5, crystal: 2, ark: 1 },
      { player: 'A', metal: 3, fuel: 2, crystal: 3, ark: 0 },
      { player: 'K', metal: 4, fuel: 2, crystal: 2, ark: 0 },
      { player: 'H', metal: 4, fuel: 2, crystal: 3, ark: 0 },
    ],
  },
  {
    round: 2,
    startingPlayer: 'Asari (A)',
    sacrifice: { roll: '2+2 = 4', result: 'Paid 6 total -- success, no penalty.' },
    summary: 'A moves to Virmire (Danger Zone), draws A11: Pirate Attack, loses 1 Fuel. Uses Enthrall on T for resource swap (A gives 1 Metal, T gives 1 Fuel). A builds Slot 1 for 2 Crystal.',
    states: [
      { player: 'T', metal: 0, fuel: 4, crystal: 2, ark: 1 },
      { player: 'A', metal: 2, fuel: 1, crystal: 0, ark: 1 },
      { player: 'K', metal: 4, fuel: 2, crystal: 2, ark: 0 },
      { player: 'H', metal: 4, fuel: 2, crystal: 3, ark: 0 },
    ],
  },
  {
    round: 3,
    startingPlayer: 'Krogan (K)',
    sacrifice: { roll: '6+1 = 7', result: 'Paid 9 total -- success, no penalty.' },
    summary: 'K moves to Rachni Nest (Danger), reveals hand, A discards Resource Blockade. K uses Hardcore Charge (2 Fuel) to teleport to Salarian Lab (Tile 18, 2x Fuel bonus), rolls 4, gains 8 Fuel. K builds Slot 1 for 3 Metal.',
    states: [
      { player: 'T', metal: 0, fuel: 2, crystal: 2, ark: 1 },
      { player: 'A', metal: 1, fuel: 0, crystal: 0, ark: 1 },
      { player: 'K', metal: 1, fuel: 9, crystal: 2, ark: 1 },
      { player: 'H', metal: 3, fuel: 1, crystal: 2, ark: 0 },
    ],
  },
  {
    round: 4,
    startingPlayer: 'Human (H)',
    sacrifice: { roll: '4+3 = 7', result: 'Paid 10 total -- success, no penalty.' },
    summary: "H moves to Mass Relay (Tile 2), warps to Relay 10 (1 Fuel). Uses Alliance Will, trades 2 Crystal for T's 2 Metal (transparent). H builds Slot 1 for 2 Metal.",
    states: [
      { player: 'T', metal: 2, fuel: 1, crystal: 1, ark: 1 },
      { player: 'A', metal: 1, fuel: 0, crystal: 0, ark: 1 },
      { player: 'K', metal: 1, fuel: 6, crystal: 2, ark: 1 },
      { player: 'H', metal: 0, fuel: 1, crystal: 1, ark: 1 },
    ],
  },
  {
    round: 5,
    startingPlayer: 'Turian (T)',
    sacrifice: { roll: '5+5 = 10', result: 'Paid 14 total -- success, no penalty.' },
    summary: 'T moves 6 spaces, passes Citadel (repairs, discards 1 Sabotage Card), lands on Derelict Ship (Fuel), rolls 3, gains 3 Fuel. Plays S04: Hacking on K -- K discards 1 Sabotage Card. T builds Slot 2 for 2 Metal + 1 Fuel.',
    states: [
      { player: 'T', metal: 0, fuel: 6, crystal: 2, ark: 2 },
      { player: 'A', metal: 1, fuel: 0, crystal: 0, ark: 1 },
      { player: 'K', metal: 1, fuel: 6, crystal: 2, ark: 1 },
      { player: 'H', metal: 0, fuel: 1, crystal: 1, ark: 1 },
    ],
  },
];

export default function LogsPage() {
  const [activeTab, setActiveTab] = useState('minutes');

  return (
    <div className="min-h-screen p-8 md:p-12">
      <h1 className="text-5xl md:text-6xl font-medieval text-white mb-10 text-center tracking-wider">
        Logs
      </h1>

      <div className="flex justify-center gap-4 mb-10">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all ${
                activeTab === tab.id
                  ? 'bg-[#0a0e1a] text-white border border-[#6a9aff]/50'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={18} />
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto">
        {activeTab === 'minutes' && (
          <div className="space-y-6">
            <div className="bg-[#0a0e1a] rounded-xl border border-[#1a2040] overflow-hidden">
              <div className="bg-[#6a9aff]/10 px-6 py-4 border-b border-[#1a2040]">
                <h2 className="text-xl font-bold text-white">Meeting #1 -- Concept Brainstorm</h2>
                <p className="text-gray-500 text-sm mt-1">Duration: 45 minutes | IAT 201 Group Project</p>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-[#6a9aff] font-bold mb-3">Agenda</h3>
                  <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
                    <li>What game mechanic do we want to use?</li>
                    <li>What resources do we have access to?</li>
                    <li>What is the turn structure?</li>
                    <li>Board movements and layout options</li>
                    <li>What is the main goal / core gameplay loop?</li>
                    <li>Target audience</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#6a9aff] font-bold mb-3">Brainstorm Notes</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    {['Resource Management', 'Strategic Thinking', 'Low RNG', 'Survival Theme', 'Time Management', 'Max Rounds'].map((item) => (
                      <div key={item} className="bg-[#05070f] border border-[#1a2040] rounded-lg p-3 text-gray-400 text-center">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[#6a9aff] font-bold mb-3">Themes Considered</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Science Fiction', 'Space', 'Planets', 'Spaceship', 'Planet Obstacles', 'Spaceship Obstacles'].map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs bg-[#6a9aff]/10 border border-[#6a9aff]/30 text-[#6a9aff]">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[#6a9aff] font-bold mb-3">Win Condition Options</h3>
                  <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
                    <li>First player to reach final Planet</li>
                    <li>Own the most planets at the end of a timer</li>
                    <li>Own a specific amount of planets</li>
                    <li>Control a particular planet/solar system for consecutive rounds</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#6a9aff] font-bold mb-3">Inspirations</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Monopoly', 'Risk', 'Smash Up', 'King of Tokyo', 'Snakes and Ladders'].map((g) => (
                      <span key={g} className="px-3 py-1 rounded-full text-xs bg-[#1a2040] border border-[#2a3060] text-gray-300">{g}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0e1a] rounded-xl border border-[#1a2040] overflow-hidden">
              <div className="bg-[#6a9aff]/10 px-6 py-4 border-b border-[#1a2040]">
                <h2 className="text-xl font-bold text-white">Meeting #2 -- Deliverables Assignment</h2>
                <p className="text-gray-500 text-sm mt-1">IAT 201 -- Ark Ascension | Game Design Finalization</p>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-[#6a9aff] font-bold mb-3">Team Assignments</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Nima', tasks: ['Flowcharts', 'Quantitative Analysis'] },
                      { name: 'Evan', tasks: ['Playtesting Log', 'Game Description'] },
                      { name: 'Brady Wu', tasks: ['Playtesting Log', 'Thematic Backstory / Narrative', 'Game Description'] },
                      { name: 'Amirkia', tasks: ['Rulebook', 'Visual Gallery', 'Trailer'] },
                    ].map(({ name, tasks }) => (
                      <div key={name} className="flex items-start gap-4 p-4 border border-[#1a2040] rounded-lg">
                        <span className="text-white font-bold w-24 flex-shrink-0">{name}</span>
                        <div className="flex flex-wrap gap-2">
                          {tasks.map((task) => (
                            <span key={task} className="px-2 py-0.5 rounded text-xs bg-[#6a9aff]/10 border border-[#6a9aff]/30 text-[#6a9aff]">{task}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[#6a9aff] font-bold mb-3">Rules Finalized</h3>
                  <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
                    <li>5 unique player factions with unique passive and active abilities</li>
                    <li>Resource management: Metal, Fuel, Crystals</li>
                    <li>Luck factor: Action Cards and Sabotage Cards drawn from decks</li>
                    <li>Solar Sacrifice mechanic -- collective contribution each turn</li>
                    <li>Win condition: First player to fill 10 Ark Slots on their Race Board</li>
                    <li>Scenario: Sun is dying -- players compete to build and fill their Ark before the supernova</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'playtests' && (
          <div className="space-y-6">
            <div className="bg-[#0a0e1a] border border-[#1a2040] rounded-xl p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Playtest Simulation Log</h2>
              <p className="text-gray-400 text-sm">4-player game -- Races: Turian (T), Asari (A), Krogan (K), Human (H) -- 2 Sabotage Cards each at start</p>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                {[
                  { p: 'T (Turian)', r: '4M 4F 2C', color: '#4a9eff' },
                  { p: 'A (Asari)', r: '3M 3F 3C', color: '#9b6bff' },
                  { p: 'K (Krogan)', r: '4M 3F 2C', color: '#ff6b35' },
                  { p: 'H (Human)', r: '4M 3F 3C', color: '#ffd700' },
                ].map(({ p, r, color }) => (
                  <div key={p} className="p-3 bg-[#05070f] border rounded-lg" style={{ borderColor: color + '40' }}>
                    <p className="font-bold text-sm mb-1" style={{ color }}>{p}</p>
                    <p className="text-gray-400 text-xs">{r}</p>
                  </div>
                ))}
              </div>
            </div>

            {playtestRounds.map(({ round, startingPlayer, sacrifice, summary, states }) => (
              <div key={round} className="bg-[#0a0e1a] border border-[#1a2040] rounded-xl overflow-hidden">
                <div className="bg-[#0f1525] px-6 py-4 border-b border-[#1a2040] flex items-center justify-between">
                  <h3 className="text-white font-bold">Round {round}</h3>
                  <span className="text-gray-500 text-sm">Starting Player: {startingPlayer}</span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-yellow-400/5 border border-yellow-400/20 rounded-lg">
                    <div className="text-sm">
                      <span className="text-yellow-400 font-semibold">Solar Sacrifice: </span>
                      <span className="text-gray-300">{sacrifice.roll} -- {sacrifice.result}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{summary}</p>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">End-of-Round State</p>
                    <div className="grid grid-cols-4 gap-2">
                      {states.map(({ player, metal, fuel, crystal, ark }) => {
                        const colors: Record<string, string> = { T: '#4a9eff', A: '#9b6bff', K: '#ff6b35', H: '#ffd700' };
                        return (
                          <div key={player} className="p-3 bg-[#05070f] border border-[#1a2040] rounded-lg text-xs">
                            <p className="font-bold mb-1" style={{ color: colors[player] }}>{player}</p>
                            <p className="text-gray-400">{metal}M {fuel}F {crystal}C</p>
                            <p className="text-gray-400">Ark: {ark}/10</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-[#0a0e1a] border border-[#6a9aff]/30 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4">Test Conclusions and Balance Feedback</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <p><span className="text-white font-semibold">Krogans</span> act as risk investors. High slot costs are offset by explosive mining and teleportation -- a major late-game threat.</p>
                <p><span className="text-white font-semibold">Turians</span> have a smooth early-game advantage: efficient movement lets them capture resource tiles quickly.</p>
                <p><span className="text-white font-semibold">Solar Sacrifice psychology:</span> When Sacrifice Value exceeds 8, a free-rider problem emerges -- players bluff to force others to over-contribute.</p>
                <p><span className="text-white font-semibold">Human passive</span> provides excellent resilience during sacrifice failures, keeping them competitive through resource droughts.</p>
                <p><span className="text-white font-semibold">Spatial strategy:</span> Landing on occupied tiles costs a toll, so players carefully time their movement to avoid opponents.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
