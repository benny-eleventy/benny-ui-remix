import {
	fontSize,
	fontWeight,
	s_xxsmall,
	Text,
} from "@benny-eleventy/benny-ui";

interface SectionTitleTextProps {
	title: string;
}

const SectionTitleText = ({ title }: SectionTitleTextProps) => {
	return (
		<Text
			margin="0"
			padding="0"
			fontSize={fontSize["fs-large"]}
			fontWeight={`${fontWeight["fw-bold"]}`}
			color="white"
			paddingLeft={s_xxsmall}
			textTransform="capitalize"
			style={{
				alignSelf: "flex-start",
			}}
		>
			{title}
		</Text>
	);
};

export default SectionTitleText;
