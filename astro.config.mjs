import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import { satteri } from "@astrojs/markdown-satteri";
import pagefind from "astro-pagefind";

export default defineConfig({
	site: "https://skywardmc.org",
	image: {
		layout: "full-width",
		remotePatterns: [
			{ protocol: "https", hostname: "githubusercontent.com" },
			{ protocol: "https", hostname: "**.githubusercontent.com" },
			{ protocol: "https", hostname: "modrinth.com" },
			{ protocol: "https", hostname: "**.modrinth.com" },
		],
	},
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		processor: satteri({
			hastPlugins: [
				{
					name: "table-wrapper",
					element: {
						filter: ["table"],
						visit(node, ctx) {
							ctx.wrapNode(node, {
								type: "element",
								tagName: "div",
								properties: { className: ["overflow-x-auto"] },
								children: [],
							});
						},
					},
				},
			],
		}),
	},
	integrations: [
		sitemap(),
		expressiveCode({
			themes: ["dracula", "catppuccin-latte"],
		}),
		icon(),
		mdx(),
		pagefind(),
	],
	redirects: {
		"/discord": "https://discord.gg/36Tv44cYte",
		"/matrix": "https://matrix.to/#/#skywardmc:skywardmc.org",
		"/project/adrenaline": "/adrenaline",
		"/project/additive": "/additive",
	},
});
