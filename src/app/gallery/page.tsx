'use client';

import { useState } from 'react';
import Image from 'next/image';

import citadelMeetingCard from '@/asset/Cards/citadelmeeting.png';
import empCard from '@/asset/Cards/emp.png';
import engineFailureCard from '@/asset/Cards/enginefailure.png';
import finalCountdownCard from '@/asset/Cards/finalcountdown.png';
import hackCard from '@/asset/Cards/hack.png';
import normandySupportCard from '@/asset/Cards/normandysupport.png';
import phantomDirectiveCard from '@/asset/Cards/phantomdirective.png';
import reaperScoutCard from '@/asset/Cards/reaperscout.png';
import resourceAbundanceCard from '@/asset/Cards/resourceabundance.png';
import sabotageProtocolCard from '@/asset/Cards/sabotageprotocol.png';
import solarFlareCard from '@/asset/Cards/solarflare.png';
import timeWarpCard from '@/asset/Cards/timewarp.png';
import turianShipMiniature from "@/asset/items/Turian Hierarchy-Hierarchy Fleet Ship (Ship Miniature).png";
import turianAbilityToken from "@/asset/items/Turian Hierarchy-Tactical Discipline Token (Ability Token).png";
import turianRaceCard from "@/asset/items/Turian Hierarchy-Covering Fire Card (Race Card).png";
import turianRaceBoard from "@/asset/items/Turian Hierarchy-Turian Race Board (Race Board).png";
import asariShipMiniature from "@/asset/items/Asari Guardians-Thessia Ark Design (Ship Miniature).png";
import asariAbilityToken from "@/asset/items/Asari Guardians-Biotic Resonance Token (Ability Token).png";
import asariRaceCard from "@/asset/items/Asari Guardians-Enthrall Card (Race Card).png";
import asariRaceBoard from "@/asset/items/Asari Guardians-Asari Race Board (Race Board).png";
import kroganShipMiniature from "@/asset/items/Krogan Sons of Tuchanka-Tuchanka War Ark (Ship Miniature).png";
import kroganAbilityToken from "@/asset/items/Krogan Sons of Tuchanka-Blood Rage Token (Ability Token).png";
import kroganRaceCard from "@/asset/items/Krogan Sons of Tuchanka-Hardcore Charge Card (Race Card).png";
import kroganRaceBoard from "@/asset/items/Krogan Sons of Tuchanka-Krogan Race Board (Race Board).png";
import salarianShipMiniature from "@/asset/items/Salarian STG-Sur'Kesh Ark Module (Ship Miniature).png";
import salarianAbilityToken from "@/asset/items/Salarian STG-Research Acceleration Token (Ability Token).png";
import salarianRaceCard from "@/asset/items/Salarian STG-Intel Analysis Card (Race Card).png";
import salarianRaceBoard from "@/asset/items/Salarian STG-Salarian Race Board (Race Board).png";
import humanShipMiniature from "@/asset/items/Human Alliance-SSV Alliance Ark (Ship Miniature).png";
import humanAbilityToken from "@/asset/items/Human Alliance-Indomitable Token (Ability Token).png";
import humanRaceCard from "@/asset/items/Human Alliance-Alliance Will Card (Race Card).png";
import humanRaceBoard from "@/asset/items/Human Alliance-Human Race Board (Race Board).png";

