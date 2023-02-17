import { SectionTitleText } from "@/components";
import {
	CenterAlignedColumnContainer,
	fs_small,
	Icon,
	OverflowFlexStartCenterAlignedColumnContainer,
	s_small,
	s_xxlarge,
	s_xxsmall,
	Text,
	WrappedFlexStartCenterAlignedColumnContainer,
} from "@benny-eleventy/benny-ui";
import { useTheme } from "styled-components";

const index = () => {
	const listOfIcons = [
		"Author",
		"Cancel",
		"Checkbox",
		"Chevron",
		"Close",
		"Hey",
		"Home",
		"Menu",
		"Quotes",
		"Search",
		"Tags",
		"Theme",
		"ColorSplash",
		"Share",
		"Copy",
	];

	return (
		<OverflowFlexStartCenterAlignedColumnContainer
			width="98%"
			height="auto"
			padding={s_small}
			paddingBottom={s_xxlarge}
		>
			<SectionTitleText title="Icons" />
			<WrappedFlexStartCenterAlignedColumnContainer
				width="100%"
				height="auto"
				padding={s_small}
			>
				{listOfIcons.map((icon) => {
					const RenderIcon = Icon[icon];
					return (
						<CenterAlignedColumnContainer
							border="1px solid rgba(255,255,255,0.7)"
							key={icon}
							padding={s_xxsmall}
							color={useTheme().color_100}
							width="128px"
							aspectRatio="1/1.1"
						>
							<RenderIcon size="48px" />
							<Text color="rgba(255,255,255,0.7)" fontSize={fs_small}>
								{icon}
							</Text>
						</CenterAlignedColumnContainer>
					);
				})}
			</WrappedFlexStartCenterAlignedColumnContainer>
		</OverflowFlexStartCenterAlignedColumnContainer>
	);
};

export default index;
