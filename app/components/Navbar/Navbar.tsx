import {
	CenterAlignedColumnContainer,
	Text,
	s_small,
} from "@benny-eleventy/benny-ui";

const Navbar = () => {
	return (
		<CenterAlignedColumnContainer
			width="100%"
			height="6vh"
			background="black"
			position="sticky"
			top="0"
			borderRadius="0"
			padding={s_small}
		>
			<Text color="white">This is navbar</Text>
		</CenterAlignedColumnContainer>
	);
};

export default Navbar;
