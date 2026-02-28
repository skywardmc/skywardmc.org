import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";

export default defineConfig({
	site: "https://skywardmc.org",
	integrations: [sitemap(), expressiveCode(), icon(), mdx(), pagefind()],
	redirects: {
		"/project/adrenaline": "/adrenaline",
		"/project/additive": "/additive",
	},
	build: {
		target: "static",
	},
});
