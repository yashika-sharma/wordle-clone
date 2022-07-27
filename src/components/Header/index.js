import React, { useContext } from "react";

import { darkModeContext } from "../../theme/ThemeHandler";

const Header = () => {
	const { darkMode, setDarkMode } = useContext(darkModeContext);

	const handleClick = () => {
		const theme = localStorage.getItem("preferred-theme");
		console.log("clicked", theme);

		if (theme) {
			if (theme === "dark") {
				setDarkMode(false);
				localStorage.setItem("preferred-theme", "light");
			} else {
				setDarkMode(true);
				localStorage.setItem("preferred-theme", "dark");
			}
		} else {
			setDarkMode(true);
			localStorage.setItem("preferred-theme", "dark");
		}
	};
	return (
		<header>
			<button
				onClick={() => handleClick()}
				className={`${!darkMode ? "bg-black" : "bg-purple-600"} border-2`}
			>
				fffrf
			</button>
		</header>
	);
};

export default Header;
