import {respond} from "@sveltejs/kit/ssr";
import {create_ssr_component, validate_component, missing_component, escape, subscribe, each, add_attribute} from "svelte/internal";
import {setContext, afterUpdate, onMount, getContext} from "svelte";
import "svelte/transition";
var root_svelte_svelte_type_style_lang = "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}";
const css$2 = {
  code: "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n</script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t#svelte-announcer {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t\\tclip: rect(0 0 0 0);\\n\\t\\tclip-path: inset(50%);\\n\\t\\toverflow: hidden;\\n\\t\\twhite-space: nowrap;\\n\\t\\twidth: 1px;\\n\\t\\theight: 1px;\\n\\t}\\n</style>"],"names":[],"mappings":"AAsDC,iBAAiB,eAAC,CAAC,AAClB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC"}`
};
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {stores} = $$props;
  let {page: page2} = $$props;
  let {components} = $$props;
  let {props_0 = null} = $$props;
  let {props_1 = null} = $$props;
  let {props_2 = null} = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });
    mounted = true;
    return unsubscribe;
  });
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css$2);
  {
    stores.page.set(page2);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-1j55zn5"}">${navigated ? `${escape(title)}` : ``}</div>` : ``}`;
});
function set_paths(paths) {
}
function set_prerendering(value) {
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
const template = ({head, body}) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="/favicon.ico" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + '\n	</head>\n	<body>\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
let options = null;
function init(settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: "/./_app/start-c3d130c2.js",
      css: ["/./_app/assets/start-a8cd1609.css"],
      js: ["/./_app/start-c3d130c2.js", "/./_app/chunks/vendor-7d248b40.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => "/./_app/" + entry_lookup[id],
    get_stack: (error2) => String(error2),
    handle_error: (error2) => {
      console.error(error2.stack);
      error2.stack = options.get_stack(error2);
    },
    hooks: get_hooks(user_hooks),
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    read: settings.read,
    root: Root,
    router: true,
    ssr: true,
    target: "#svelte",
    template
  };
}
const empty = () => ({});
const manifest = {
  assets: [{file: "Jungka-Regular.woff2", size: 25200, type: "font/woff2"}, {file: "images/vc-ph.jpg", size: 466255, type: "image/jpeg"}],
  layout: "src/routes/__layout.svelte",
  error: ".svelte-kit/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/visualcommunication\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/visualcommunication/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/visualcommunication\/equipment\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/visualcommunication/equipment.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/computation\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/computation/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/computation\/about\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/computation/about.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/softsurface\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/softsurface.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/sensor\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/sensor.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/about\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/data\/?$/,
      params: empty,
      load: () => Promise.resolve().then(function() {
        return data$1;
      })
    }
  ]
};
const get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({request, render: render2}) => render2(request))
});
const module_lookup = {
  "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
    return __layout;
  }),
  ".svelte-kit/build/components/error.svelte": () => Promise.resolve().then(function() {
    return error;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index$2;
  }),
  "src/routes/visualcommunication/index.svelte": () => Promise.resolve().then(function() {
    return index$1;
  }),
  "src/routes/visualcommunication/equipment.svelte": () => Promise.resolve().then(function() {
    return equipment;
  }),
  "src/routes/computation/index.svelte": () => Promise.resolve().then(function() {
    return index;
  }),
  "src/routes/computation/about.svelte": () => Promise.resolve().then(function() {
    return about$1;
  }),
  "src/routes/softsurface.svelte": () => Promise.resolve().then(function() {
    return softsurface;
  }),
  "src/routes/sensor.svelte": () => Promise.resolve().then(function() {
    return sensor;
  }),
  "src/routes/about.svelte": () => Promise.resolve().then(function() {
    return about;
  })
};
const metadata_lookup = {"src/routes/__layout.svelte": {entry: "/./_app/pages/__layout.svelte-1a2546ce.js", css: ["/./_app/assets/pages/__layout.svelte-bb7baf1d.css"], js: ["/./_app/pages/__layout.svelte-1a2546ce.js", "/./_app/chunks/vendor-7d248b40.js"], styles: null}, ".svelte-kit/build/components/error.svelte": {entry: "/./_app/error.svelte-4239b756.js", css: [], js: ["/./_app/error.svelte-4239b756.js", "/./_app/chunks/vendor-7d248b40.js"], styles: null}, "src/routes/index.svelte": {entry: "/./_app/pages/index.svelte-f4e7bc12.js", css: [], js: ["/./_app/pages/index.svelte-f4e7bc12.js", "/./_app/chunks/vendor-7d248b40.js"], styles: null}, "src/routes/visualcommunication/index.svelte": {entry: "/./_app/pages/visualcommunication/index.svelte-c79e402e.js", css: [], js: ["/./_app/pages/visualcommunication/index.svelte-c79e402e.js", "/./_app/chunks/vendor-7d248b40.js"], styles: null}, "src/routes/visualcommunication/equipment.svelte": {entry: "/./_app/pages/visualcommunication/equipment.svelte-3086379e.js", css: [], js: ["/./_app/pages/visualcommunication/equipment.svelte-3086379e.js", "/./_app/chunks/vendor-7d248b40.js"], styles: null}, "src/routes/computation/index.svelte": {entry: "/./_app/pages/computation/index.svelte-f0cd216c.js", css: [], js: ["/./_app/pages/computation/index.svelte-f0cd216c.js", "/./_app/chunks/vendor-7d248b40.js"], styles: null}, "src/routes/computation/about.svelte": {entry: "/./_app/pages/computation/about.svelte-8120b0f7.js", css: [], js: ["/./_app/pages/computation/about.svelte-8120b0f7.js", "/./_app/chunks/vendor-7d248b40.js"], styles: null}, "src/routes/softsurface.svelte": {entry: "/./_app/pages/softsurface.svelte-82213fea.js", css: [], js: ["/./_app/pages/softsurface.svelte-82213fea.js", "/./_app/chunks/vendor-7d248b40.js"], styles: null}, "src/routes/sensor.svelte": {entry: "/./_app/pages/sensor.svelte-38055951.js", css: [], js: ["/./_app/pages/sensor.svelte-38055951.js", "/./_app/chunks/vendor-7d248b40.js"], styles: null}, "src/routes/about.svelte": {entry: "/./_app/pages/about.svelte-01d90d97.js", css: [], js: ["/./_app/pages/about.svelte-01d90d97.js", "/./_app/chunks/vendor-7d248b40.js"], styles: null}};
async function load_component(file) {
  return {
    module: await module_lookup[file](),
    ...metadata_lookup[file]
  };
}
init({paths: {base: "", assets: "/."}});
function render(request, {
  prerender
} = {}) {
  const host = request.headers["host"];
  return respond({...request, host}, options, {prerender});
}
const labs = [
  {
    id: "visualcommunication",
    name: "visual communication lab",
    color: "darkorange"
  },
  {
    id: "sensor",
    name: "sensor lab",
    color: "royalblue"
  },
  {
    id: "computation",
    name: "computation lab",
    color: "blueviolet"
  },
  {
    id: "softsurface",
    name: "soft surface lab",
    color: "teal"
  }
];
const sections = [
  {
    name: "about"
  },
  {
    name: "equipment"
  },
  {
    name: "books"
  },
  {
    name: "guidelines"
  }
];
const machines = [
  {
    name: "electrical cutter"
  },
  {
    name: "manual guillotine"
  },
  {
    name: "rotary paper trimmer"
  }
];
var data = {
  labs,
  sections,
  machines
};
var data$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  labs,
  sections,
  machines,
  default: data
});
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var Header_svelte_svelte_type_style_lang = "header.svelte-sshqek{box-sizing:border-box;padding:0.5rem 10vw;margin-bottom:2rem;position:sticky;top:0;background:linear-gradient(90deg, var(--labColor) 0%, white 100%);width:85vw;margin-left:-10vw;z-index:10}a.svelte-sshqek{position:relative;text-transform:capitalize}a.svelte-sshqek:hover,a.selected.svelte-sshqek{color:white}li.svelte-sshqek{display:inline-block;margin-right:1rem}";
const css$1 = {
  code: "header.svelte-sshqek{box-sizing:border-box;padding:0.5rem 10vw;margin-bottom:2rem;position:sticky;top:0;background:linear-gradient(90deg, var(--labColor) 0%, white 100%);width:85vw;margin-left:-10vw;z-index:10}a.svelte-sshqek{position:relative;text-transform:capitalize}a.svelte-sshqek:hover,a.selected.svelte-sshqek{color:white}li.svelte-sshqek{display:inline-block;margin-right:1rem}",
  map: '{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script>\\n\\timport { page } from \\"$app/stores\\";\\n\\n\\texport let currentLab;\\n\\n\\tconst navItems = [\\"equipment\\", \\"books\\", \\"guidelines\\", \\"ressources\\"];\\n</script>\\n\\n<style>\\n\\theader {\\n\\t\\tbox-sizing: border-box;\\n\\t\\tpadding: 0.5rem 10vw;\\n\\t\\tmargin-bottom: 2rem;\\n\\t\\tposition: sticky;\\n\\t\\ttop: 0;\\n\\t\\tbackground: linear-gradient(90deg, var(--labColor) 0%, white 100%);\\n\\t\\twidth: 85vw;\\n\\t\\tmargin-left: -10vw;\\n\\t\\tz-index: 10;\\n\\t}\\n\\n\\ta {\\n\\t\\tposition: relative;\\n\\t\\ttext-transform: capitalize;\\n\\t}\\n\\n\\ta:hover,\\n\\ta.selected {\\n\\t\\tcolor: white;\\n\\t}\\n\\n\\tli {\\n\\t\\tdisplay: inline-block;\\n\\t\\tmargin-right: 1rem;\\n\\t}\\n</style>\\n\\n<header>\\n\\t<ul>\\n\\t\\t{#each navItems as i}\\n\\t\\t\\t<li>\\n\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\thref={`/${currentLab}/${i}`}\\n\\t\\t\\t\\t\\tclass:selected={$page.path === `/${currentLab}/${i}`}>{i}</a\\n\\t\\t\\t\\t>\\n\\t\\t\\t</li>\\n\\t\\t{/each}\\n\\t</ul>\\n</header>\\n"],"names":[],"mappings":"AASC,MAAM,cAAC,CAAC,AACP,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,MAAM,CAAC,IAAI,CACpB,aAAa,CAAE,IAAI,CACnB,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,CAAC,CACN,UAAU,CAAE,gBAAgB,KAAK,CAAC,CAAC,IAAI,UAAU,CAAC,CAAC,EAAE,CAAC,CAAC,KAAK,CAAC,IAAI,CAAC,CAClE,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,KAAK,CAClB,OAAO,CAAE,EAAE,AACZ,CAAC,AAED,CAAC,cAAC,CAAC,AACF,QAAQ,CAAE,QAAQ,CAClB,cAAc,CAAE,UAAU,AAC3B,CAAC,AAED,eAAC,MAAM,CACP,CAAC,SAAS,cAAC,CAAC,AACX,KAAK,CAAE,KAAK,AACb,CAAC,AAED,EAAE,cAAC,CAAC,AACH,OAAO,CAAE,YAAY,CACrB,YAAY,CAAE,IAAI,AACnB,CAAC"}'
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let {currentLab} = $$props;
  const navItems = ["equipment", "books", "guidelines", "ressources"];
  if ($$props.currentLab === void 0 && $$bindings.currentLab && currentLab !== void 0)
    $$bindings.currentLab(currentLab);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-sshqek"}"><ul>${each(navItems, (i) => `<li class="${"svelte-sshqek"}"><a${add_attribute("href", `/${currentLab}/${i}`, 0)} class="${["svelte-sshqek", $page.path === `/${currentLab}/${i}` ? "selected" : ""].join(" ").trim()}">${escape(i)}</a>
			</li>`)}</ul></header>`;
});
var reset = "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n	margin: 0;\n	padding: 0;\n	border: 0;\n	font-size: 100%;\n	font: inherit;\n	vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n	display: block;\n}\nbody {\n	line-height: 1;\n}\nol,\nul {\n	list-style: none;\n}\nblockquote,\nq {\n	quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n	content: '';\n	content: none;\n}\ntable {\n	border-collapse: collapse;\n	border-spacing: 0;\n}\n";
var global = '@import url("https://use.typekit.net/ypf6erz.css");\n\n@font-face {\n	font-family: Jungka;\n	src: url("/Jungka-Regular.woff2");\n}\n\nhtml {\n	font-size: 20px;\n}\n\nbody {\n	font-family: ff-meta-correspondence-web-p, sans-serif;\n	font-weight: 400;\n\n	/* font-family: ff-meta-web-pro, sans-serif;\n	font-weight: 400; */\n\n	/* font-family: ff-meta-web-pro-condensed, sans-serif;\n	font-weight: 600; */\n\n	font-style: normal;\n	font-synthesis: none;\n	line-height: 1.2;\n\n	-webkit-font-smoothing: antialiased;\n\n	font-family: Jungka;\n	font-weight: 400;\n}\n\na {\n	color: inherit;\n	text-decoration: none;\n}\n\nimg {\n	width: 600px;\n	margin: 0 auto;\n}\n\np {\n	margin-bottom: 1rem;\n}\n\nh2 + p {\n	margin-top: 1rem;\n}\n\np + h2 {\n	margin-top: 1rem;\n}\n';
var __layout_svelte_svelte_type_style_lang = "main.svelte-1lrq658.svelte-1lrq658{display:flex}section.svelte-1lrq658.svelte-1lrq658{display:flex;position:relative;box-sizing:border-box;height:100vh;width:5vw;transition:width ease-out 250ms;overflow-x:hidden;overflow-y:scroll;background:linear-gradient(90deg, var(--labColor) 0%, white 100%)}a.svelte-1lrq658.svelte-1lrq658{box-sizing:border-box;position:sticky;top:0;width:100%;height:100%;padding:0.5rem;writing-mode:vertical-lr;text-transform:uppercase;letter-spacing:0.075em;z-index:20}div.svelte-1lrq658.svelte-1lrq658{position:relative;display:flex;flex-direction:column;box-sizing:border-box;padding:0 10vw;margin-left:-44px;width:85vw;flex-shrink:0}.selected.svelte-1lrq658.svelte-1lrq658{width:85vw}.selected.svelte-1lrq658 a.svelte-1lrq658{width:auto;height:auto}";
const css = {
  code: "main.svelte-1lrq658.svelte-1lrq658{display:flex}section.svelte-1lrq658.svelte-1lrq658{display:flex;position:relative;box-sizing:border-box;height:100vh;width:5vw;transition:width ease-out 250ms;overflow-x:hidden;overflow-y:scroll;background:linear-gradient(90deg, var(--labColor) 0%, white 100%)}a.svelte-1lrq658.svelte-1lrq658{box-sizing:border-box;position:sticky;top:0;width:100%;height:100%;padding:0.5rem;writing-mode:vertical-lr;text-transform:uppercase;letter-spacing:0.075em;z-index:20}div.svelte-1lrq658.svelte-1lrq658{position:relative;display:flex;flex-direction:column;box-sizing:border-box;padding:0 10vw;margin-left:-44px;width:85vw;flex-shrink:0}.selected.svelte-1lrq658.svelte-1lrq658{width:85vw}.selected.svelte-1lrq658 a.svelte-1lrq658{width:auto;height:auto}",
  map: '{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<script>\\n\\timport { page } from \\"$app/stores\\";\\n\\timport { fade } from \\"svelte/transition\\";\\n\\n\\timport Header from \\"$lib/Header.svelte\\";\\n\\n\\timport { labs } from \\"./data.json\\";\\n\\n\\timport \\"../reset.css\\";\\n\\timport \\"../global.css\\";\\n</script>\\n\\n<style>\\n\\tmain {\\n\\t\\tdisplay: flex;\\n\\t}\\n\\n\\tsection {\\n\\t\\tdisplay: flex;\\n\\t\\tposition: relative;\\n\\t\\tbox-sizing: border-box;\\n\\t\\theight: 100vh;\\n\\t\\twidth: 5vw;\\n\\t\\ttransition: width ease-out 250ms;\\n\\t\\toverflow-x: hidden;\\n\\t\\toverflow-y: scroll;\\n\\t\\tbackground: linear-gradient(90deg, var(--labColor) 0%, white 100%);\\n\\t}\\n\\n\\ta {\\n\\t\\tbox-sizing: border-box;\\n\\t\\tposition: sticky;\\n\\t\\ttop: 0;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\tpadding: 0.5rem;\\n\\t\\twriting-mode: vertical-lr;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tletter-spacing: 0.075em;\\n\\t\\tz-index: 20;\\n\\t}\\n\\n\\tdiv {\\n\\t\\tposition: relative;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tpadding: 0 10vw;\\n\\t\\tmargin-left: -44px;\\n\\t\\twidth: 85vw;\\n\\t\\tflex-shrink: 0;\\n\\t}\\n\\n\\t.selected {\\n\\t\\twidth: 85vw;\\n\\t}\\n\\n\\t.selected a {\\n\\t\\twidth: auto;\\n\\t\\theight: auto;\\n\\t}\\n</style>\\n\\n<main>\\n\\t{#each labs as lab}\\n\\t\\t<section\\n\\t\\t\\tclass:selected={$page.path.includes(lab.id)}\\n\\t\\t\\tstyle=\\"--labColor: {lab.color}\\"\\n\\t\\t>\\n\\t\\t\\t<a href={`/${lab.id}`}>{lab.name}</a>\\n\\t\\t\\t{#if $page.path.includes(lab.id)}\\n\\t\\t\\t\\t<div transition:fade={{ duration: 250 }}>\\n\\t\\t\\t\\t\\t<Header currentLab={lab.id} />\\n\\t\\t\\t\\t\\t<slot />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t</section>\\n\\t{/each}\\n</main>\\n"],"names":[],"mappings":"AAaC,IAAI,8BAAC,CAAC,AACL,OAAO,CAAE,IAAI,AACd,CAAC,AAED,OAAO,8BAAC,CAAC,AACR,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,KAAK,CAAC,QAAQ,CAAC,KAAK,CAChC,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,gBAAgB,KAAK,CAAC,CAAC,IAAI,UAAU,CAAC,CAAC,EAAE,CAAC,CAAC,KAAK,CAAC,IAAI,CAAC,AACnE,CAAC,AAED,CAAC,8BAAC,CAAC,AACF,UAAU,CAAE,UAAU,CACtB,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,MAAM,CACf,YAAY,CAAE,WAAW,CACzB,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,OAAO,CACvB,OAAO,CAAE,EAAE,AACZ,CAAC,AAED,GAAG,8BAAC,CAAC,AACJ,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,WAAW,CAAE,KAAK,CAClB,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,CAAC,AACf,CAAC,AAED,SAAS,8BAAC,CAAC,AACV,KAAK,CAAE,IAAI,AACZ,CAAC,AAED,wBAAS,CAAC,CAAC,eAAC,CAAC,AACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AACb,CAAC"}'
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<main class="${"svelte-1lrq658"}">${each(labs, (lab) => `<section style="${"--labColor: " + escape(lab.color)}" class="${["svelte-1lrq658", $page.path.includes(lab.id) ? "selected" : ""].join(" ").trim()}"><a${add_attribute("href", `/${lab.id}`, 0)} class="${"svelte-1lrq658"}">${escape(lab.name)}</a>
			${$page.path.includes(lab.id) ? `<div class="${"svelte-1lrq658"}">${validate_component(Header, "Header").$$render($$result, {currentLab: lab.id}, {}, {})}
					${slots.default ? slots.default({}) : ``}
				</div>` : ``}
		</section>`)}</main>`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: _layout
});
function load({error: error2, status}) {
  return {props: {error: error2, status}};
}
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {status} = $$props;
  let {error: error2} = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
    $$bindings.error(error2);
  return `<h1>${escape(status)}</h1>

<p>${escape(error2.message)}</p>


${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
});
var error = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Error,
  load
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var index$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Routes
});
const Visualcommunication = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>VC Lab</title>`, ""}`, ""}

