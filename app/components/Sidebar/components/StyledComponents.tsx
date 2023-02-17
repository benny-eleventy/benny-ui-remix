import { CenterAlignedColumnContainer, Icon } from "@benny-eleventy/benny-ui";
import { useTheme } from "styled-components";

const StyledComponents = () => {
	const listOfIcons = ["Author", "Hey", "Home"];
	return (
		<>
			{listOfIcons.map((icon) => {
				const RenderIcon = Icon[icon];
				return (
					<CenterAlignedColumnContainer
						key={icon}
						width="clamp(2rem,20%,3.5rem)"
						aspectRatio="1"
						background="black"
						// eslint-disable-next-line react-hooks/rules-of-hooks
						color={useTheme().color_100}
					>
						<RenderIcon size="32px" />
					</CenterAlignedColumnContainer>
				);
			})}
		</>
	);
};

export default StyledComponents;
