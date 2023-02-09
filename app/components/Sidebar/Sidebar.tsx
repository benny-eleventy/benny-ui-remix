import {
	CenterAlignedColumnContainer,
	CenterAlignedRowContainer,
	constants,
	FlexStartCenterAlignedColumnContainer,
	Text,
} from "@benny-eleventy/benny-ui";

const Sidebar = () => {
	const sidebarOptions = [
		"Styled Components",
		"Styles",
		"Themes",
		"Icons",
		"Logos",
		"Components",
	];
	return (
		<CenterAlignedColumnContainer
			width="100%"
			height="90vh"
			padding={constants.spaces.xsmall}
			gap={constants.spaces.xsmall}
			border="1px solid white"
		>
			{sidebarOptions.map((option) => {
				return (
					<FlexStartCenterAlignedColumnContainer
						width="100%"
						height="16vh"
						padding={constants.spaces.xxsmall}
						gap={constants.spaces.xxsmall}
						key={option}
					>
						<Text
							margin="0"
							fontSize={constants.typography.size.small}
							color="white"
						>
							{option}
						</Text>
						<CenterAlignedRowContainer
							width="96%"
							height="80%"
							background="lightblue"
							gap={constants.spaces.xxsmall}
							padding={constants.spaces.xxsmall}
						>
							<CenterAlignedColumnContainer
								width="30%"
								height="100%"
								background="black"
							/>
							<CenterAlignedColumnContainer
								width="30%"
								height="100%"
								background="black"
							/>
							<CenterAlignedColumnContainer
								width="30%"
								height="100%"
								background="black"
							/>
						</CenterAlignedRowContainer>
					</FlexStartCenterAlignedColumnContainer>
				);
			})}
		</CenterAlignedColumnContainer>
	);
};

export default Sidebar;
