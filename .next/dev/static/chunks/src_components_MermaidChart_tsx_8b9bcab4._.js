(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/MermaidChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MermaidChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mermaid$2f$dist$2f$mermaid$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mermaid/dist/mermaid.core.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
let isMermaidInitialized = false;
function MermaidChart({ chart, className }) {
    _s();
    const [svg, setSvg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const chartIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(`mermaid-${Math.random().toString(36).slice(2, 11)}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MermaidChart.useEffect": ()=>{
            if (!isMermaidInitialized) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mermaid$2f$dist$2f$mermaid$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].initialize({
                    startOnLoad: false,
                    securityLevel: 'loose',
                    theme: 'dark'
                });
                isMermaidInitialized = true;
            }
            let isMounted = true;
            setError(null);
            setSvg('');
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mermaid$2f$dist$2f$mermaid$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(chart).then({
                "MermaidChart.useEffect": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mermaid$2f$dist$2f$mermaid$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].render(chartIdRef.current, chart)
            }["MermaidChart.useEffect"]).then({
                "MermaidChart.useEffect": ({ svg: renderedSvg })=>{
                    if (isMounted) {
                        setSvg(renderedSvg);
                    }
                }
            }["MermaidChart.useEffect"]).catch({
                "MermaidChart.useEffect": (err)=>{
                    if (isMounted) {
                        const message = err instanceof Error ? err.message : 'Unknown Mermaid rendering error';
                        setError(message);
                    }
                }
            }["MermaidChart.useEffect"]);
            return ({
                "MermaidChart.useEffect": ()=>{
                    isMounted = false;
                }
            })["MermaidChart.useEffect"];
        }
    }["MermaidChart.useEffect"], [
        chart
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: className,
                "aria-label": "Mermaid chart",
                dangerouslySetInnerHTML: svg ? {
                    __html: svg
                } : undefined
            }, void 0, false, {
                fileName: "[project]/src/components/MermaidChart.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "mt-3 text-xs text-red-400 whitespace-pre-wrap",
                children: [
                    "Mermaid error: ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MermaidChart.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true);
}
_s(MermaidChart, "4uCaKLUdlPVdSqbXJWaxlakBjIM=");
_c = MermaidChart;
var _c;
__turbopack_context__.k.register(_c, "MermaidChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_MermaidChart_tsx_8b9bcab4._.js.map