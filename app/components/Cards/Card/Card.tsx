//@ts-nocheck
import { constants, GridContainer, Text } from "@benny-eleventy/benny-ui";
import type { StyledComponent } from "styled-components";
import type { ContainerProps } from "@benny-eleventy/benny-ui/dist/styles/container/container.types";
import type { DefaultTheme } from "styled-components";

interface CardProps {
	//ParentContainer as styled component
	ParentContainer?: StyledComponent<"div", DefaultTheme, ContainerProps, never>;
	ChildContainer?: () => JSX.Element;
	containerName?: string;
	containerInfomartion?: string;
	notes?: string;
	variant: "horizontal" | "vertical";
}

const Card = ({
	ParentContainer,
	ChildContainer,
	containerName,
	containerInfomartion,
	notes,
	variant,
}: CardProps) => {
	return (
		<GridContainer
			width={variant === "horizontal" ? "49%" : "32%"}
			aspectRatio={variant === "horizontal" ? "2/0.8" : "1/1.1"}
			gridTemplateColumns={variant === "horizontal" ? "30% 70%" : "100%"}
			gridTemplateRows={variant === "vertical" ? "30% 70%" : "100%"}
			background="rgba(255, 255, 255, 0.1)"
			alignItems="center"
			justifyContent="center"
			padding={constants.spaces.xsmall}
			gap={constants.spaces.xsmall}
		>
			<ParentContainer
				background="#8287FF"
				width="100%"
				height="100%"
				gap={constants.spaces.xsmall}
				padding={constants.spaces.xsmall}
			>
				{ChildContainer()}
			</ParentContainer>
			<GridContainer
				width="100%"
				height="100%"
				gridTemplateRows="10% 55% 35%"
				alignItems="center"
				justifyContent="center"
				padding={constants.spaces.xxsmall}
				gap={constants.spaces.xxsmall}
				color="white"
			>
				<Text
					width="80%"
					margin="0"
					fontSize={constants.typography.size.small}
					fontWeight={constants.typography.weight.bold}
				>
					{containerName}
				</Text>
				<Text margin="0" fontSize={constants.typography.size.small}>
					{containerInfomartion}
				</Text>
				<Text margin="0" fontSize={constants.typography.size.small}>
					{notes}
				</Text>
			</GridContainer>
		</GridContainer>
	);
};

export default Card;
