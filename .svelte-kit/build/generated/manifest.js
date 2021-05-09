const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/visualcommunication/index.svelte"),
	() => import("../../../src/routes/visualcommunication/equipment.svelte"),
	() => import("../../../src/routes/computation/index.svelte"),
	() => import("../../../src/routes/computation/about.svelte"),
	() => import("../../../src/routes/softsurface.svelte"),
	() => import("../../../src/routes/sensor.svelte"),
	() => import("../../../src/routes/about.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/visualcommunication/index.svelte
	[/^\/visualcommunication\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/visualcommunication/equipment.svelte
	[/^\/visualcommunication\/equipment\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/computation/index.svelte
	[/^\/computation\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/computation/about.svelte
	[/^\/computation\/about\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/softsurface.svelte
	[/^\/softsurface\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/sensor.svelte
	[/^\/sensor\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/data.json
	[/^\/data\/?$/]
];

export const fallback = [c[0](), c[1]()];