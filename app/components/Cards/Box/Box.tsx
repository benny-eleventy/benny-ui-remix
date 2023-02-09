import { CenterAlignedColumnContainer } from "@benny-eleventy/benny-ui";

interface BoxProps {
	noOfBoxes: number;
	width: string;
	height: string;
	minHeight?: string;
}

const Box = ({ noOfBoxes, width, height, minHeight }: BoxProps) => {
	return (
		<>
			{Array.from(Array(noOfBoxes).keys()).map((box) => (
				<CenterAlignedColumnContainer
					key={box}
					width={width}
					height={height}
					minHeight={minHeight}
					background="#F3B5FA"
				></CenterAlignedColumnContainer>
			))}
		</>
	);
};

export default Box;
