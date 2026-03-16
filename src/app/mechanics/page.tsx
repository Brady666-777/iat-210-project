import Image from 'next/image';
import flowchartImage from '@/asset/Flowchart.png';

export default function MechanicsPage() {
  return (
    <div className="animated-page-shell min-h-screen p-8 md:p-12">
      <h1
        className="reveal-up text-5xl md:text-6xl font-bold text-white mb-4 text-center tracking-wider"
        style={{ ['--reveal-delay' as '--reveal-delay']: '80ms' }}
      >
        Game Mechanics
      </h1>
      <p
        className="reveal-up text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        style={{ ['--reveal-delay' as '--reveal-delay']: '180ms' }}
      >
        A deep dive into the systems, phases, and strategic decisions that power Ark Ascension.
      </p>

      {/* RESOURCES */}
      <section
        className="reveal-up max-w-4xl mx-auto mb-16"
        style={{ ['--reveal-delay' as '--reveal-delay']: '240ms' }}
      >
        <h2 className="text-3xl font-bold text-white mb-6 tracking-wider">Resources</h2>
        <p className="text-gray-400 mb-6 leading-relaxed">
          Three core resources drive every decision in Ark Ascension. Managing them carefully
          across Mining, Solar Sacrifice, and Ark Construction is the key to victory.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="floating-card reveal-scale bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '300ms' }}>
            <div className="text-3xl mb-3">Metal</div>
            <h3 className="text-white font-bold mb-2">Metal</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The primary structural resource. Used heavily in Ark Construction especially
              by Turian and Krogan factions and as sacrifice fodder during Solar phases.
              Mined at Asteroid, Colony, and Fortress tiles.
            </p>
          </div>
          <div className="floating-card reveal-scale bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '380ms' }}>
            <div className="text-3xl mb-3">Fuel</div>
            <h3 className="text-white font-bold mb-2">Fuel</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Spent every turn to move your ship. Also required by Turian active abilities and
              Krogan teleportation. Without Fuel you cannot move and board position becomes
              extremely vulnerable. Collected at Derelict Wreck and Salarian Lab tiles.
            </p>
          </div>
          <div className="floating-card reveal-scale bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '460ms' }}>
            <div className="text-3xl mb-3">Crystals</div>
            <h3 className="text-white font-bold mb-2">Crystals</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The rarest resource and the backbone of Asari and Salarian Ark tracks.
              Salarians generate 1 Crystal automatically each turn. Used for race abilities,
              Omega Station purchases, and late-game Ark slots. Mined at Illium, Ruins, and Temple tiles.
            </p>
          </div>
        </div>
      </section>

      <div className="divider-line animated-divider max-w-4xl mx-auto" />

      {/* TURN SEQUENCE */}
      <section
        className="reveal-up max-w-4xl mx-auto mb-16"
        style={{ ['--reveal-delay' as '--reveal-delay']: '520ms' }}
      >
        <h2 className="text-3xl font-bold text-white mb-6 tracking-wider">Turn Sequence</h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Every round follows five strictly ordered phases. The Solar Sacrifice is resolved
          collectively before the active player takes their individual actions.
        </p>
        <div className="space-y-4">
          <div className="timeline-step reveal-scale flex gap-4 items-start bg-[#1a1a1a] rounded-xl p-5 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '560ms' }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-900 border border-purple-600 flex items-center justify-center text-white font-bold text-sm">0</div>
            <div>
              <h3 className="text-white font-bold mb-1">Start of Turn — Racial Passives</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Before anything else, passive abilities trigger. Most notably, Salarians gain
                1 Crystal automatically at the start of every turn.
              </p>
            </div>
          </div>
          <div className="timeline-step reveal-scale flex gap-4 items-start bg-[#1a1a1a] rounded-xl p-5 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '620ms' }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-900 border border-amber-600 flex items-center justify-center text-white font-bold text-sm">1</div>
            <div>
              <h3 className="text-white font-bold mb-1">Phase 1 — Solar Sacrifice (All Players)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The active player rolls 2 dice to determine the Tribute Value N.
                All players collectively pool resources to meet or exceed N. If the total falls short,
                a Solar Penalty Card is drawn and executed, and the Cumulative Failure Track advances by 1.
                Three failures equals game over for everyone. The cooperative pressure of the sacrifice
                forces even rivals to contribute, creating a tense negotiation every single round.
              </p>
            </div>
          </div>
          <div className="timeline-step reveal-scale flex gap-4 items-start bg-[#1a1a1a] rounded-xl p-5 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '680ms' }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900 border border-blue-600 flex items-center justify-center text-white font-bold text-sm">2</div>
            <div>
              <h3 className="text-white font-bold mb-1">Phase 2 — Movement</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The active player spends 1 Fuel, then rolls 1 die and moves that many spaces clockwise.
                If you land on a tile occupied by another player, you must pay them 1 resource or draw
                an Action Card instead. Turian Passive reduces movement fuel cost by 1 (min 1).
                Passing through the Citadel lets you discard 1 Sabotage Card for free.
              </p>
            </div>
          </div>
          <div className="timeline-step reveal-scale flex gap-4 items-start bg-[#1a1a1a] rounded-xl p-5 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '740ms' }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-900 border border-green-600 flex items-center justify-center text-white font-bold text-sm">3</div>
            <div>
              <h3 className="text-white font-bold mb-1">Phase 3 — Tile Resolution</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Execute the effect of the space you landed on. Mining tiles: roll die to gain resources
                (some tiles grant a 2x bonus). Danger Zones: draw an Action Card immediately.
                Special tiles and the Black Market have unique triggered effects.
              </p>
            </div>
          </div>
          <div className="timeline-step reveal-scale flex gap-4 items-start bg-[#1a1a1a] rounded-xl p-5 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '800ms' }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-900 border border-red-600 flex items-center justify-center text-white font-bold text-sm">4</div>
            <div>
              <h3 className="text-white font-bold mb-1">Phase 4 — Action Phase</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The active player may perform any combination of: Use 1 Race Active Ability (pay its
                listed resource cost), Play 1 Sabotage Card targeting an opponent, Trade resources with
                any willing player, or Build Ark Slots by paying the required resources to advance your
                Ark Construction Track in order.
              </p>
            </div>
          </div>
          <div className="timeline-step reveal-scale flex gap-4 items-start bg-[#1a1a1a] rounded-xl p-5 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '860ms' }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 border border-gray-500 flex items-center justify-center text-white font-bold text-sm">5</div>
            <div>
              <h3 className="text-white font-bold mb-1">Phase 5 — End of Turn</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Check your hand size against the 7-card limit. Discard down if needed,
                then pass the active player token to the left.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-line animated-divider max-w-4xl mx-auto" />

      <section
        className="reveal-up max-w-4xl mx-auto mb-16"
        style={{ ['--reveal-delay' as '--reveal-delay']: '920ms' }}
      >
        <details className="chart-frame floating-card bg-[#1a1a1a] rounded-xl border border-[#2a2a2a]">
          <summary className="list-none cursor-pointer px-4 md:px-6 py-4 md:py-5">
            <h2 className="text-3xl font-bold text-white tracking-wider">Game Flow Chart</h2>
            <p className="text-gray-400 mt-2 leading-relaxed">
              Click to expand or collapse the turn flow diagram.
            </p>
            <a
              href="https://drive.google.com/file/d/1BNmZshshE6YKH6XUQ62hx78awMG5SNhu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-4 px-4 py-2 bg-[#0d1530] border border-[#2a3a6a] rounded-lg text-[#6a9aff] text-sm hover:bg-[#13204a] transition-all"
            >
              Open Full Flowchart
            </a>
          </summary>
          <div className="px-4 md:px-6 pb-4 md:pb-6 overflow-x-auto">
            <Image
              src={flowchartImage}
              alt="Ark Ascension game flow chart"
              className="min-w-[900px] w-full h-auto rounded-lg"
              priority
            />
          </div>
        </details>
      </section>

      <div className="divider-line animated-divider max-w-4xl mx-auto" />

      {/* BOARD TILES */}
      <section
        className="reveal-up max-w-4xl mx-auto mb-16"
        style={{ ['--reveal-delay' as '--reveal-delay']: '980ms' }}
      >
        <h2 className="text-3xl font-bold text-white mb-6 tracking-wider">Board Tiles</h2>
        <p className="text-gray-400 mb-6 leading-relaxed">
          The Galactic Central Board is a circular loop of 20 tiles. Each tile type offers a
          different opportunity or threat.
        </p>
        <div className="overflow-x-auto rounded-xl border border-[#2a2a2a]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1a1a1a] text-gray-400 uppercase text-xs tracking-wider">
                <th className="px-4 py-3 text-left">Tile(s)</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Type</th>
                <th className="px-4 py-3 text-left">Effect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a2a2a]">
              <tr className="table-row-animated bg-[#111]"><td className="px-4 py-3 text-gray-500 font-mono">0</td><td className="px-4 py-3 text-white font-medium">Citadel</td><td className="px-4 py-3 text-amber-400 text-xs">Start / Safe</td><td className="px-4 py-3 text-gray-400">No effect on stop. Passing through lets you discard 1 Sabotage Card for free.</td></tr>
              <tr className="table-row-animated bg-[#161616]"><td className="px-4 py-3 text-gray-500 font-mono">1, 11, 16</td><td className="px-4 py-3 text-white font-medium">Asteroid / Colony / Fortress</td><td className="px-4 py-3 text-amber-400 text-xs">Metal Mine</td><td className="px-4 py-3 text-gray-400">Roll die to mine Metal. Tile 16 grants a 2x bonus.</td></tr>
              <tr className="table-row-animated bg-[#111]"><td className="px-4 py-3 text-gray-500 font-mono">2, 10</td><td className="px-4 py-3 text-white font-medium">Mass Relay</td><td className="px-4 py-3 text-amber-400 text-xs">Special</td><td className="px-4 py-3 text-gray-400">Spend 1 Fuel to warp to any other Mass Relay tile (once per turn).</td></tr>
              <tr className="table-row-animated bg-[#161616]"><td className="px-4 py-3 text-gray-500 font-mono">3, 9, 14</td><td className="px-4 py-3 text-white font-medium">Illium / Ruins / Temple</td><td className="px-4 py-3 text-amber-400 text-xs">Crystal Mine</td><td className="px-4 py-3 text-gray-400">Roll die to mine Crystals. Tile 14 grants a 2x bonus.</td></tr>
              <tr className="table-row-animated bg-[#111]"><td className="px-4 py-3 text-gray-500 font-mono">4</td><td className="px-4 py-3 text-white font-medium">Omega Station</td><td className="px-4 py-3 text-amber-400 text-xs">Black Market</td><td className="px-4 py-3 text-gray-400">Draw 1 Sabotage Card free, or buy 1 for 1 Crystal.</td></tr>
              <tr className="table-row-animated bg-[#161616]"><td className="px-4 py-3 text-gray-500 font-mono">5, 7, 12, 17</td><td className="px-4 py-3 text-white font-medium">Hazard Zones</td><td className="px-4 py-3 text-amber-400 text-xs">Danger</td><td className="px-4 py-3 text-gray-400">Draw 1 Action Card immediately and resolve its effect.</td></tr>
              <tr className="table-row-animated bg-[#111]"><td className="px-4 py-3 text-gray-500 font-mono">6, 18</td><td className="px-4 py-3 text-white font-medium">Wreck / Lab</td><td className="px-4 py-3 text-amber-400 text-xs">Fuel Depot</td><td className="px-4 py-3 text-gray-400">Roll die to collect Fuel. Tile 18 grants a 2x bonus.</td></tr>
              <tr className="table-row-animated bg-[#161616]"><td className="px-4 py-3 text-gray-500 font-mono">8</td><td className="px-4 py-3 text-white font-medium">Citadel Council</td><td className="px-4 py-3 text-amber-400 text-xs">Trading</td><td className="px-4 py-3 text-gray-400">Force a trade with any player. Both roll and the winner sets the terms.</td></tr>
              <tr className="table-row-animated bg-[#111]"><td className="px-4 py-3 text-gray-500 font-mono">15</td><td className="px-4 py-3 text-white font-medium">Solar Observatory</td><td className="px-4 py-3 text-amber-400 text-xs">Special</td><td className="px-4 py-3 text-gray-400">Peek at the top Solar Penalty card. Choose whether to trigger it now or leave it.</td></tr>
              <tr className="table-row-animated bg-[#161616]"><td className="px-4 py-3 text-gray-500 font-mono">19</td><td className="px-4 py-3 text-white font-medium">Ark Drydock</td><td className="px-4 py-3 text-amber-400 text-xs">Finish / Safe</td><td className="px-4 py-3 text-gray-400">Stop here to build 1 Ark Slot for free. Limit: once per game.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="divider-line animated-divider max-w-4xl mx-auto" />

      {/* CARD DECKS */}
      <section
        className="reveal-up max-w-4xl mx-auto mb-16"
        style={{ ['--reveal-delay' as '--reveal-delay']: '1040ms' }}
      >
        <h2 className="text-3xl font-bold text-white mb-6 tracking-wider">Card Decks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="floating-card reveal-scale bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '1100ms' }}>
            <h3 className="text-white font-bold mb-1">Action Deck <span className="text-gray-500 font-normal text-sm">(30 cards)</span></h3>
            <p className="text-gray-400 text-sm mb-3">Drawn when landing on Hazard Zones. Can be positive, negative, or event-based.</p>
            <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
              <li>Resource Abundance - Gain 1 of each resource</li>
              <li>Normandy Support - Gain 2 Fuel and move 1 space</li>
              <li>Engine Failure - Cannot move this turn</li>
              <li>Reaper Scout - Roll 1-3 lose 2 Crystals; 4-6 safe</li>
              <li>Citadel Meeting - Players vote on who gets 2 free resources</li>
            </ul>
          </div>
          <div className="floating-card reveal-scale bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '1160ms' }}>
            <h3 className="text-white font-bold mb-1">Sabotage Deck <span className="text-gray-500 font-normal text-sm">(20 cards)</span></h3>
            <p className="text-gray-400 text-sm mb-3">Collected at Omega Station. Played during the Action Phase to hinder opponents.</p>
            <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
              <li>EMP - Target loses 2 Fuel</li>
              <li>Hack - Target discards a card or loses 1 Crystal</li>
              <li>Sabotage Protocol - Target loses 1 completed Ark Slot</li>
              <li>Phantom Directive - Discard 2 cards to control an opponent next move</li>
            </ul>
          </div>
          <div className="floating-card reveal-scale bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '1220ms' }}>
            <h3 className="text-white font-bold mb-1">Solar Penalty Deck <span className="text-gray-500 font-normal text-sm">(10 cards)</span></h3>
            <p className="text-gray-400 text-sm mb-3">Triggered when the collective Solar Sacrifice fails. Three triggers ends the game.</p>
            <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
              <li>Solar Flare - All players lose 2 of their most abundant resource</li>
              <li>Time Warp - Hand limit reduced by 2 for two turns</li>
              <li>Final Countdown - Cumulative failure count plus 1</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="divider-line animated-divider max-w-4xl mx-auto" />

      {/* QUANTITATIVE ANALYSIS */}
      <section
        className="reveal-up max-w-4xl mx-auto mb-16"
        style={{ ['--reveal-delay' as '--reveal-delay']: '1280ms' }}
      >
        <h2 className="text-3xl font-bold text-white mb-6 tracking-wider">Quantitative Analysis</h2>
        <div className="space-y-6 text-gray-400 leading-relaxed">
          <p>
            Playtesting across four-player sessions revealed that the Solar Sacrifice creates a measurable
            free-rider dynamic when the Tribute Value exceeds 8. Players on low resources deliberately
            under-contribute, hoping others will carry the shortfall. This emergent behaviour adds a compelling
            psychological layer but can slow the early game.
          </p>
          <p>
            Turn length typically ranges from 45 seconds to 3 minutes. Early turns are fast as players
            simply move and mine. Mid-to-late game decisions including when to build Ark slots, when to play
            Sabotage Cards, and how much to contribute to Solar Sacrifice increase decision time significantly.
          </p>
          <p>
            The Krogan faction showed the highest swing potential: their Hardcore Charge teleport combined
            with a 2x Fuel Depot can generate up to 9 or more Fuel in a single turn, immediately transforming
            them from resource-poor to resource-dominant. This required careful map tile placement to prevent
            the Lab tile from being trivially exploitable.
          </p>
          <p>
            The Human passive (penalty halved on failed sacrifice) proved to be a strong equaliser during
            resource droughts, keeping them competitive in rounds where other factions took heavy Solar Flare losses.
          </p>
          <p>
            Ark slot costs were calibrated so that the average player can complete their track in approximately
            8 to 12 rounds, giving enough time for meaningful interaction without the game dragging. The Krogan
            track is the most resource-intensive at 3 to 4 Metal per slot but rewards aggressive early mining.
          </p>
        </div>
      </section>

      <div className="divider-line animated-divider max-w-4xl mx-auto" />

      {/* TRADE-OFFS */}
      <section
        className="reveal-up max-w-4xl mx-auto mb-16"
        style={{ ['--reveal-delay' as '--reveal-delay']: '1340ms' }}
      >
        <h2 className="text-3xl font-bold text-white mb-6 tracking-wider">Trade-offs and Dilemmas</h2>
        <div className="space-y-4">
          <div className="floating-card reveal-scale bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '1400ms' }}>
            <h3 className="text-white font-bold mb-2">Fuel Economy vs. Board Position</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every movement costs Fuel. Spending Fuel aggressively to reach high-value tiles like the 2x Lab
              leaves you vulnerable in the next Solar Sacrifice cycle. Players must decide whether a big mining
              run now is worth the mobility cost later.
            </p>
          </div>
          <div className="floating-card reveal-scale bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '1460ms' }}>
            <h3 className="text-white font-bold mb-2">Solar Sacrifice: Contribute or Free-Ride?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every round you face a silent negotiation. Paying your fair share depletes your Ark-building
              resources; contributing nothing risks a collective penalty that hurts everyone including you.
              The optimal strategy shifts based on your current resource pool and how close you are to
              completing an Ark slot.
            </p>
          </div>
          <div className="floating-card reveal-scale bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '1520ms' }}>
            <h3 className="text-white font-bold mb-2">Sabotage Timing</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sabotage cards are precious and single-use. Playing Sabotage Protocol at the wrong time,
              when the target can immediately rebuild their lost slot, wastes the card entirely. Holding
              it for the final few slots where rebuilding costs are heaviest maximises disruption.
            </p>
          </div>
          <div className="floating-card reveal-scale bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '1580ms' }}>
            <h3 className="text-white font-bold mb-2">Mass Relay vs. Sequential Movement</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The Mass Relay lets you warp anywhere on the board for 1 Fuel but it costs your movement
              action. You skip all the tiles in between, meaning you miss out on passing-by effects and
              potential resource pickups. Sometimes the slow path is richer.
            </p>
          </div>
          <div className="floating-card reveal-scale bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '1640ms' }}>
            <h3 className="text-white font-bold mb-2">Race Ability: Now or Never?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Active race abilities cost resources and can only be used once per Action Phase. Using the
              Turian Covering Fire to guarantee a movement roll might get you to a key tile but leaves
              you without the resource buffer needed for the next sacrifice.
            </p>
          </div>
        </div>
      </section>

      <div className="divider-line animated-divider max-w-4xl mx-auto" />

      {/* GAME DYNAMICS */}
      <section
        className="reveal-up max-w-4xl mx-auto mb-16"
        style={{ ['--reveal-delay' as '--reveal-delay']: '1700ms' }}
      >
        <h2 className="text-3xl font-bold text-white mb-6 tracking-wider">Game Dynamics</h2>
        <div className="space-y-4">
          <div className="floating-card reveal-scale bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '1760ms' }}>
            <h3 className="text-white font-bold mb-2">Cooperative Tension</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The Solar Sacrifice forces rivals to cooperate temporarily every single round. There is no
              escaping it. Fail collectively and everyone suffers. This creates genuine diplomatic moments
              even in a highly competitive game, as players must weigh mutual survival against beating each
              other to Ark completion.
            </p>
          </div>
          <div className="floating-card reveal-scale bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '1820ms' }}>
            <h3 className="text-white font-bold mb-2">Spatial Control</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Landing on an opponent tile costs you a resource. This discourages players from clustering
              together and naturally spreads the field. Controlling the high-value 2x bonus tiles (Tiles 14,
              16, 18) creates a positional advantage that others must work around or spend Sabotage Cards to disrupt.
            </p>
          </div>
          <div className="floating-card reveal-scale bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '1880ms' }}>
            <h3 className="text-white font-bold mb-2">Asymmetric Faction Interplay</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Each faction wants different resources and excels at different board areas. Asari and Salarians
              compete for Crystals; Turian and Krogan compete for Metal and Fuel. This natural competition
              creates faction-specific hotspots and encourages targeted sabotage against direct resource rivals.
            </p>
          </div>
          <div className="floating-card reveal-scale bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]" style={{ ['--reveal-delay' as '--reveal-delay']: '1940ms' }}>
            <h3 className="text-white font-bold mb-2">Escalating Endgame</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              As players fill more Ark slots, the temptation to play Sabotage Cards increases dramatically.
              Late-game turns become a high-stakes battle of card-playing and resource denial, with the
              Failure Track serving as a ticking clock that punishes any faction that over-commits to
              aggression at the expense of collective survival.
            </p>
          </div>
        </div>
      </section>

      <div className="divider-line animated-divider max-w-4xl mx-auto" />

      {/* PLAY SESSION TIME */}
      <section
        className="reveal-up max-w-4xl mx-auto"
        style={{ ['--reveal-delay' as '--reveal-delay']: '2000ms' }}
      >
        <h2 className="text-3xl font-bold text-white mb-4 tracking-wider">Play Session Time</h2>
        <p className="text-gray-400 leading-relaxed text-center max-w-2xl mx-auto">
          Ark Ascension is designed for 2 to 5 players. A full game with experienced players runs
          approximately 60 to 90 minutes. First-time sessions including rules explanation typically
          take 90 to 120 minutes.
        </p>
      </section>

    </div>
  );
}
