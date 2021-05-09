import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-c3d130c2.js",
			css: ["/./_app/assets/start-a8cd1609.css"],
			js: ["/./_app/start-c3d130c2.js","/./_app/chunks/vendor-7d248b40.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"Jungka-Regular.woff2","size":25200,"type":"font/woff2"},{"file":"images/vc-ph.jpg","size":466255,"type":"image/jpeg"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/visualcommunication\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/visualcommunication/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/visualcommunication\/equipment\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/visualcommunication/equipment.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/computation\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/computation/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/computation\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/computation/about.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/softsurface\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/softsurface.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/sensor\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/sensor.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/data\/?$/,
						params: empty,
						load: () => import("../../src/routes/data.json")
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/visualcommunication/index.svelte": () => import("../../src/routes/visualcommunication/index.svelte"),"src/routes/visualcommunication/equipment.svelte": () => import("../../src/routes/visualcommunication/equipment.svelte"),"src/routes/computation/index.svelte": () => import("../../src/routes/computation/index.svelte"),"src/routes/computation/about.svelte": () => import("../../src/routes/computation/about.svelte"),"src/routes/softsurface.svelte": () => import("../../src/routes/softsurface.svelte"),"src/routes/sensor.svelte": () => import("../../src/routes/sensor.svelte"),"src/routes/about.svelte": () => import("../../src/routes/about.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-1a2546ce.js","css":["/./_app/assets/pages/__layout.svelte-bb7baf1d.css"],"js":["/./_app/pages/__layout.svelte-1a2546ce.js","/./_app/chunks/vendor-7d248b40.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-4239b756.js","css":[],"js":["/./_app/error.svelte-4239b756.js","/./_app/chunks/vendor-7d248b40.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-f4e7bc12.js","css":[],"js":["/./_app/pages/index.svelte-f4e7bc12.js","/./_app/chunks/vendor-7d248b40.js"],"styles":null},"src/routes/visualcommunication/index.svelte":{"entry":"/./_app/pages/visualcommunication/index.svelte-c79e402e.js","css":[],"js":["/./_app/pages/visualcommunication/index.svelte-c79e402e.js","/./_app/chunks/vendor-7d248b40.js"],"styles":null},"src/routes/visualcommunication/equipment.svelte":{"entry":"/./_app/pages/visualcommunication/equipment.svelte-3086379e.js","css":[],"js":["/./_app/pages/visualcommunication/equipment.svelte-3086379e.js","/./_app/chunks/vendor-7d248b40.js"],"styles":null},"src/routes/computation/index.svelte":{"entry":"/./_app/pages/computation/index.svelte-f0cd216c.js","css":[],"js":["/./_app/pages/computation/index.svelte-f0cd216c.js","/./_app/chunks/vendor-7d248b40.js"],"styles":null},"src/routes/computation/about.svelte":{"entry":"/./_app/pages/computation/about.svelte-8120b0f7.js","css":[],"js":["/./_app/pages/computation/about.svelte-8120b0f7.js","/./_app/chunks/vendor-7d248b40.js"],"styles":null},"src/routes/softsurface.svelte":{"entry":"/./_app/pages/softsurface.svelte-82213fea.js","css":[],"js":["/./_app/pages/softsurface.svelte-82213fea.js","/./_app/chunks/vendor-7d248b40.js"],"styles":null},"src/routes/sensor.svelte":{"entry":"/./_app/pages/sensor.svelte-38055951.js","css":[],"js":["/./_app/pages/sensor.svelte-38055951.js","/./_app/chunks/vendor-7d248b40.js"],"styles":null},"src/routes/about.svelte":{"entry":"/./_app/pages/about.svelte-01d90d97.js","css":[],"js":["/./_app/pages/about.svelte-01d90d97.js","/./_app/chunks/vendor-7d248b40.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}