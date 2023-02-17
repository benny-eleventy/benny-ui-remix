import {
	AnimatedCenterAlignedColumnContainer,
	AnimatedCenterAlignedRowContainer,
	AnimatedContainer,
	s_small,
	s_xxsmall,
	Text,
} from "@benny-eleventy/benny-ui";
import React from "react";

const NavbarDummy = () => {
	const [position, setPosition] = React.useState<
		"flex-start" | "center" | "flex-end"
	>("flex-start");
	return (
		<AnimatedCenterAlignedRowContainer
			id="button-container"
			width="50%"
			height="auto"
			background="gray"
			padding={s_xxsmall}
			style={{
				gap: s_small,
			}}
		>
			<AnimatedCenterAlignedColumnContainer
				width="30%"
				height="auto"
				padding={s_xxsmall}
				onClick={() => setPosition("flex-start")}
				position="relative"
			>
				<Text>flex-start</Text>
				{position == "flex-start" && (
					<AnimatedContainer
						width="80%"
						height="2px"
						position="absolute"
						bottom="-8px"
						background="lightgreen"
						layoutId="underline"
						transition={{
							layout: {
								duration: 0.8,
								ease: "easeOut",
							},
						}}
					/>
				)}
				{position == "flex-start" && (
					<AnimatedContainer
						width="100%"
						height="100%"
						background="rgba(255,255,255,0.2)"
						position="absolute"
						top="0"
						left="0"
						layoutId="highlight"
						transition={{
							layout: {
								duration: 0.4,
								ease: "easeOut",
							},
						}}
					/>
				)}
			</AnimatedCenterAlignedColumnContainer>
			<AnimatedCenterAlignedColumnContainer
				width="30%"
				height="auto"
				padding={s_xxsmall}
				onClick={() => setPosition("center")}
				position="relative"
			>
				<Text>Center</Text>
				{position == "center" && (
					<AnimatedContainer
						width="80%"
						height="2px"
						position="absolute"
						bottom="-8px"
						background="lightgreen"
						layoutId="underline"
						transition={{
							layout: {
								duration: 0.8,
								ease: "easeOut",
							},
						}}
					/>
				)}
				{position == "center" && (
					<AnimatedContainer
						width="100%"
						height="100%"
						background="rgba(255,255,255,0.2)"
						position="absolute"
						top="0"
						left="0"
						layoutId="highlight"
						transition={{
							layout: {
								duration: 0.4,
								ease: "easeOut",
							},
						}}
					/>
				)}
			</AnimatedCenterAlignedColumnContainer>
			<AnimatedCenterAlignedColumnContainer
				width="30%"
				height="auto"
				padding={s_xxsmall}
				onClick={() => setPosition("flex-end")}
				position="relative"
			>
				<Text>flex-end</Text>
				{position == "flex-end" && (
					<AnimatedContainer
						width="80%"
						height="2px"
						position="absolute"
						bottom="-8px"
						background="lightgreen"
						layoutId="underline"
						transition={{
							layout: {
								duration: 0.8,
								ease: "easeOut",
							},
						}}
					/>
				)}
				{position == "flex-end" && (
					<AnimatedContainer
						width="100%"
						height="100%"
						background="rgba(255,255,255,0.2)"
						position="absolute"
						top="0"
						left="0"
						layoutId="highlight"
						transition={{
							layout: {
								duration: 0.4,
								ease: "easeOut",
							},
						}}
					/>
				)}
			</AnimatedCenterAlignedColumnContainer>
		</AnimatedCenterAlignedRowContainer>
	);
};

export default NavbarDummy;
