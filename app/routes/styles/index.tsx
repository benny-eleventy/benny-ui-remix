import { Filters } from "@/components";
import { PageContainer } from "@/styles";
import {
	constants,
	OverflowFlexStartCenterAlignedColumnContainer,
} from "@benny-eleventy/benny-ui";
import { RadiiStyles, SpacingStyles, TypographyStyles } from "./components";

const index = () => {
	const stylesFilters = ["Typography", "Spacing", "Radii", "Shadows"];
	return (
		<PageContainer>
			<Filters data={stylesFilters} />
			<OverflowFlexStartCenterAlignedColumnContainer
				width="100%"
				height="auto"
				padding={constants.spaces.xsmall}
				paddingBottom={constants.spaces.xxlarge}
				gap={constants.spaces.xsmall}
			>
				<TypographyStyles />
				<SpacingStyles />
				<RadiiStyles />
			</OverflowFlexStartCenterAlignedColumnContainer>
		</PageContainer>
	);
};

export default index;
