// ── C1: Australia Sky Brightness Map ─────────────────────────────────────
vegaEmbed('#chart-c1', 'vega-specs/c1_sky_brightness.json', {
    actions: false,
    renderer: 'svg'
}).catch(console.error);

// ── C2: Sunspot Cycle Line Chart ──────────────────────────────────────────
vegaEmbed('#chart-c2', 'vega-specs/c2_sunspot_cycle.json', {
    actions: false,
    renderer: 'svg'
}).catch(console.error);