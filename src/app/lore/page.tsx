'use client';

import { useState } from 'react';

const factions = [
  {
    id: 'turian',
    name: 'Turian Hierarchy',
    abbr: 'TH',
    color: '#4a9eff',
    passive: 'Tactical Discipline - Movement fuel cost -1 (Min. 1 fuel per move).',
    active: 'Covering Fire - Spend 1 Fuel; gain +2 to your die roll this turn.',
    story: `The Turian Hierarchy has stood for ten thousand years as the galaxy's foremost military power. Regimented, disciplined, and utterly devoted to the concept of service - every Turian citizen serves in some capacity, whether soldier, engineer, or civil administrator.

When the solar scientists confirmed the supernova timeline, the Hierarchy's response was characteristically swift and methodical. Military orbital platforms were repurposed as mining arrays. Trade routes were fortified. Every resource that could be seized was catalogued and allocated to Ark construction within weeks of the announcement.

The Turian Hierarchy Fleet operates with ruthless efficiency on the galactic board. Their passive Tactical Discipline reduces fuel consumption during movement - they have planned every route in advance. When threatened, Covering Fire lets their commanders amplify their dice rolls, turning calculated maneuvers into decisive strikes.

Their Ark slots demand a steady supply of Metal and Fuel - fitting for a civilization that has always built strength on iron discipline. The final slot requires Metal, Fuel, and Crystals: a reminder that even the most martial species needs a spark of the unknown to truly escape.

Some whisper that the Turians would sooner see the other Arks fail than share the stars. They do not deny it.`,
  },
  {
    id: 'asari',
    name: 'Asari Guardians',
    abbr: 'AG',
    color: '#9b6bff',
    passive: 'Biotic Resonance - Draw 2 Action Cards, keep 1, discard the other.',
    active: 'Enthrall - Spend 1 Crystal; force a 1-for-1 resource swap with any opponent.',
    story: `The Asari have lived longer than any other species in the galaxy. They have watched civilizations rise and collapse, and they have always endured. Their mastery of biotics - the ability to manipulate dark energy through neural implants and evolved biology - gives them unparalleled flexibility in both combat and diplomacy.

When the Thessia Science Directorate confirmed the sun's death, the Asari response was not panic but deep, collective mourning. Libraries were archived. Cultural artifacts were encoded into data crystals. Matriarchs convened across the Republics to debate which knowledge was worth saving.

On the galactic board, the Asari are the consummate opportunists. Biotic Resonance lets them sift through twice the action cards that others can access, always finding the more advantageous option. Enthrall is subtler - a forced trade that puts the Asari in control of exactly which resources flow where.

Their Ark is built on Crystals - Element Zero, which the Asari have always understood better than anyone. The final slot requires an equal balance of all three resources: Crystals, Fuel, and Metal. A philosophy in material form: harmony between the ancient forces.

The Asari do not merely want to survive. They want to carry the memory of the entire galaxy forward with them.`,
  },
  {
    id: 'krogan',
    name: 'Krogan Sons of Tuchanka',
    abbr: 'KS',
    color: '#ff6b35',
    passive: 'Blood Rage - Once per turn, spend 1 Fuel to negate a Sabotage Card played against you.',
    active: 'Hardcore Charge - Spend 2 Fuel; teleport immediately to any unoccupied space.',
    story: `The Krogan were nearly extinct before the galaxy needed them. The genophage - a biological weapon deployed by the Salarians and administered by the Turians - had cut Krogan birth rates to a fraction of what they once were. For generations, the Sons of Tuchanka lived under that shadow, a people bred for war with nowhere left to fight.

The news of the supernova, perversely, gave the Krogan purpose again.

Every remaining Krogan rallied under the warchief. The rusted, irradiated surface of Tuchanka was stripped of every last vein of ore. Krogan forge-clans who had not spoken in decades traded welding knowledge over open fires. They had survived the genophage. They would survive the end of the stars.

On the galactic board, the Krogan are a force of nature. Blood Rage lets them absorb Sabotage attempts at a fuel cost - because Krogans do not get stopped, they get angrier. Hardcore Charge is their signature move: spend two fuel and teleport anywhere, bypassing all the careful routing their opponents rely on.

Their Ark is expensive - slots demand massive Metal and Fuel investments, and the final slot costs three of each primary resource. But what they build is the most resilient vessel in the fleet.

You can try to stop a Krogan. You will not succeed twice.`,
  },
  {
    id: 'salarian',
    name: 'Salarian STG',
    abbr: 'ST',
    color: '#35d4a0',
    passive: 'Research Acceleration - Gain 1 Crystal automatically at the start of your turn.',
    active: 'Intel Analysis - Spend 1 Crystal; look at the top 3 Sabotage Deck cards. Reorder or draw 1.',
    story: `The Salarian Union built its civilization on information asymmetry. Every Salarian soldier is also a spy. Every diplomat is also an analyst. The STG - Special Tasks Group - operates in the shadows of every major galactic event, pulling strings that most species never even see.

When the supernova clock began ticking, the Salarians had already war-gamed seventeen different scenarios. They had contingency plans for the contingency plans. By the time other species were holding emergency council sessions, Salarian covert teams were already mapping uncharted asteroid fields and cataloguing Crystal deposits on moons no one had bothered to name.

On the galactic board, the Salarians are the information economy made flesh. Research Acceleration generates a free Crystal each turn - compounding interest, paid out in raw Element Zero. Intel Analysis turns their Crystal investment into deck control, letting them sculpt the Sabotage landscape to their advantage.

Their Ark track is Crystal-heavy and relentlessly efficient. Unlike the brute-force approaches of the Krogan or the steady iron march of the Turians, the Salarians build fast and build smart. They will be the first to understand how to exploit every tile on the board.

They will not tell you what they know. But they already know what you are going to do next.`,
  },
  {
    id: 'human',
    name: 'Human Alliance',
    abbr: 'HA',
    color: '#ffd700',
    passive: 'Indomitable - During Solar Sacrifice, any penalty you personally receive is halved (rounded up).',
    active: 'Alliance Will - Spend 1 resource of any type; your trades this turn cannot be sabotaged.',
    story: `Humanity is the youngest major species in the galaxy, which means they are also the most desperate to prove themselves. They stumbled into first contact still arguing about borders and economies. They reached the galactic stage still bruised from internal conflicts. Every other species had centuries of interstellar experience before humans made their first hyperspace jump.

And yet.

When the supernova was announced, the Systems Alliance did not fracture. It argued - loudly, chaotically, sometimes violently - but it did not fracture. That argumentative, persistent, adaptable nature is exactly what makes them dangerous.

The Systems Alliance was founded to give humanity a unified voice - and when the supernova announcement came, that voice was loud, fractious, and ultimately effective. Human engineers reverse-engineered Turian shield technology in eighteen months. Human diplomats brokered three resource-sharing agreements that other species had spent decades failing to negotiate. Human volunteers crewed survey missions to asteroid fields no one else would touch.

On the galactic board, Humans are the great adapters. Their starting bonus is a free resource of choice - flexibility from the start. Indomitable halves Solar Sacrifice penalties, meaning they absorb the collective punishment of failure better than anyone. Alliance Will shields their trades from sabotage, turning the open market into a guaranteed safe zone.

Their Ark construction is the most balanced of all five civilizations - alternating resource types across ten slots, never demanding too much of any one thing. They bring nothing to the galaxy except the willingness to try, and somehow that has always been enough.

In the dark between stars, the light of stubbornness burns longer than any supernova.`,
  },
];

