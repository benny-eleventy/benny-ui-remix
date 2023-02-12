import { SectionTitleText, DualColorChip, SectionDivider } from "@/components";
import { FlexStartColumnContainer, s_xsmall } from "@benny-eleventy/benny-ui";

const Typography = () => {
	const fontSizes = {
		fs_xxsmall: "clamp(0.79rem, calc(0.73rem + 0.30vw), 0.96rem)",
		fs_small: "clamp(0.89rem, calc(0.78rem + 0.54vw), 1.20rem)",
		fs_regular: "clamp(1.00rem, calc(0.83rem + 0.87vw), 1.50rem)",
		fs_large: "clamp(1.13rem, calc(0.86rem + 1.30vw), 1.88rem)",
		fs_xlarge: "clamp(1.27rem, calc(0.89rem + 1.88vw), 2.34rem)",
		fs_xxlarge: "clamp(1.42rem, calc(0.90rem + 2.62vw), 2.93rem)",
		fs_xxxlarge: "clamp(1.60rem, calc(0.89rem + 3.58vw), 3.66rem)",
	};

	const fontWeights = {
		fw_light: 300,
		fw_regular: 400,
		fw_bold: 700,
		fw_200: 200,
		fw_300: 300,
		fw_400: 400,
		fw_500: 500,
		fw_600: 600,
		fw_700: 700,
		fw_800: 800,
	};
	const lineHeights = {
		lh_small: "125%",
		lh_regular: "150%",
		lh_large: "175%",
	};
	return (
		<>
			<SectionTitleText title="Font Sizes" />
			<FlexStartColumnContainer
				width="100%"
				height="auto"
				gap={s_xsmall}
				padding={s_xsmall}
			>
				{Object.keys(fontSizes).map((key) => (
					<DualColorChip
						key={key}
						keyText={key}
						//@ts-ignore
						valueText={fontSizes[key]}
						valueBackground="#06485d"
					/>
				))}
			</FlexStartColumnContainer>
			<SectionDivider width="60%" />
			<SectionTitleText title="Font Sizes" />
			<FlexStartColumnContainer
				width="100%"
				height="auto"
				gap={s_xsmall}
				padding={s_xsmall}
			>
				{Object.keys(fontWeights).map((key) => (
					<DualColorChip
						key={key}
						keyText={key}
						//@ts-ignore
						valueText={fontWeights[key]}
						valueBackground="#06485d"
					/>
				))}
			</FlexStartColumnContainer>
			<SectionDivider width="60%" />
			<SectionTitleText title="Line Heights" />
			<FlexStartColumnContainer
				width="100%"
				height="auto"
				gap={s_xsmall}
				padding={s_xsmall}
			>
				{Object.keys(lineHeights).map((key) => (
					<DualColorChip
						key={key}
						keyText={key}
						//@ts-ignore
						valueText={lineHeights[key]}
						valueBackground="#06485d"
					/>
				))}
			</FlexStartColumnContainer>
			<SectionDivider width="60%" />
		</>
	);
};

export default Typography;
