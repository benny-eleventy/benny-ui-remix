import {
	CenterAlignedColumnContainer,
	CenterAlignedRowContainer,
	constants,
	Text,
} from "@benny-eleventy/benny-ui";
import StyledComponents from "./components/StyledComponents";

const Sidebar = () => {
	const sidebarOptions = [
		{
			option: "Styled Components",
			background: "linear-gradient(95.46deg, #3BA8F7 0.6%, #DC6BDE 97.25%)",
			DisplayComponent: <StyledComponents />,
		},
		{
			option: "Styles",
			background: "linear-gradient(95.46deg, #64FFF6 0.6%, #3772CA 97.25%)",
			DisplayComponent: <StyledComponents />,
		},
		{
			option: "Components",
			background: "linear-gradient(95.41deg, #774FFC 1.67%, #60C5A1 103.49%)",
			DisplayComponent: <StyledComponents />,
		},
		{
			option: "Icons",
			background: "linear-gradient(95.46deg, #1AF4E7 0.6%, #8BFB82 97.25%)",
			DisplayComponent: <StyledComponents />,
		},
		{
			option: "Themes",
			background: "linear-gradient(96.78deg, #BC96ED 0%, #81E0FE 108.45%)",
			DisplayComponent: <StyledComponents />,
		},
		{
			option: "Logos",
			background: "linear-gradient(95.46deg, #FB9393 0.6%, #F1A2FE 97.25%)",
			DisplayComponent: <StyledComponents />,
		},
	];
	return (
		<CenterAlignedColumnContainer
			width="100%"
			height="90vh"
			padding={constants.spaces.xsmall}
			gap={constants.spaces.xsmall}
			border="1px solid white"
		>
			{sidebarOptions.map(({ option, DisplayComponent, background }) => {
				return (
					<CenterAlignedColumnContainer
						width="100%"
						height="13vh"
						padding={constants.spaces.xxsmall}
						gap={constants.spaces.xxsmall}
						key={option}
						cursor="pointer"
					>
						<Text
							margin="0"
							fontSize={constants.typography.size.small}
							color="white"
							paddingLeft={constants.spaces.xxsmall}
							style={{
								alignSelf: "flex-start",
							}}
						>
							{option}
						</Text>
						<CenterAlignedRowContainer
							width="90%"
							height="70%"
							background={background}
							gap={constants.spaces.xsmall}
							padding={constants.spaces.xxsmall}
						>
							{DisplayComponent}
						</CenterAlignedRowContainer>
					</CenterAlignedColumnContainer>
				);
			})}
		</CenterAlignedColumnContainer>
	);
};

export default Sidebar;
