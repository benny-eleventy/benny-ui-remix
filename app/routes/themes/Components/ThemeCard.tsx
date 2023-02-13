import { ColorPallette, ThemeDemoCard } from "@/components";
import {
	Text,
	FlexStartCenterAlignedColumnContainer,
	s_xxsmall,
	CenterAlignedColumnContainer,
	s_xsmall,
	GridContainer,
	s_small,
	fs_regular,
	fw_bold,
	fs_small,
} from "@benny-eleventy/benny-ui";

interface ThemeCardProps {
	themeHue: string;
	darkTheme: any;
	lightTheme: any;
}

const ThemeCard = ({ themeHue, darkTheme, lightTheme }: ThemeCardProps) => {
	return (
		<FlexStartCenterAlignedColumnContainer
			width="98%"
			height="auto"
			padding={s_xxsmall}
			gap={s_xxsmall}
			border="1px solid rgba(255,255,255,0.16)"
		>
			<CenterAlignedColumnContainer
				width="auto"
				height="auto"
				paddingBlock={s_xxsmall}
				paddingInline={s_xsmall}
				background={darkTheme.color_500}
				alignSelf="flex-start"
			>
				<Text>{themeHue}</Text>
			</CenterAlignedColumnContainer>
			<GridContainer
				width="100%"
				height="auto"
				gridGap={s_small}
				gridTemplateColumns="auto 86%"
				padding={s_xxsmall}
				alignItems="center"
				justifyContent="center"
			>
				<Text color="white" justifySelf="start">
					Pure Colors
				</Text>
				<ColorPallette theme={darkTheme} isDarkTheme={true} />
			</GridContainer>
			<GridContainer
				width="100%"
				height="auto"
				gap="0"
				gridRowGap="0"
				gridColumnGap={s_xxsmall}
				gridTemplateColumns="repeat(2,1fr)"
				padding={s_small}
			>
				<FlexStartCenterAlignedColumnContainer
					width="100%"
					height="auto"
					padding={s_small}
					background="#303030"
					gap={s_small}
				>
					<Text color="white" justifySelf="start" fontSize={fs_regular}>
						Dark Theme
					</Text>
					<Text color="white" justifySelf="start" fontSize={fs_small}>
						Colors
					</Text>
					<ColorPallette theme={darkTheme} isDarkTheme={true} />
					<ThemeDemoCard theme={darkTheme} />
				</FlexStartCenterAlignedColumnContainer>
				<FlexStartCenterAlignedColumnContainer
					width="100%"
					height="auto"
					gap={s_small}
					padding={s_small}
					background="#C3CACF"
				>
					<Text color="black" justifySelf="start">
						Light Theme
					</Text>
					<Text color="black" justifySelf="start" fontSize={fs_small}>
						Colors
					</Text>
					<ColorPallette theme={lightTheme} isDarkTheme={false} />
					<ThemeDemoCard theme={lightTheme} />
				</FlexStartCenterAlignedColumnContainer>
			</GridContainer>
		</FlexStartCenterAlignedColumnContainer>
	);
};

export default ThemeCard;