<img src="${"/images/vc-ph.jpg"}" alt="${"vc"}">
<p>The Visual Communication Lab provides facilities for producing 2D graphic
	projects, including bookbinding equipment, an electronic cutter, various
	finishing tools, colour charts and resource manuals. The VC-Lab also offers
	support to faculty members teaching classes in areas related to graphic
	design, print media and paper-based assembly.
</p>

<p>The Lab Assistant can be consulted during regular office hours to assist in
	the realization of course-related projects. Reservation is required, and the
	space can accommodate six students at any given time.
</p>`;
});
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Visualcommunication
});
const Equipment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Electrical Cutter</h2>
<p>This cutter is perfect for all kinds of media cutting applications including
	vinyl, heat and image transfer media, card stock, contour cut stickers,
	labels, wrappers, hang tags, stencil cutting for paint masking and etching
	masking, plus many others applications.
</p>
<h2>Manual Guillotine Paper Cutter</h2>
<p>This heavy duty stack cutter is capable of easily slicing through 200 sheets
	of 20lb paper up to 17\u2033 long. It\u2019s equipped with precision measurement guides,
	a hand driven paper stop, a wheel is driven paper clamp to hold your paper in
	place, and some safety features,
</p>
<h2>Rotary Paper Trimmer</h2>
<p>Rotary paper trimmers use a round cutting blade, which slides along a rail.
	Rotary trimmers provide a very clean, accurate cut. Rotary trimmers work well
	for paper, photographs, and other materials.
</p>
<h2>Multi-Purpose Press</h2>
<p>This is a multipurpose press that can be used for: bookmaking, printmaking,
	pressed plants, collage, stamps, tearing straight/deckled edges. The robust
	construction and smooth turning spindle apply great pressure easily by hand.
	The aluminum press plate ensures uniform pressure over the entire surface.
	Working dimension: 15 1/4\u201D x 10 1/2\u201D x 5\u201D high.
</p>`;
});
var equipment = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Equipment
});
const Computation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Computation
});
const About$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var about$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: About$1
});
const Softsurface = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<p>blabla</p>`;
});
var softsurface = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Softsurface
});
const Sensor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<p>bloublou</p>`;
});
var sensor = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Sensor
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var about = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: About
});
export {init, render};
