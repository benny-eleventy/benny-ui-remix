import {
	CenterAlignedColumnContainer,
	FlexStartCenterAlignedColumnContainer,
	FlexStartColumnContainer,
	GridContainer,
	Text,
	br_circle,
	br_large,
	fs_regular,
	fs_small,
	fs_xsmall,
	s_small,
	s_xxsmall,
} from "@benny-eleventy/benny-ui";

interface ThemeDemoCardProps {
	theme: any;
}

const ThemeDemoCard = ({ theme }: ThemeDemoCardProps) => {
	return (
		<FlexStartCenterAlignedColumnContainer
			width="70%"
			height="auto"
			gap={s_small}
			padding={s_small}
			background={theme.color_900}
			borderRadius={br_large}
		>
			<GridContainer
				width="100%"
				height="auto"
				gridTemplateColumns="20% auto"
				alignItems="center"
				gridColumnGap={s_small}
			>
				<CenterAlignedColumnContainer
					width="100%"
					aspectRatio="1"
					background={theme.color_300}
					borderRadius={br_circle}
				></CenterAlignedColumnContainer>
				<FlexStartColumnContainer
					style={{
						gap: s_xxsmall,
					}}
				>
					<Text color={theme.color_0} justifySelf="start" fontSize={fs_small}>
						Steve Jobs
					</Text>
					<Text
						color={theme.color_200}
						justifySelf="start"
						fontSize={fs_xsmall}
					>
						CEO
					</Text>
				</FlexStartColumnContainer>
			</GridContainer>
			<Text color={theme.color_400} fontSize={fs_regular}>
				Stay Hungry, Stay Foolish!
			</Text>
			<CenterAlignedColumnContainer
				width="auto"
				height="auto"
				background={theme.color_500}
				paddingBlock={s_xxsmall}
				paddingInline={s_small}
			>
				<Text color={theme.pureColor_900} fontSize={fs_small}>
					Read more
				</Text>
			</CenterAlignedColumnContainer>
		</FlexStartCenterAlignedColumnContainer>
	);
};

export default ThemeDemoCard;
