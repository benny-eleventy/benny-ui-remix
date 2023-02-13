import {
	FlexStartCenterAlignedColumnContainer,
	OverflowFlexStartCenterAlignedColumnContainer,
	s_xsmall,
	s_xxsmall,
	themes,
} from "@benny-eleventy/benny-ui";
import { Filters } from "@/components";
import ThemeCard from "./Components/ThemeCard";

const index = () => {
	//filter out keys starting with "pure_color"
	console.log(themes);
	const colorHues = [
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

	const getTheme = (name: string, themeType: string) => {
		if (themeType === "dark") {
			return themes.filter((theme) => theme.name === `dark-${name}`)[0];
		} else {
			return themes.filter((theme) => theme.name === `light-${name}`)[0];
		}
	};

	return (
		<FlexStartCenterAlignedColumnContainer
			width="100%"
			height="90vh"
			padding={s_xsmall}
			gap={s_xxsmall}
		>
			<Filters data={colorHues} chipDisplayTextKey="name" />
			<OverflowFlexStartCenterAlignedColumnContainer width="100%">
				{colorHues.map((colorHue) => {
					return (
						<ThemeCard
							key={colorHue.name}
							themeHue={colorHue.name}
							darkTheme={getTheme(colorHue.name, "dark")}
							lightTheme={getTheme(colorHue.name, "light")}
						/>
					);
				})}
			</OverflowFlexStartCenterAlignedColumnContainer>
		</FlexStartCenterAlignedColumnContainer>
	);
};

export default index;
