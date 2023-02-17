import { SectionTitleText } from "@/components";
import { PageContainer } from "@/styles";
import { A } from "@/styles/animationStyles";
import { s_large, s_small, s_xxsmall, Text } from "@benny-eleventy/benny-ui";
import type { Variants } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const Index = () => {
	const [clicked, setClicked] = useState(false);

	React.useEffect(() => {
		if (clicked === false) return;

		setTimeout(() => {
			setClicked(false);
		}, 3000);
	}, [clicked]);

	const [scaleAnimation, setScaleAnimation] = useState(false);
	React.useEffect(() => {
		if (scaleAnimation === false) return;

		setTimeout(() => {
			setScaleAnimation(false);
		}, 3000);
	}, [scaleAnimation]);

	const [rotateAnimation, setRotateAnimation] = useState(false);
	React.useEffect(() => {
		if (rotateAnimation === false) return;

		setTimeout(() => {
			setRotateAnimation(false);
		}, 3000);
	}, [rotateAnimation]);

	const [xAnimation, setXAnimation] = useState(false);

	React.useEffect(() => {
		if (xAnimation === false) return;

		setTimeout(() => {
			setXAnimation(false);
		}, 3000);
	}, [xAnimation]);

	//create opacity variant

	const container: Variants = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 1,
			},
		},
	};

	const item: Variants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<PageContainer>
			<A.OverflowFlexStartCenterAlignedColumnContainer
				color="white"
				width="100%"
				height="auto"
				border="1px solid white"
				padding={s_small}
				gap={s_large}
				paddingBottom={"5rem"}
				animationType="x"
				animationConfig={[800, 0, 0]}
				animationDuration={[1, 1]}
			>
				<SectionTitleText title="Enter Animations" />
				{/* <ACenterAlignedColumnContainer
					variants={container}
					initial="hidden"
					animate="show"
					width="100%"
					height="40vh"
				>
					<ACenterAlignedColumnContainer
						width="20%"
						height="80%"
						background="white"
						variants={item}
					/>
					<ACenterAlignedColumnContainer
						width="20%"
						height="80%"
						background="green"
						variants={item}
					/>
				</ACenterAlignedColumnContainer> */}
				<>
					<A.AWrappedFlexStartCenterAlignedColumnContainer
						width="100%"
						height="auto"
						padding={s_small}
						variants={item}
						initial="hidden"
						animate="show"
					>
						<AnimatonDetailsContainer
							animationType="opacity"
							animationConfig={[0, 1, 0]}
							animationDuration={[2, 1]}
							animationEasing="easeInOut"
							animationDelay={0}
						>
							<AnimatePresence>
								{clicked && (
									<AnimatedStyledContainer
										animationType="opacity"
										// animate={clicked ? "animate" : "initial"}
										animationConfig={[0, 1, 0]}
										animationDuration={[2, 1]}
										animationEasing="easeInOut"
										hoverAnimation={{
											scale: 1.2,
											opacity: 1,
										}}
										clickAnimation={{
											scale: 0.5,
											opacity: 1,
										}}
									>
										<Text color="black">Hello</Text>
									</AnimatedStyledContainer>
								)}
							</AnimatePresence>
							<Button
								onClick={() => {
									setClicked(true);
								}}
								label="Opacity"
								isClicked={clicked}
							/>
						</AnimatonDetailsContainer>
						<AnimatonDetailsContainer
							animationType="opacity"
							animationConfig={[0, 1, 0]}
							animationDuration={[2, 1]}
							animationEasing="easeInOut"
							animationDelay={0.5}
						>
							<AnimatePresence>
								{scaleAnimation && (
									<AnimatedStyledContainer
										animationType="scale"
										// animate={clicked ? "animate" : "initial"}
										animationConfig={[0, 1.2, 0]}
										animationDuration={[1, 1]}
										animationEasing="easeInOut"
										clickAnimation={{
											scale: 0.5,
											opacity: 1,
										}}
									>
										<Text color="black">Hello</Text>
									</AnimatedStyledContainer>
								)}
							</AnimatePresence>
							<Button
								onClick={() => {
									setScaleAnimation(true);
								}}
								label="Scale"
								isClicked={scaleAnimation}
							/>
						</AnimatonDetailsContainer>
						<AnimatonDetailsContainer
							animationType="opacity"
							animationConfig={[0, 1, 0]}
							animationDuration={[1, 1]}
							animationEasing="easeInOut"
							animationDelay={1.0}
						>
							<AnimatePresence>
								{rotateAnimation && (
									<AnimatedStyledContainer
										animationType="rotate"
										// animate={clicked ? "animate" : "initial"}
										animationConfig={[0, 45, -60]}
										animationDuration={[1, 1]}
										animationEasing="easeInOut"
										clickAnimation={{
											scale: 0.5,
											opacity: 1,
										}}
									>
										<Text color="black">Hello</Text>
									</AnimatedStyledContainer>
								)}
							</AnimatePresence>
							<Button
								onClick={() => {
									setRotateAnimation(true);
								}}
								label="Rotate"
								isClicked={rotateAnimation}
							/>
						</AnimatonDetailsContainer>
						<AnimatonDetailsContainer
							animationType="opacity"
							animationConfig={[0, 1, 0]}
							animationDuration={[1, 1]}
							animationEasing="easeInOut"
							animationDelay={1.5}
						>
							<AnimatePresence>
								{xAnimation && (
									<AnimatedStyledContainer
										animationType="x"
										// animate={clicked ? "animate" : "initial"}
										animationConfig={[40, 0, -40]}
										animationDuration={[2, 1]}
										animationEasing="easeInOut"
										clickAnimation={{
											scale: 0.5,
											opacity: 1,
										}}
									>
										<Text color="black">Hello</Text>
									</AnimatedStyledContainer>
								)}
							</AnimatePresence>
							<Button
								onClick={() => {
									setXAnimation(true);
								}}
								label="X"
								isClicked={xAnimation}
							/>
						</AnimatonDetailsContainer>
					</A.AWrappedFlexStartCenterAlignedColumnContainer>
				</>
			</A.OverflowFlexStartCenterAlignedColumnContainer>
		</PageContainer>
	);
};

export default Index;

interface ButtonProps {
	onClick: () => void;
	label: string;
	isClicked: boolean;
}

const Button = ({ onClick, label, isClicked }: ButtonProps) => {
	return (
		<ButtonContainer
			onClick={onClick}
			custom={isClicked}
			hoverAnimation={(isClicked: boolean) => ({
				scale: isClicked ? 1 : 1.1,
				transition: {
					duration: 0.5,
				},
			})}
			clickAnimation={{
				scale: 0.5,
				transition: {
					duration: 0.6,
				},
			}}
		>
			<Text color="rgba(255,255,255,0.9)">{label}</Text>
		</ButtonContainer>
	);
};

const ButtonContainer = styled(A.ACenterAlignedColumnContainer)`
	width: auto;
	height: auto;
	position: absolute;
	bottom: ${s_small};
	padding: ${s_xxsmall};
	background: rgba(255, 255, 255, 0.2);
`;

const AnimatedStyledContainer = styled(A.ACenterAlignedColumnContainer)`
	width: 80%;
	aspect-ratio: 3/2;
	background: #93c6e7;
`;

const AnimatonDetailsContainer = styled(
	A.AFlexStartCenterAlignedColumnContainer
)`
	width: 300px;
	height: 200px;
	padding: ${s_small};
	border: 1px solid rgba(255, 255, 255, 0.2);
	position: relative;
	background: hsl(0, 0%, 10%);
`;
