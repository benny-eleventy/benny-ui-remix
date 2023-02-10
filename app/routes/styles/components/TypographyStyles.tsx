import { SectionTitleText, DualColorChip, SectionDivider } from "@/components";
import { constants, FlexStartColumnContainer } from "@benny-eleventy/benny-ui";

const Typography = () => {
	const { typography } = constants;
	console.log(typography);
	return (
		<>
			<SectionTitleText title="Font Sizes" />
			<FlexStartColumnContainer
				width="100%"
				height="auto"
				gap={constants.spaces.xsmall}
				padding={constants.spaces.xsmall}
			>
				{Object.keys(typography.size).map((key) => (
					<DualColorChip
						key={key}
						keyText={key}
						//@ts-ignore
						valueText={typography.size[key]}
						valueBackground="#06485d"
					/>
				))}
			</FlexStartColumnContainer>
			<SectionDivider width="60%" />
			<SectionTitleText title="Font Sizes" />
			<FlexStartColumnContainer
				width="100%"
				height="auto"
				gap={constants.spaces.xsmall}
				padding={constants.spaces.xsmall}
			>
				{Object.keys(typography.weight).map((key) => (
					<DualColorChip
						key={key}
						keyText={key}
						//@ts-ignore
						valueText={typography.weight[key]}
						valueBackground="#06485d"
					/>
				))}
			</FlexStartColumnContainer>
			<SectionDivider width="60%" />
			<SectionTitleText title="Line Heights" />
			<FlexStartColumnContainer
				width="100%"
				height="auto"
				gap={constants.spaces.xsmall}
				padding={constants.spaces.xsmall}
			>
				{Object.keys(typography.lineHeight).map((key) => (
					<DualColorChip
						key={key}
						keyText={key}
						//@ts-ignore
						valueText={typography.lineHeight[key]}
						valueBackground="#06485d"
					/>
				))}
			</FlexStartColumnContainer>
			<SectionDivider width="60%" />
		</>
	);
};

export default Typography;
