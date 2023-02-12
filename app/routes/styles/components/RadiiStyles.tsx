import { FlexStartColumnContainer, s_xsmall } from "@benny-eleventy/benny-ui";
import { SectionTitleText, DualColorChip, SectionDivider } from "@/components";

const RadiiStyles = () => {
	const radii = {
		radii_small: "0.25rem",
		radii_regular: "0.5rem",
		radii_large: "1rem",
		radii_xlarge: "1.25rem",
		radii_circle: "50%",
	};

	return (
		<>
			<SectionTitleText title="Radii" />
			<FlexStartColumnContainer
				width="100%"
				height="auto"
				gap={s_xsmall}
				padding={s_xsmall}
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
