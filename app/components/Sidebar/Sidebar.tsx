import {
	CenterAlignedRowContainer,
	FlexStartCenterAlignedColumnContainer,
	GridContainer,
	Text,
	fs_small,
	s_xsmall,
	s_xxsmall,
} from "@benny-eleventy/benny-ui";
import { useNavigate } from "@remix-run/react";
import StyledComponents from "./components/StyledComponents";

const Sidebar = () => {
	const sidebarOptions = [
		{
			option: "Styled Components",
			background: "linear-gradient(95.46deg, #3BA8F7 0.6%, #DC6BDE 97.25%)",
			DisplayComponent: <StyledComponents />,
			path: "/",
		},
		{
			option: "Styles",
			background: "linear-gradient(95.46deg, #64FFF6 0.6%, #3772CA 97.25%)",
			DisplayComponent: <StyledComponents />,
			path: "/styles",
		},
		{
			option: "Components",
			background: "linear-gradient(95.41deg, #774FFC 1.67%, #60C5A1 103.49%)",
			DisplayComponent: <StyledComponents />,
			path: "/components",
		},
		{
			option: "Icons",
			background: "linear-gradient(95.46deg, #1AF4E7 0.6%, #8BFB82 97.25%)",
			DisplayComponent: <StyledComponents />,
			path: "/icons",
		},
		{
			option: "Themes",
			background: "linear-gradient(96.78deg, #BC96ED 0%, #81E0FE 108.45%)",
			DisplayComponent: <StyledComponents />,
			path: "/themes",
		},
		{
			option: "Logos",
			background: "linear-gradient(95.46deg, #FB9393 0.6%, #F1A2FE 97.25%)",
			DisplayComponent: <StyledComponents />,
			path: "/logos",
		},
	];
	const navigate = useNavigate();

	return (
		<GridContainer
			width="100%"
			height="auto"
			gridAutoFlow="row"
			gridAutoRows="min-content"
			alignItems="start"
			padding={s_xsmall}
			gridGap="0"
			alignContent="start"
		>
			{sidebarOptions.map(({ option, DisplayComponent, background, path }) => {
				return (
					<FlexStartCenterAlignedColumnContainer
						width="100%"
						height="auto"
						padding={s_xxsmall}
						key={option}
						cursor="pointer"
						onClick={() => navigate(path)}
					>
						<Text
							fontSize={fs_small}
							color="white"
							paddingLeft={s_xxsmall}
							alignSelf="flex-start"
						>
							{option}
						</Text>
						<CenterAlignedRowContainer
							width="90%"
							height="auto"
							background={background}
							padding={s_xxsmall}
						>
							{DisplayComponent}
						</CenterAlignedRowContainer>
					</FlexStartCenterAlignedColumnContainer>
				);
			})}
		</GridContainer>
	);
};

export default Sidebar;