const factions = [
  {
    id: 'turian',
    name: 'Turian Hierarchy',
    icon: '⚔️',
    color: '#4a9eff',
    description: 'Masters of tactical movement and military discipline.',
    cards: [
      { name: 'Hierarchy Fleet Ship', type: 'Ship Miniature', desc: 'Blue metallic board piece — angular Turian hull design.', image: turianShipMiniature },
      { name: 'Tactical Discipline Token', type: 'Ability Token', desc: 'Fuel cost reduction tracker for movement.', image: turianAbilityToken },
      { name: 'Covering Fire Card', type: 'Race Card', desc: 'Spend 1 Fuel — gain +2 die roll this turn.', image: turianRaceCard },
      { name: 'Turian Race Board', type: 'Race Board', desc: '10-slot Ark track: Metal-heavy early, mixed late game.', image: turianRaceBoard },
    ],
  },
  {
    id: 'asari',
    name: 'Asari Guardians',
    icon: '🌀',
    color: '#9b6bff',
    description: 'Biotic manipulators who bend card draws and force resource swaps.',
    cards: [
      { name: 'Thessia Ark Design', type: 'Ship Miniature', desc: 'Purple crystalline board piece — curved Asari hull.', image: asariShipMiniature },
      { name: 'Biotic Resonance Token', type: 'Ability Token', desc: 'Draw-2-keep-1 tracker for Action Cards.', image: asariAbilityToken },
      { name: 'Enthrall Card', type: 'Race Card', desc: 'Spend 1 Crystal — force a 1-for-1 resource swap with any player.', image: asariRaceCard },
      { name: 'Asari Race Board', type: 'Race Board', desc: '10-slot Ark track: Crystal-dominant throughout.', image: asariRaceBoard },
    ],
  },
  {
    id: 'krogan',
    name: 'Krogan Sons of Tuchanka',
    icon: '💥',
    color: '#ff6b35',
    description: 'Brute-force miners with explosive late-game potential.',
    cards: [
      { name: 'Tuchanka War Ark', type: 'Ship Miniature', desc: 'Orange armored board piece — brutalist Krogan hull.', image: kroganShipMiniature },
      { name: 'Blood Rage Token', type: 'Ability Token', desc: 'Sabotage negation tracker (1 Fuel per use).', image: kroganAbilityToken },
      { name: 'Hardcore Charge Card', type: 'Race Card', desc: 'Spend 2 Fuel — teleport to any unoccupied space.', image: kroganRaceCard },
      { name: 'Krogan Race Board', type: 'Race Board', desc: '10-slot Ark track: Extremely Metal-heavy, highest total cost.', image: kroganRaceBoard },
    ],
  },
  {
    id: 'salarian',
    name: 'Salarian STG',
    icon: '🔬',
    color: '#35d4a0',
    description: 'Intelligence operatives who auto-generate Crystals and manipulate card decks.',
    cards: [
      { name: 'Sur\'Kesh Ark Module', type: 'Ship Miniature', desc: 'Teal sleek board piece — Salarian organic hull.', image: salarianShipMiniature },
      { name: 'Research Acceleration Token', type: 'Ability Token', desc: '+1 Crystal at start of every turn.', image: salarianAbilityToken },
      { name: 'Intel Analysis Card', type: 'Race Card', desc: 'Spend 1 Crystal — look at top 3 Sabotage Cards; reorder or draw 1.', image: salarianRaceCard },
      { name: 'Salarian Race Board', type: 'Race Board', desc: '10-slot Ark track: Crystal-heavy with late-game complexity.', image: salarianRaceBoard },
    ],
  },
  {
    id: 'human',
    name: 'Human Alliance',
    icon: '🌍',
    color: '#ffd700',
    description: 'Resilient generalists with protected trades and sacrifice resilience.',
    cards: [
      { name: 'SSV Alliance Ark', type: 'Ship Miniature', desc: 'Gold board piece — Alliance Systems Navy hull design.', image: humanShipMiniature },
      { name: 'Indomitable Token', type: 'Ability Token', desc: 'Halved penalty tracker for failed Solar Sacrifices.', image: humanAbilityToken },
      { name: 'Alliance Will Card', type: 'Race Card', desc: 'Spend 1 any resource — trades this turn cannot be sabotaged.', image: humanRaceCard },
      { name: 'Human Race Board', type: 'Race Board', desc: '10-slot Ark track: Balanced alternating resources, flexible end game.', image: humanRaceBoard },
    ],
  },
];

