/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				black100: "#121213",
				black200: "#3a3a3c",

				white100: "#ffffff",
				white200: "#d3d6da",
			},
		},
	},
	plugins: [],
};
