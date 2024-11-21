/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            boxShadow: {
                "inner-custom":
                    "inset 4px 4px 6px #7F7F7F, inset -4px -4px 6px #FFFFFF",
            },
        },
    },
    plugins: [],
};
