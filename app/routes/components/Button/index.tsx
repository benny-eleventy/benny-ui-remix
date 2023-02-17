import { Button } from "@/routes/styles/styleLibraryDraft/styles/buttons";
import {
	br_circle,
	CenterAlignedColumnContainer,
	CenterAlignedRowContainer,
	fs_small,
	Text,
} from "@benny-eleventy/benny-ui";
import type { ContainerProps } from "@/styles/animationStyles/containers.types";
import type { MotionProps, Variant, Variants } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { A } from "@/styles/animationStyles";

interface AcustomInterface {
	animationType?: "opacity" | "scale" | "rotate" | "x" | "y";
	animationDuration?: number[] | string[];
	animationConfig?: number[];
	animationEasing?: "easeIn" | "easeOut" | "easeInOut" | "linear";
	hoverAnimation?: Variant;
	clickAnimation?: Variant;
	animationDelay?: number;
}

interface ButtonProps extends ContainerProps, AcustomInterface, MotionProps {
	label?: string;
	onClick: () => void;
	rightIcon?: React.ReactNode;
	leftIcon?: React.ReactNode;
	tooltipText?: string;
	tooltipPosition?: string[];
	isLoading?: boolean;
}

interface GcustomInterface {
	animationType: "opacity" | "scale" | "rotate" | "x" | "y" | "none";
	animationDuration: number[] | string[];
	animationConfig: number[];
	animationEasing: "easeIn" | "easeOut" | "easeInOut" | "linear";
	hoverAnimation: Variant;
	clickAnimation: Variant;
	animationDelay: number;
}

const generateAnimationTypeVariants = ({
	animationType,
	animationDuration,
	animationConfig,
	animationEasing,
	hoverAnimation,
	clickAnimation,
	animationDelay,
}: GcustomInterface): Variants => {
	const initialvalue = animationConfig[0];
	const animatevalue = animationConfig[1];
	const exitvalue = animationConfig[2];
	return {
		initial: {
			[animationType]: initialvalue,
		},
		animate: {
			[animationType]: animatevalue,
			transition: {
				duration: animationDuration[0],
				ease: animationEasing,
				delay: animationDelay,
			},
		},
		exit: {
			[animationType]: exitvalue,
			transition: {
				duration: animationDuration[1],
			},
		},
		hover: hoverAnimation,
		clicked: { ...clickAnimation },
	};
};

const Index = (props: ButtonProps) => {
	const getAnimationVariants = () => {
		if (props.animationType || props.clickAnimation || props.hoverAnimation) {
			return generateAnimationTypeVariants({
				animationType: props.animationType ? props.animationType : "none",
				animationDuration: props.animationDuration
					? props.animationDuration
					: [0.5, 0.5],
				animationConfig: props.animationConfig
					? props.animationConfig
					: [1, 1, 1],
				animationEasing: props.animationEasing
					? props.animationEasing
					: "easeInOut",
				hoverAnimation: props.hoverAnimation
					? props.hoverAnimation
					: { scale: 1 },
				clickAnimation: props.clickAnimation
					? props.clickAnimation
					: { scale: 1 },
				animationDelay: props.animationDelay ? props.animationDelay : 0,
			});
		} else {
			return props.variants;
		}
	};

	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<CenterAlignedColumnContainer
			width="auto"
			height="auto"
			position="relative"
		>
			<Button
				{...props}
				initial="initial"
				animate="animate"
				exit="exit"
				whileHover="hover"
				whileTap="clicked"
				onHoverStart={() => setIsHovered(true)}
				onHoverEnd={() => setIsHovered(false)}
				variants={getAnimationVariants()}
				textTransform="uppercase"
				onClick={() => {
					setIsHovered(false);
					props.onClick();
				}}
			>
				{props.leftIcon && props.leftIcon}
				{props.label}
				{props.rightIcon && props.rightIcon}
			</Button>
			{props.isLoading && (
				<CenterAlignedRowContainer
					width="100%"
					height="100%"
					position="absolute"
					background="rgba(0,0,0,0.6)"
				>
					<A.ACenterAlignedColumnContainer
						width="1rem"
						aspectRatio="1"
						background="white"
						borderRadius={br_circle}
						animationType="opacity"
						animationDuration={[0.5, 0.5]}
						animationConfig={[0, 1, 0]}
						animationEasing="easeInOut"
						animationDelay={0}
						animationRepeat={Infinity}
						animationRepeatType="mirror"
					/>
					<A.ACenterAlignedColumnContainer
						width="1rem"
						aspectRatio="1"
						background="white"
						borderRadius={br_circle}
						animationType="scale"
						animationDuration={[0.4, 0.5]}
						animationConfig={[0, 1, 0]}
						animationEasing="easeInOut"
						animationDelay={0.2}
						animationRepeat={Infinity}
						animationRepeatType="mirror"
					/>
					<A.ACenterAlignedColumnContainer
						width="1rem"
						aspectRatio="1"
						background="white"
						borderRadius={br_circle}
						animationType="opacity"
						animationDuration={[0.5, 0.5]}
						animationConfig={[0, 1, 0]}
						animationEasing="easeInOut"
						animationDelay={0.3}
						animationRepeat={Infinity}
						animationRepeatType="mirror"
					/>
				</CenterAlignedRowContainer>
			)}
			<AnimatePresence>
				{isHovered && props.tooltipText && (
					<ToolTip
						tooltipText={props.tooltipText}
						position={
							props.tooltipPosition
								? props.tooltipPosition
								: ["bottom", "0.5rem"]
						}
					/>
				)}
			</AnimatePresence>
		</CenterAlignedColumnContainer>
	);
};

export default Index;

interface ToolTipProps {
	tooltipText: string;
	position: string[];
}

const ToolTip = (props: ToolTipProps) => {
	return (
		<A.ACenterAlignedColumnContainer
			width="auto"
			height="auto"
			position="absolute"
			bottom={
				props.position[0] === "bottom"
					? `calc(-100% - ${props.position[1]})`
					: "auto"
			}
			top={
				props.position[0] === "top"
					? `calc(-100% - ${props.position[1]})`
					: "auto"
			}
			left={
				props.position[0] === "left"
					? `calc(-100% - ${props.position[1]})`
					: "auto"
			}
			right={
				props.position[0] === "right"
					? `calc(-100% - ${props.position[1]})`
					: "auto"
			}
			padding="0.25rem 0.4rem"
			backgroundColor="rgba(255,255,255,0.3)"
			animationType="opacity"
			animationConfig={[0, 1, 0]}
			animationDuration={[0.4, 0.2]}
		>
			<Text
				fontSize={fs_small}
				color="white"
				textAlign="center"
				fontWeight="bold"
				whiteSpace="nowrap"
			>
				{props.tooltipText}
			</Text>
		</A.ACenterAlignedColumnContainer>
	);
};
