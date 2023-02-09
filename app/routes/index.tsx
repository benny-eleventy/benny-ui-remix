import {
	constants,
	FlexStartCenterAlignedColumnContainer,
	Text,
} from "@benny-eleventy/benny-ui";

export default function Index() {
	return (
		<>
			<FlexStartCenterAlignedColumnContainer
				width="100%"
				height="120vh"
				overflowY="scroll"
				padding={constants.spaces.xsmall}
				border="1px solid white"
				style={{
					scrollbarWidth: "thin",
					scrollbarColor: "lightgreen black",
				}}
			>
				<Text color="white">This is Page</Text>
			</FlexStartCenterAlignedColumnContainer>
		</>
	);
}