export default function LorePage() {
  const [activeTab, setActiveTab] = useState('turian');
  const activeFaction = factions.find((f) => f.id === activeTab);

  return (
    <div className="min-h-screen p-8 md:p-12">
      <h1 className="text-5xl md:text-6xl font-medieval text-white mb-4 text-center tracking-wider">
        Lore
      </h1>
      <p className="text-gray-500 text-center italic mb-10">~ The Five Civilizations ~</p>

      <div className="flex flex-wrap justify-center gap-3 mb-12" id="factions">
        {factions.map((faction) => (
          <button
            id={faction.id}
            key={faction.id}
            onClick={() => setActiveTab(faction.id)}
            className="px-5 py-2 rounded-lg font-semibold text-sm transition-all border"
            style={{
              borderColor: activeTab === faction.id ? faction.color : 'transparent',
              backgroundColor: activeTab === faction.id ? faction.color + '20' : '#0a0e1a',
              color: activeTab === faction.id ? faction.color : '#9ca3af',
            }}
          >
            {faction.name}
          </button>
        ))}
      </div>

      {activeFaction && (
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl border overflow-hidden mb-10"
            style={{ borderColor: activeFaction.color + '40' }}
          >
            <div
              className="px-8 py-6 flex items-center gap-5 border-b"
              style={{
                borderColor: activeFaction.color + '40',
                backgroundColor: activeFaction.color + '15',
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-medieval text-lg font-bold flex-shrink-0"
                style={{ backgroundColor: activeFaction.color + '30', color: activeFaction.color, border: `2px solid ${activeFaction.color}60` }}
              >
                {activeFaction.abbr}
              </div>
              <div>
                <h2
                  className="text-2xl font-medieval tracking-wider"
                  style={{ color: activeFaction.color }}
                >
                  {activeFaction.name}
                </h2>
              </div>
            </div>

            <div className="p-8 grid md:grid-cols-2 gap-4 border-b" style={{ borderColor: activeFaction.color + '20' }}>
              <div
                className="bg-[#0a0f1e] rounded-xl p-5 border"
                style={{ borderColor: activeFaction.color + '40' }}
              >
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Passive</p>
                <p className="text-gray-200 text-sm leading-relaxed">{activeFaction.passive}</p>
              </div>
              <div
                className="bg-[#0a0f1e] rounded-xl p-5 border"
                style={{ borderColor: activeFaction.color + '40' }}
              >
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Active Ability</p>
                <p className="text-gray-200 text-sm leading-relaxed">{activeFaction.active}</p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {activeFaction.story.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-6 py-2 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-white transition-all"
            >
              Back to Top
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
