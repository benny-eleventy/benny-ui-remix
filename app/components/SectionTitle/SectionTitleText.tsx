import { fs_regular, s_small, Text } from "@benny-eleventy/benny-ui";

interface SectionTitleTextProps {
	title: string;
}

const SectionTitleText = ({ title }: SectionTitleTextProps) => {
	return (
		<Text
			margin="0"
			padding="0"
			fontSize={fs_regular}
			color="white"
			paddingLeft={s_small}
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
