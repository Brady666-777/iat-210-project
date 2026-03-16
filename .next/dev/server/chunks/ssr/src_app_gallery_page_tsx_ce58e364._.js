module.exports = [
"[project]/src/app/gallery/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GalleryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const factions = [
    {
        id: 'turian',
        name: 'Turian Hierarchy',
        icon: '⚔️',
        color: '#4a9eff',
        description: 'Masters of tactical movement and military discipline.',
        cards: [
            {
                name: 'Hierarchy Fleet Ship',
                type: 'Ship Miniature',
                desc: 'Blue metallic board piece — angular Turian hull design.'
            },
            {
                name: 'Tactical Discipline Token',
                type: 'Ability Token',
                desc: 'Fuel cost reduction tracker for movement.'
            },
            {
                name: 'Covering Fire Card',
                type: 'Race Card',
                desc: 'Spend 1 Fuel — gain +2 die roll this turn.'
            },
            {
                name: 'Turian Race Board',
                type: 'Race Board',
                desc: '10-slot Ark track: Metal-heavy early, mixed late game.'
            }
        ]
    },
    {
        id: 'asari',
        name: 'Asari Guardians',
        icon: '🌀',
        color: '#9b6bff',
        description: 'Biotic manipulators who bend card draws and force resource swaps.',
        cards: [
            {
                name: 'Thessia Ark Design',
                type: 'Ship Miniature',
                desc: 'Purple crystalline board piece — curved Asari hull.'
            },
            {
                name: 'Biotic Resonance Token',
                type: 'Ability Token',
                desc: 'Draw-2-keep-1 tracker for Action Cards.'
            },
            {
                name: 'Enthrall Card',
                type: 'Race Card',
                desc: 'Spend 1 Crystal — force a 1-for-1 resource swap with any player.'
            },
            {
                name: 'Asari Race Board',
                type: 'Race Board',
                desc: '10-slot Ark track: Crystal-dominant throughout.'
            }
        ]
    },
    {
        id: 'krogan',
        name: 'Krogan Sons of Tuchanka',
        icon: '💥',
        color: '#ff6b35',
        description: 'Brute-force miners with explosive late-game potential.',
        cards: [
            {
                name: 'Tuchanka War Ark',
                type: 'Ship Miniature',
                desc: 'Orange armored board piece — brutalist Krogan hull.'
            },
            {
                name: 'Blood Rage Token',
                type: 'Ability Token',
                desc: 'Sabotage negation tracker (1 Fuel per use).'
            },
            {
                name: 'Hardcore Charge Card',
                type: 'Race Card',
                desc: 'Spend 2 Fuel — teleport to any unoccupied space.'
            },
            {
                name: 'Krogan Race Board',
                type: 'Race Board',
                desc: '10-slot Ark track: Extremely Metal-heavy, highest total cost.'
            }
        ]
    },
    {
        id: 'salarian',
        name: 'Salarian STG',
        icon: '🔬',
        color: '#35d4a0',
        description: 'Intelligence operatives who auto-generate Crystals and manipulate card decks.',
        cards: [
            {
                name: 'Sur\'Kesh Ark Module',
                type: 'Ship Miniature',
                desc: 'Teal sleek board piece — Salarian organic hull.'
            },
            {
                name: 'Research Acceleration Token',
                type: 'Ability Token',
                desc: '+1 Crystal at start of every turn.'
            },
            {
                name: 'Intel Analysis Card',
                type: 'Race Card',
                desc: 'Spend 1 Crystal — look at top 3 Sabotage Cards; reorder or draw 1.'
            },
            {
                name: 'Salarian Race Board',
                type: 'Race Board',
                desc: '10-slot Ark track: Crystal-heavy with late-game complexity.'
            }
        ]
    },
    {
        id: 'human',
        name: 'Human Alliance',
        icon: '🌍',
        color: '#ffd700',
        description: 'Resilient generalists with protected trades and sacrifice resilience.',
        cards: [
            {
                name: 'SSV Alliance Ark',
                type: 'Ship Miniature',
                desc: 'Gold board piece — Alliance Systems Navy hull design.'
            },
            {
                name: 'Indomitable Token',
                type: 'Ability Token',
                desc: 'Halved penalty tracker for failed Solar Sacrifices.'
            },
            {
                name: 'Alliance Will Card',
                type: 'Race Card',
                desc: 'Spend 1 any resource — trades this turn cannot be sabotaged.'
            },
            {
                name: 'Human Race Board',
                type: 'Race Board',
                desc: '10-slot Ark track: Balanced alternating resources, flexible end game.'
            }
        ]
    }
];
function GalleryPage() {
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('turian');
    const active = factions.find((f)=>f.id === activeId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-8 md:p-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-5xl md:text-6xl font-medieval text-white mb-4 text-center tracking-wider",
                children: "Gallery"
            }, void 0, false, {
                fileName: "[project]/src/app/gallery/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-center mb-10 italic",
                children: "Faction components, Race Boards, and ability cards for Ark Ascension."
            }, void 0, false, {
                fileName: "[project]/src/app/gallery/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-3 mb-10",
                children: factions.map(({ id, name, icon, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveId(id),
                        className: "px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-all border",
                        style: {
                            borderColor: activeId === id ? color : 'transparent',
                            backgroundColor: activeId === id ? color + '20' : '#0a0e1a',
                            color: activeId === id ? color : '#9ca3af'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/gallery/page.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/app/gallery/page.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        ]
                    }, id, true, {
                        fileName: "[project]/src/app/gallery/page.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/gallery/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#0a0e1a] border rounded-xl overflow-hidden mb-8",
                        style: {
                            borderColor: active.color + '40'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-8 py-6 border-b flex items-center gap-4",
                                style: {
                                    borderColor: active.color + '40',
                                    backgroundColor: active.color + '15'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl",
                                        children: active.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/gallery/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-medieval text-white tracking-wider",
                                                children: active.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/gallery/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400 text-sm mt-1",
                                                children: active.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/gallery/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/gallery/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/gallery/page.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4",
                                children: active.cards.map(({ name, type, desc })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#05070f] border rounded-xl p-4 flex flex-col",
                                        style: {
                                            borderColor: active.color + '30'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full aspect-[3/4] rounded-lg mb-4 flex items-center justify-center text-4xl",
                                                style: {
                                                    backgroundColor: active.color + '15',
                                                    border: `1px solid ${active.color}30`
                                                },
                                                children: active.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/gallery/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white font-semibold text-sm mb-1",
                                                children: name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/gallery/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs mb-2 px-2 py-0.5 rounded-full w-fit",
                                                style: {
                                                    backgroundColor: active.color + '20',
                                                    color: active.color
                                                },
                                                children: type
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/gallery/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-xs leading-relaxed",
                                                children: desc
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/gallery/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, name, true, {
                                        fileName: "[project]/src/app/gallery/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/gallery/page.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/gallery/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-gray-600 text-sm italic",
                        children: "Final card art and print files coming soon — placeholder layouts shown above."
                    }, void 0, false, {
                        fileName: "[project]/src/app/gallery/page.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/gallery/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/gallery/page.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_gallery_page_tsx_ce58e364._.js.map