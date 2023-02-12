import { Filters } from "@/components";
import { PageContainer } from "@/styles";
import {
	OverflowFlexStartCenterAlignedColumnContainer,
	s_xsmall,
	s_xxlarge,
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
				padding={s_xsmall}
				paddingBottom={s_xxlarge}
				gap={s_xsmall}
			>
				<TypographyStyles />
				<SpacingStyles />
				<RadiiStyles />
			</OverflowFlexStartCenterAlignedColumnContainer>
		</PageContainer>
	);
};

export default index;
