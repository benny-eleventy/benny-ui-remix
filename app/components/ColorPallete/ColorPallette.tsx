import {
	GridContainer,
	CenterAlignedColumnContainer,
	s_xxsmall,
	fs_xsmall,
	Text,
	br_regular,
} from "@benny-eleventy/benny-ui";

interface ColorPalletteProps {
	theme: any;
	isDarkTheme: boolean;
}

const ColorPallette = ({ theme, isDarkTheme }: ColorPalletteProps) => {
	return (
		<GridContainer
			width="100%"
			height="auto"
			gridTemplateColumns="repeat(10, 1fr)"
			gridGap="0"
		>
			{Object.keys(theme)
				.filter((key) => key.startsWith("color"))
				.map((key, index) => {
					return (
						<CenterAlignedColumnContainer
							key={index}
							background={theme[key]}
							borderRadius="0"
							padding={s_xxsmall}
							style={{
								borderTopLeftRadius: index % 10 === 0 ? br_regular : "0",
								borderTopRightRadius: index % 10 === 9 ? br_regular : "0",
								borderBottomLeftRadius: index % 10 === 0 ? br_regular : "0",
								borderBottomRightRadius: index % 10 === 9 ? br_regular : "0",
							}}
						>
							<Text fontSize={fs_xsmall} color={getTextColor(isDarkTheme, key)}>
								{key.split("_")[1]}
							</Text>
						</CenterAlignedColumnContainer>
					);
				})}
		</GridContainer>
	);
};

export default ColorPallette;

function getTextColor(isDarkTheme: boolean, key: string): string | undefined {
	if (isDarkTheme) {
		return Number(key.split("_")[1]) > 600 ? "white" : "black";
	} else {
		return Number(key.split("_")[1]) > 600 ? "black" : "white";
	}
}
