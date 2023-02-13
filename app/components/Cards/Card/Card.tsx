//@ts-nocheck
import {
	GridContainer,
	Text,
	fs_small,
	fw_bold,
	s_xsmall,
	s_xxsmall,
	FlexStartCenterAlignedColumnContainer,
} from "@benny-eleventy/benny-ui";
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
			gap={s_xsmall}
			padding={s_xsmall}
		>
			<ParentContainer
				background="#8287FF"
				width="100%"
				height="100%"
				padding={s_xsmall}
			>
				{ChildContainer()}
			</ParentContainer>
			<GridContainer
				width="100%"
				height="100%"
				gridTemplateRows="10% 55% 35%"
				alignItems="center"
				justifyContent="center"
				padding={s_xsmall}
				gridGap={s_xxsmall}
				color="white"
			>
				<Text fontSize={fs_small} whiteSpace="normal" fontWeight={fw_bold}>
					{containerName}
				</Text>
				<Text whiteSpace="normal" fontSize={fs_small}>
					{containerInfomartion}
				</Text>
				<Text fontSize={fs_small}>{notes}</Text>
			</GridContainer>
		</GridContainer>
	);
};

export default Card;
