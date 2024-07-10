import { content, plugin } from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite-react/lib/esm/**/*.js",
		content(),
	],
	theme: {
		extend: {},
	},
	plugins: [plugin()],
};
