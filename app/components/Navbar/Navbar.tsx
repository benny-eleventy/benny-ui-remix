import {
	constants,
	CenterAlignedColumnContainer,
	Text,
} from "@benny-eleventy/benny-ui";

const Navbar = () => {
	return (
		<CenterAlignedColumnContainer
			width="100%"
			height="10vh"
			background="black"
			position="sticky"
			top="0"
			borderRadius="0"
			padding={constants.spaces.small}
		>
			<Text color="white">This is navbar</Text>
		</CenterAlignedColumnContainer>
	);
};

export default Navbar;
