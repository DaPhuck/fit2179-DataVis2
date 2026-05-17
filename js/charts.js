// ── C1: Australia Sky Brightness Map ─────────────────────────────────────
vegaEmbed('#chart-c1', 'vega-specs/c1_sky_brightness.json', {
    actions: false,
    renderer: 'svg'
}).catch(console.error);