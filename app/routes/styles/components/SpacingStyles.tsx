import { constants, FlexStartColumnContainer } from "@benny-eleventy/benny-ui";
import { SectionTitleText, DualColorChip, SectionDivider } from "@/components";

const SpacingStyles = () => {
	const { spaces } = constants;
	console.log(spaces);
	return (
		<>
			<SectionTitleText title="Spaces" />
			<FlexStartColumnContainer
				width="100%"
				height="auto"
				gap={constants.spaces.xsmall}
				padding={constants.spaces.xsmall}
			>
				{Object.keys(spaces).map((key) => (
					<DualColorChip
						key={key}
						keyText={key}
						//@ts-ignore
						valueText={spaces[key]}
						valueBackground="#06485d"
					/>
				))}
			</FlexStartColumnContainer>
			<SectionDivider width="60%" />
		</>
	);
};

export default SpacingStyles;
