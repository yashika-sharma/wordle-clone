import React from "react";
import menu from "../images/icons/menu.svg";

const Header = () => {
	const handleClick = () => {
		const theme = localStorage.getItem("preferred-theme");
		console.log("clicked", theme);

		if (theme) {
			if (theme === "dark") {
				document.documentElement.classList.remove("dark");
				localStorage.setItem("preferred-theme", "light");
			} else {
				document.documentElement.classList.add("dark");
				localStorage.setItem("preferred-theme", "dark");
			}
		} else {
			document.documentElement.classList.add("dark");

			localStorage.setItem("preferred-theme", "dark");
		}
	};
	return (
		<header className='flex flex-row justify-between dark:bg-black100 dark:border-b-black200 bg-white100 border-b-white200'>
			<img src={require("../images/icons/menu.svg")} alt='menu' />
			<button onClick={() => handleClick()}>button</button>
		</header>
	);
};

export default Header;
