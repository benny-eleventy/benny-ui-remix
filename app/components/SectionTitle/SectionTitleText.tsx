import { constants, Text } from "@benny-eleventy/benny-ui";

interface SectionTitleTextProps {
	title: string;
}

const SectionTitleText = ({ title }: SectionTitleTextProps) => {
	return (
		<Text
			margin="0"
			padding="0"
			fontSize={constants.typography.size.large}
			fontWeight={`${constants.typography.weight.bold}`}
			color="white"
			paddingLeft={constants.spaces.xxsmall}
			style={{
				alignSelf: "flex-start",
			}}
		>
			{title}
		</Text>
	);
};

export default SectionTitleText;
