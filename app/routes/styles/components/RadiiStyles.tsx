import { constants, FlexStartColumnContainer } from "@benny-eleventy/benny-ui";
import { SectionTitleText, DualColorChip, SectionDivider } from "@/components";

const RadiiStyles = () => {
	const { radii } = constants;
	return (
		<>
			<SectionTitleText title="Radii" />
			<FlexStartColumnContainer
				width="100%"
				height="auto"
				gap={constants.spaces.xsmall}
				padding={constants.spaces.xsmall}
			>
				{Object.keys(radii).map((key) => (
					<DualColorChip
						key={key}
						keyText={key}
						//@ts-ignore
						valueText={radii[key]}
						valueBackground="#06485d"
					/>
				))}
			</FlexStartColumnContainer>
			<SectionDivider width="60%" />
		</>
	);
};

export default RadiiStyles;
