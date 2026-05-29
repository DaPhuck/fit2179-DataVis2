// Shared vega-embed options — background matches .chart-card (--navy-card)
const embedOpts = {
    actions: true,
    renderer: 'svg',
    config: { background: '#111d30' }
};

// ── C1: Australia Sky Brightness Map ─────────────────────────────────────
vegaEmbed('#chart-c1', 'vega-specs/c1_sky_brightness.json', embedOpts).catch(console.error);

// ── C2: Sunspot Cycle Line Chart ──────────────────────────────────────────
vegaEmbed('#chart-c2', 'vega-specs/c2_sunspot_cycle.json', embedOpts).catch(console.error);

// ── C3: Geomagnetic Storm Days ────────────────────────────────────────────
vegaEmbed('#chart-c3', 'vega-specs/c3_storm_days.json', embedOpts).catch(console.error);

// ── C4: Storm Calendar Heatmap ────────────────────────────────────────────
vegaEmbed('#chart-c4', 'vega-specs/c4_storm_calendar.json', embedOpts).catch(console.error);

// ── C5: Aurora Radial Bar Chart ───────────────────────────────────────────
vegaEmbed('#chart-c5', 'vega-specs/c5_aurora_radial.json', embedOpts).catch(console.error);

// ── C6: Kp vs Sunspot Dual-Axis ───────────────────────────────────────────
vegaEmbed('#chart-c6', 'vega-specs/c6_kp_vs_sunspot.json', embedOpts).catch(console.error);

// ── C7: Aurora sighting map ───────────────────────────────────────────────
vegaEmbed('#chart-c7', 'vega-specs/c7_aurora_sightings.json', embedOpts).catch(console.error);

// ── C8: Lattitude vs Aurora visibility scatter ────────────────────────────
vegaEmbed('#chart-c8', 'vega-specs/c8_lattitude_vs_aurora_visibility.json', embedOpts).catch(console.error);

// ── C9: Aurora viewing (human eyes vs camera) ─────────────────────────────
vegaEmbed('#chart-c9', 'vega-specs/c9_aurora_colors_forms.json', embedOpts).catch(console.error);

// ── C10: Fireball events over Australia ───────────────────────────────────
vegaEmbed('#chart-c10', 'vega-specs/c10_fireballs.json', embedOpts).catch(console.error);

// ── C11: Meteorite landings map ───────────────────────────────────────────
vegaEmbed('#chart-c11', 'vega-specs/c11_meteorite_landings_map.json', embedOpts).catch(console.error);

// ── C12: Fireball size vs frequency power-law ─────────────────────────────
vegaEmbed('#chart-c12', 'vega-specs/c12_fireball_powerlaw_rel.json', embedOpts).catch(console.error);

// ── C13: Eclipse timeline ─────────────────────────────────────────────────
vegaEmbed('#chart-c13', 'vega-specs/c13_eclipses.json', embedOpts).catch(console.error);

// ── C14: Eclipse type composition per decade ──────────────────────────────
vegaEmbed('#chart-c14', 'vega-specs/c14_eclipses_composition.json', embedOpts).catch(console.error);

// ── C15: Dark sky locations ───────────────────────────────────────────────
vegaEmbed('#chart-c15', 'vega-specs/c15_dark_sky_locations.json', embedOpts).catch(console.error);
