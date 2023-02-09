import { CenterAlignedColumnContainer } from "@benny-eleventy/benny-ui";
import React from "react";

const StyledComponents = () => {
	return (
		<>
			<CenterAlignedColumnContainer
				width="25%"
				aspectRatio="1"
				background="black"
			/>
			<CenterAlignedColumnContainer
				width="25%"
				aspectRatio="1"
				background="black"
			/>
			<CenterAlignedColumnContainer
				width="25%"
				aspectRatio="1"
				background="black"
			/>
		</>
	);
};

export default StyledComponents;
