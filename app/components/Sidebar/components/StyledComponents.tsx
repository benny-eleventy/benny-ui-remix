import { CenterAlignedColumnContainer } from "@benny-eleventy/benny-ui";

const StyledComponents = () => {
	return (
		<>
			<CenterAlignedColumnContainer
				width="clamp(2rem,18%,3.5rem)"
				aspectRatio="1"
				background="black"
			/>
			<CenterAlignedColumnContainer
				width="clamp(2rem,18%,3.5rem)"
				aspectRatio="1"
				background="black"
			/>
			<CenterAlignedColumnContainer
				width="clamp(2rem,18%,3.5rem)"
				aspectRatio="1"
				background="black"
			/>
		</>
	);
};

export default StyledComponents;
