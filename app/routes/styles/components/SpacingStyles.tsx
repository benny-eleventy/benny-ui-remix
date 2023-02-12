import { FlexStartColumnContainer, s_xsmall } from "@benny-eleventy/benny-ui";
import { SectionTitleText, DualColorChip, SectionDivider } from "@/components";

const SpacingStyles = () => {
	const spaces = {
		s_xxsmall: "clamp(0.5rem, calc(0.5rem + 0.30vw), 0.6rem)",
		s_xsmall: "clamp(0.79rem, calc(0.73rem + 0.30vw), 0.96rem)",
		s_small: "clamp(0.89rem, calc(0.78rem + 0.54vw), 1.20rem)",
		s_regular: "clamp(1.00rem, calc(0.83rem + 0.87vw), 1.50rem)",
		s_large: "clamp(1.13rem, calc(0.86rem + 1.30vw), 1.88rem)",
		s_xlarge: "clamp(1.27rem, calc(0.89rem + 1.88vw), 2.34rem)",
		s_xxlarge: "clamp(1.42rem, calc(0.90rem + 2.62vw), 2.93rem)",
		s_xxxlarge: "clamp(1.60rem, calc(0.89rem + 3.58vw), 3.66rem)",
	};

	return (
		<>
			<SectionTitleText title="Spaces" />
			<FlexStartColumnContainer
				width="100%"
				height="auto"
				gap={s_xsmall}
				padding={s_xsmall}
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
