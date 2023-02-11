//ignore ts check for this file
// @ts-nocheck
export const colorHues = [
	{
		name: "teal",
		hue: 180,
	},
	{
		name: "blue",
		hue: 210,
	},
	{
		name: "purple",
		hue: 270,
	},
];
const staticColors = {};

const colorGenrator = (colorHues: any[]) => {
	// @ts-ignore
	colorHues.forEach((color) => {
		// @ts-ignore
		staticColors[color.name] = {
			0: `hsl(${color.hue}, 33%, 92%)`,
			100: `hsl(${color.hue}, 93%, 89%)`,
			200: `hsl(${color.hue}, 100%, 81%)`,
			300: `hsl(${color.hue}, 97%, 71%)`,
			400: `hsl(${color.hue}, 79%, 60%)`,
			500: `hsl(${color.hue}, 99%, 48%)`,
			600: `hsl(${color.hue}, 91%, 39%)`,
			700: `hsl(${color.hue}, 90%, 30%)`,
			800: `hsl(${color.hue}, 72%, 17%)`,
			900: `hsl(${color.hue}, 9%, 100%)`,
		};
	});
	return staticColors;
};

export const darkPalletteGenerator = (colorHues: any[]) => {
	// @ts-ignore
	const pallette = colorHues.map((color: any) => {
		colorGenrator(colorHues);
		return {
			name: `dark-${color.name}`,
			variant: "dark",
			hue: color.hue,
			color: {
				...staticColors[color.name],
			},
			hues: {
				...staticColors[color.name],
			},
			appColor: {
				error: "hsla(0, 97%, 85%, 1)",
				success: "hsla(140.526, 60%, 75%, 1)",
				warning: "hsla(54.69, 92%, 76%, 1)",
				black: "hsla(0, 0%, 0%, 1)",
				white: "hsla(0, 0%, 100%, 1)",
				gray: {
					0: "hsla(0, 0%, 100%, 1)",
					100: "hsla(0, 0%, 98%, 1)",
					800: "hsla(0, 0%, 20%, 1)",
				},
			},
		};
	});
	return pallette;
};

export const lightPalletteGenerator = (colorHues: any[]) => {
	// @ts-ignore
	const pallette = colorHues.map((color: any) => {
		colorGenrator(colorHues);
		return {
			name: `light-${color.name}`,
			variant: "light",
			hue: color.hue,
			color: {
				...staticColors[color.name],
			},
			hues: {
				0: staticColors[color.name][900],
				100: staticColors[color.name][800],
				200: staticColors[color.name][700],
				300: staticColors[color.name][600],
				400: staticColors[color.name][500],
				500: staticColors[color.name][400],
				600: staticColors[color.name][300],
				700: staticColors[color.name][200],
				800: staticColors[color.name][100],
				900: staticColors[color.name][0],
			},
			appColor: {
				error: "hsla(0, 76%, 57%, 1)",
				warning: "hsla(47, 81%, 61%, 1)",
				success: "hsla(148, 48%, 43%, 1)",
				black: "hsla(0, 0%, 0%, 1)",
				white: "hsla(0, 0%, 100%, 1)",
				gray: {
					0: "hsla(0, 0%, 100%, 1)",
					100: "hsla(0, 0%, 98%, 1)",
					800: "hsla(0, 0%, 20%, 1)",
				},
			},
		};
	});
	return pallette;
};

export const generateColorPallette = (colorHues: any[]) => {
	const darkPallette = darkPalletteGenerator(colorHues);
	const lightPallette = lightPalletteGenerator(colorHues);
	return [...darkPallette, ...lightPallette];
};
