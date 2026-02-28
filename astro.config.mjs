import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";

import expressiveCode from "astro-expressive-code";

import icon from "astro-icon";

export default defineConfig({
    site: "https://skywardmc.org",
    integrations: [sitemap(), mdx(), pagefind(), expressiveCode(), icon()],
    redirects: {
        "/project/adrenaline": "/adrenaline",
        "/project/additive": "/additive",
    },
    build: {
        target: "static",
    },
});