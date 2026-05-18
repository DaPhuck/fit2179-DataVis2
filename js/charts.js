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

// ── C3: Geomagnetic Storm Days ────────────────────────────────────────────
vegaEmbed('#chart-c3', 'vega-specs/c3_storm_days.json', {
    actions: false,
    renderer: 'svg'
}).catch(console.error);