const cardSections = [
  {
    type: 'Action Cards',
    cards: [
      { name: 'Citadel Meeting', image: citadelMeetingCard },
      { name: 'Engine Failure', image: engineFailureCard },
      { name: 'Normandy Support', image: normandySupportCard },
      { name: 'Reaper Scout', image: reaperScoutCard },
      { name: 'Resource Abundance', image: resourceAbundanceCard },
    ],
  },
  {
    type: 'Sabotage Cards',
    cards: [
      { name: 'EMP', image: empCard },
      { name: 'Hack', image: hackCard },
      { name: 'Phantom Directive', image: phantomDirectiveCard },
      { name: 'Sabotage Protocol', image: sabotageProtocolCard },
    ],
  },
  {
    type: 'Solar Penalty Cards',
    cards: [
      { name: 'Final Countdown', image: finalCountdownCard },
      { name: 'Solar Flare', image: solarFlareCard },
      { name: 'Time Warp', image: timeWarpCard },
    ],
  },
];

export default function GalleryPage() {
  const [activeId, setActiveId] = useState('turian');
  const active = factions.find((f) => f.id === activeId)!;

  return (
    <div className="min-h-screen p-8 md:p-12">
      <h1 className="text-5xl md:text-6xl font-medieval text-white mb-4 text-center tracking-wider">
        Gallery
      </h1>
      <p className="text-gray-500 text-center mb-10 italic">Faction components, Race Boards, and ability cards for Ark Ascension.</p>

      {/* Faction Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {factions.map(({ id, name, icon, color }) => (
          <button
            key={id}
            onClick={() => setActiveId(id)}
            className="px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-all border"
            style={{
              borderColor: activeId === id ? color : 'transparent',
              backgroundColor: activeId === id ? color + '20' : '#0a0e1a',
              color: activeId === id ? color : '#9ca3af',
            }}
          >
            <span>{icon}</span>
            <span>{name}</span>
          </button>
        ))}
      </div>

      {/* Active Faction */}
      <div className="max-w-5xl mx-auto">
        <div
          className="bg-[#0a0e1a] border rounded-xl overflow-hidden mb-8"
          style={{ borderColor: active.color + '40' }}
        >
          <div
            className="px-8 py-6 border-b flex items-center gap-4"
            style={{ borderColor: active.color + '40', backgroundColor: active.color + '15' }}
          >
            <span className="text-4xl">{active.icon}</span>
            <div>
              <h2 className="text-2xl font-medieval text-white tracking-wider">{active.name}</h2>
              <p className="text-gray-400 text-sm mt-1">{active.description}</p>
            </div>
          </div>
          <div className="p-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {active.cards.map(({ name, type, desc, image }) => (
              <div
                key={name}
                className="bg-[#05070f] border rounded-xl p-4 flex flex-col"
                style={{ borderColor: active.color + '30' }}
              >
                <div
                  className="w-full aspect-[3/4] rounded-lg mb-4 overflow-hidden"
                  style={{ backgroundColor: active.color + '15', border: `1px solid ${active.color}30` }}
                >
                  <Image
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    priority={false}
                  />
                </div>
                <p className="text-white font-semibold text-sm mb-1">{name}</p>
                <p className="text-xs mb-2 px-2 py-0.5 rounded-full w-fit" style={{ backgroundColor: active.color + '20', color: active.color }}>{type}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0a0e1a] border border-[#1a2040] rounded-xl p-6 md:p-8 mb-8">
          <h3 className="text-2xl font-medieval text-white tracking-wider mb-2 text-center">Card Collection</h3>
          <p className="text-gray-500 text-sm text-center mb-6 italic">Latest uploaded cards from the design folder.</p>
          <div className="space-y-8">
            {cardSections.map(({ type, cards }) => (
              <section key={type}>
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">{type}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {cards.map(({ name, image }) => (
                    <div key={name} className="bg-[#05070f] border border-[#1a2040] rounded-xl p-3">
                      <Image
                        src={image}
                        alt={name}
                        className="w-full h-auto rounded-lg border border-[#1a2040]"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        priority={false}
                      />
                      <p className="text-xs text-gray-400 mt-2 text-center">{name}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <a
            href="https://drive.google.com/drive/u/1/folders/1jyo5Lhw3b_83ig1zhrSES7q_RcLXfO5N"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#1a2040] bg-[#0a0e1a] text-gray-300 hover:text-white transition-colors"
          >
            More Downloadable Content
          </a>
        </div>

        <p className="text-center text-gray-600 text-sm italic">
          Final card art and print files are being updated as the project progresses.
        </p>
      </div>
    </div>
  );
}
