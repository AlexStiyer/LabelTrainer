/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors:
			{
				background : {
					bottom: "#000A1E",
					dark: "#100E30",
					light: "#181644"
				},
				accent : {
					primary: "#009DE0",
					accent: "#F9F368"
				}
			},
		backgroundColor: theme => ({
			...theme("colors"),
			bottom: "#000A1E",
			dark: "#100E30",
			light: "#181644"
		}),

		extend: {}
	},
	variants: {
		extend: {},
	},
	plugins: [],
};