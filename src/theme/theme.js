import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
	typography: {},
});

const lightTheme = createTheme({
	...baseTheme,
	palette: {
		type: "light",
		primary: {
			main: "#000",
		},
		secondary: {
			main: "#fff",
		},
	},
});

const darkTheme = createTheme({
	...baseTheme,
	palette: {
		type: "dark",
		primary: {
			main: "#000",
		},
		secondary: {
			main: "#fff",
		},
	},
});

export { lightTheme, darkTheme };
