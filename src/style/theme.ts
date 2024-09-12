import { createGlobalStyle } from "styled-components";

const commonLightColors = {
	background: "#FFFFFF",
	textColor: "#000000",
	shade: "#FFFFFF"
};

const commonDarkColors = {
	background: "#000000",
	textColor: "#FFFFFF",
	shade: "#111827"
};

interface AccentScheme {
	teal: string,
	red: string,
	pink: string,
	purple:string,
	blue: string,
}

export const accentPrimaryColors: AccentScheme = {
	teal: "#14b8a6",
	red: "#ef4444",
	pink: "#ec4899",
	purple: "#a855f7",
	blue: "#0ea5e9",
};


export const lightTheme = (accent: string) => {
	const accentColors = {
		primary: accentPrimaryColors[accent as keyof AccentScheme],
	};

	return {
		...accentColors,
		...commonLightColors,
	};
};

export const darkTheme = (accent: string) => {
	const accentColors = {
		primary: accentPrimaryColors[accent as keyof AccentScheme],
	};

	return {
		...accentColors,
		...commonDarkColors,
	};
};

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		box-sizing: border-box;
		list-style: none;
		text-decoration: none;
	}

	html {
		scroll-behavior: smooth;
		background: ${(props) => props.theme.background};
	}

	body {
		line-height: 1.7;
		transition: 0.5s;
		z-index: 0;

		&::-webkit-scrollbar {
			width: 0.3rem;
		}

		&::-webkit-scrollbar-thumb {
			background: ${(props) => props.theme.primary};
			border-radius: 10px;
		}
	}

	input[type=checkbox]:checked {
		accent-color: ${(props) => props.theme.primary};
	}

	.accent-border {
		border: 3px solid ${(props) => props.theme.primary};
	}

	.accent-border-bottom {
		border-bottom: 3px solid ${(props) => props.theme.primary};
	}

	.accent-border-thin {
		border: 2px solid ${(props) => props.theme.primary};
	}

	.accent-background {
		background: ${(props) => props.theme.primary};
		color: #FFFFFF;
		font-weight: bold;
	}

	.accent-text {
		color: ${(props) => props.theme.primary};
	}

	.shade-background {
		background-color: ${(props) => props.theme.shade};
		color: ${(props) => props.theme.textColor};
	}

	.theme-text {
		color: ${(props) => props.theme.textColor}
	}

	input[type="datetime-local"]::-webkit-calendar-picker-indicator {
		background: transparent;
		bottom: 0;
		color: transparent;
		cursor: pointer;
		height: auto;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		width: auto;
	}
`;
