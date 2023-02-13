import { CenterAlignedColumnContainer } from "@benny-eleventy/benny-ui";

interface SectionDividerProps {
	width?: string;
	height?: string;
	backgroundColor?: string;
}

const SectionDivider = ({
	width = "80%",
	height = "2px",
	backgroundColor = "rgba(255,255,255,0.1)",
}: SectionDividerProps) => {
	return (
		<CenterAlignedColumnContainer
			width={width}
			height={height}
		></CenterAlignedColumnContainer>
	);
};

export default SectionDivider;
