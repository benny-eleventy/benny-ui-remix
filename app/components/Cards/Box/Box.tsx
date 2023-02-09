import { CenterAlignedColumnContainer } from "@benny-eleventy/benny-ui";

interface BoxProps {
	noOfBoxes: number;
	width: string;
	height: string;
	minHeight?: string;
	minWidth?: string;
}

const Box = ({ noOfBoxes, width, height, minHeight, minWidth }: BoxProps) => {
	return (
		<>
			{Array.from(Array(noOfBoxes).keys()).map((box) => (
				<CenterAlignedColumnContainer
					key={box}
					width={width}
					height={height}
					minHeight={minHeight}
					minWidth={minWidth}
					background="#F3B5FA"
					flexShrink="0"
				></CenterAlignedColumnContainer>
			))}
		</>
	);
};

export default Box;
