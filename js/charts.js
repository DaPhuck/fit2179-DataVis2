// ── C1: Australia Sky Brightness Map ─────────────────────────────────────
vegaEmbed('#chart-c1', 'vega-specs/c1_sky_brightness.json', {
    actions: true,
    renderer: 'svg'
}).catch(console.error);

// ── C2: Sunspot Cycle Line Chart ──────────────────────────────────────────
vegaEmbed('#chart-c2', 'vega-specs/c2_sunspot_cycle.json', {
    actions: true,
    renderer: 'svg'
}).catch(console.error);

// ── C3: Geomagnetic Storm Days ────────────────────────────────────────────
vegaEmbed('#chart-c3', 'vega-specs/c3_storm_days.json', {
    actions: true,
    renderer: 'svg'
}).catch(console.error);

// ── C4: Storm Calendar Heatmap ────────────────────────────────────────────
vegaEmbed('#chart-c4', 'vega-specs/c4_storm_calendar.json', {
    actions: true,
    renderer: 'svg'
}).catch(console.error);

// ── C5: Aurora Radial Bar Chart ───────────────────────────────────────────
vegaEmbed('#chart-c5', 'vega-specs/c5_aurora_radial.json', {
    actions: true,
    renderer: 'svg'
}).catch(console.error);