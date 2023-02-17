import type { ContainerProps } from "./../../../../styles/animationStyles/containers.types";
import { motion } from "framer-motion";
import styled from "styled-components";
import {
	br_small,
	fs_regular,
	primaryFont,
	s_small,
	s_xsmall,
	s_xxsmall,
} from "@benny-eleventy/benny-ui";

export const Button = styled(motion.button)<ContainerProps>((props) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: props.width ? props.width : "fit-content",
	height: props.height ? props.height : "auto",
	paddingInline: props.paddingInline ? props.paddingInline : s_xxsmall,
	paddingBlock: props.paddingBlock ? props.paddingBlock : s_xxsmall,
	gap: props.gap ? props.gap : "0.5rem",
	cursor: "pointer",
	WebkitAppearance: "none",
	MozAppearance: "none",
	outline: "none",
	borderRadius: props.borderRadius ? props.borderRadius : br_small,
	color: props.color ? props.color : "white",
	backgroundColor: props.backgroundColor ? props.backgroundColor : "black",
	background: props.background ? props.background : "none",
	fontSize: props.fontSize ? props.fontSize : fs_regular,
	fontFamily: primaryFont || "inherit",
	fontWeight: props.fontWeight ? props.fontWeight : "500",
	letterSpacing: props.letterSpacing ? props.letterSpacing : "1",
	boxShadow: props.boxShadow
		? props.boxShadow
		: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
	borderBottom: props.borderBottom ? props.borderBottom : "none",
	border: props.border ? props.border : "none",
}));
