import React, {
	createContext,
	useReducer,
	useEffect,
	useCallback,
} from "react";

let SET_THEME;

export const darkModeContext = createContext();

export const darkModeReducer = (state, action) => {
	switch (action.type) {
		case SET_THEME:
			return { ...state, darkMode: action.payload };
		default:
			return state;
	}
};

export const DarkModeState = (props) => {
	const initialState = {
		darkMode: false,
	};

	const [state, dispatch] = useReducer(darkModeReducer, initialState);

	const setDarkMode = useCallback(async (bool) => {
		dispatch({ type: "SET_THEME", payload: bool });
	}, []);

	useEffect(() => {
		const theme = localStorage.getItem("preferred-theme");
		if (theme) {
			if (theme === "dark") {
				setDarkMode(true);
			} else {
				setDarkMode(false);
			}
		} else {
			setDarkMode(false);
			localStorage.setItem("preferred-theme", "light");
		}
	}, [setDarkMode]);

	return (
		<darkModeContext.Provider value={{ darkMode: state.darkMode, setDarkMode }}>
			{props.children}
		</darkModeContext.Provider>
	);
};
