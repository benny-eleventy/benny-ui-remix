//ignore ts check for this file
// @ts-nocheck
export const colorHues = [
	{
		name: "teal",
		hue: 187,
	},
	{
		name: "cyan",
		hue: 174,
	},
	{
		name: "blue",
		hue: 207,
	},
	{
		name: "lightblue",
		hue: 199,
	},
	{
		name: "indigo",
		hue: 231,
	},
	{
		name: "purple",
		hue: 270,
	},
	{
		name: "lime",
		hue: 66,
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
			900: `hsl(${color.hue}, 9%, 10%)`,
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
			pureColor_0: staticColors[color.name][0],
			pureColor_100: staticColors[color.name][100],
			pureColor_200: staticColors[color.name][200],
			pureColor_300: staticColors[color.name][300],
			pureColor_400: staticColors[color.name][400],
			pureColor_500: staticColors[color.name][500],
			pureColor_600: staticColors[color.name][600],
			pureColor_700: staticColors[color.name][700],
			pureColor_800: staticColors[color.name][800],
			pureColor_900: staticColors[color.name][900],
			color_0: staticColors[color.name][0],
			color_100: staticColors[color.name][100],
			color_200: staticColors[color.name][200],
			color_300: staticColors[color.name][300],
			color_400: staticColors[color.name][400],
			color_500: staticColors[color.name][500],
			color_600: staticColors[color.name][600],
			color_700: staticColors[color.name][700],
			color_800: staticColors[color.name][800],
			color_900: staticColors[color.name][900],
			black_color: "hsla(0, 0%, 0%, 1)",
			error_color: "hsla(0, 97%, 85%, 1)",
			gray_0: "hsla(0, 0%, 100%, 1)",
			gray_100: "hsla(0, 0%, 98%, 1)",
			gray_800: "hsla(0, 0%, 20%, 1)",
			hover_color: "hsla(0, 33%, 92%, 0.03)",
			success_color: "hsla(140.526, 60%, 75%, 1)",
			warning_color: "hsla(54.69, 92%, 76%, 1)",
			white_color: "hsla(0, 0%, 100%, 1)",
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
			pureColor_0: staticColors[color.name][0],
			pureColor_100: staticColors[color.name][100],
			pureColor_200: staticColors[color.name][200],
			pureColor_300: staticColors[color.name][300],
			pureColor_400: staticColors[color.name][400],
			pureColor_500: staticColors[color.name][500],
			pureColor_600: staticColors[color.name][600],
			pureColor_700: staticColors[color.name][700],
			pureColor_800: staticColors[color.name][800],
			pureColor_900: staticColors[color.name][900],
			color_0: staticColors[color.name][900],
			color_100: staticColors[color.name][800],
			color_200: staticColors[color.name][700],
			color_300: staticColors[color.name][600],
			color_400: staticColors[color.name][500],
			color_500: staticColors[color.name][400],
			color_600: staticColors[color.name][300],
			color_700: staticColors[color.name][200],
			color_800: staticColors[color.name][100],
			color_900: staticColors[color.name][0],
			black_color: "hsla(0, 0%, 0%, 1)",
			error_color: "hsla(0, 97%, 85%, 1)",
			gray_0: "hsla(0, 0%, 100%, 1)",
			gray_100: "hsla(0, 0%, 98%, 1)",
			gray_800: "hsla(0, 0%, 20%, 1)",
			hover_color: "hsla(0, 33%, 92%, 0.03)",
			success_color: "hsla(140.526, 60%, 75%, 1)",
			warning_color: "hsla(54.69, 92%, 76%, 1)",
			white_color: "hsla(0, 0%, 100%, 1)",
		};
	});
	return pallette;
};

export const generateColorPallette = (colorHues: any[]) => {
	const darkPallette = darkPalletteGenerator(colorHues);
	const lightPallette = lightPalletteGenerator(colorHues);
	return [...darkPallette, ...lightPallette];
};
