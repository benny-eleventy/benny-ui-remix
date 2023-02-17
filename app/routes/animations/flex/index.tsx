import { SectionTitleText } from "@/components";
import { PageContainer } from "@/styles";
import { A } from "@/styles/animationStyles";
import {
	CenterAlignedColumnContainer,
	CenterAlignedRowContainer,
	FlexStartCenterAlignedColumnContainer,
	FlexStartCenterAlignedRowContainer,
	fs_xsmall,
	s_xxsmall,
	Text,
} from "@benny-eleventy/benny-ui";
import type { Transition } from "framer-motion";
import React from "react";
import styled from "styled-components";

const transition: Transition = {
	type: "spring",
	stiffness: 50,
	damping: 20,
	mass: 0.8,
};

const flexDirectionOption = ["column", "row", "column-reverse", "row-reverse"];
const alignContentOptions = ["center", "flex-start", "flex-end", "none"];
const alignItemsOptions = ["center", "flex-start", "flex-end", "none"];
const justifyItemsOptions = ["center", "flex-start", "flex-end", "none"];
const justifyContentOptions = ["center", "flex-start", "flex-end", "none"];

const FlexPage = () => {
	const [flexDirection, setFlexDirection] = React.useState("row");
	const [alignContent, setAlignContent] = React.useState("center");
	const [alignItems, setAlignItems] = React.useState("none");
	const [justifyContent, setJustifyContent] = React.useState("center");
	const [justifyItems, setJustifyItems] = React.useState("none");

	return (
		<PageContainer
			animationType="opacity"
			animationConfig={[0, 1, 0]}
			animationDuration={[1, 1]}
			gap={s_xxsmall}
		>
			<SectionTitleText title="Animations" />
			<CenterAlignedRowContainer
				style={{
					alignItems: "flex-start",
				}}
				height="200px"
			>
				<FlexStartCenterAlignedColumnContainer>
					<PropertyWarpper>
						<PropertyButton propertyText="Align Items" />
						{alignItemsOptions.map((option) => {
							return (
								<ValueButton
									key={option}
									valueText={option}
									isSelected={alignItems == option}
									onClick={() => setAlignItems(option)}
								/>
							);
						})}
					</PropertyWarpper>
					<PropertyWarpper>
						<PropertyButton propertyText="flex direction" />
						{flexDirectionOption.map((option) => {
							return (
								<ValueButton
									key={option}
									valueText={option}
									isSelected={flexDirection == option}
									onClick={() => setFlexDirection(option)}
								/>
							);
						})}
					</PropertyWarpper>
					{/* <PropertyWarpper>
						<PropertyButton propertyText="Align Content" />
						{alignContentOptions.map((option) => {
							return (
								<ValueButton
									key={option}
									valueText={option}
									isSelected={alignContent == option}
									onClick={() => setAlignContent(option)}
								/>
							);
						})}
					</PropertyWarpper> */}
				</FlexStartCenterAlignedColumnContainer>
				<FlexStartCenterAlignedColumnContainer>
					<PropertyWarpper>
						<PropertyButton propertyText="justify Content" />
						{justifyContentOptions.map((option) => {
							return (
								<ValueButton
									key={option}
									valueText={option}
									isSelected={justifyContent == option}
									onClick={() => setJustifyContent(option)}
								/>
							);
						})}
					</PropertyWarpper>
					{/* <PropertyWarpper>
						<PropertyButton propertyText="justify items" />
						{justifyItemsOptions.map((option) => {
							return (
								<ValueButton
									key={option}
									valueText={option}
									isSelected={justifyItems == option}
									onClick={() => setJustifyItems(option)}
								/>
							);
						})}
					</PropertyWarpper> */}
				</FlexStartCenterAlignedColumnContainer>
			</CenterAlignedRowContainer>
			<A.AFlexContainer
				width="800px"
				border="1px solid white"
				height="600px"
				// animationType={"opacity"}
				// animationDuration={[0.5, 0.5]}
				// animationConfig={[0, 1, 0]}
				layout={true}
				// layoutId="flex-container"
				transition={transition}
				padding={s_xxsmall}
				flexDirection={flexDirection}
				justifyContent={justifyContent}
				alignItems={alignItems}
				alignContent={alignContent}
				justifyItems={justifyItems}
				style={{
					gap: "1rem",
				}}
				animationType={"opacity"}
				animationDuration={[]}
				animationConfig={[]}
			>
				{/* <Box noOfBoxes={4} width="10%" height="100px" /> */}
				<A.ACenterAlignedColumnContainer
					width="100px"
					height="100px"
					background="lightpink"
					layout
					layoutId="box-1"
					transition={transition}
					animationType={"opacity"}
					animationDuration={[]}
					animationConfig={[]}
					flexShrink="0"
				/>
				<A.ACenterAlignedColumnContainer
					width="100px"
					height="100px"
					background="lightblue"
					layout
					layoutId="box-2"
					transition={transition}
					animationType={"opacity"}
					animationDuration={[]}
					animationConfig={[]}
					flexShrink="0"
				/>
				<A.ACenterAlignedColumnContainer
					width="100px"
					height="100px"
					background="lightgreen"
					layout
					layoutId="box-3"
					transition={transition}
					animationType={"opacity"}
					animationDuration={[]}
					animationConfig={[]}
					flexShrink="0"
				/>
				<A.ACenterAlignedColumnContainer
					width="100px"
					height="100px"
					background="green"
					layout
					layoutId="box-4"
					transition={transition}
					animationType={"opacity"}
					animationDuration={[]}
					animationConfig={[]}
					flexShrink="0"
				/>
			</A.AFlexContainer>
		</PageContainer>
	);
};

export default FlexPage;

interface propertyButtonProps {
	propertyText: string;
}

interface valueButtonProps {
	valueText: string;
	isSelected: boolean;
	onClick: () => void;
}

const PropertyButton = ({ propertyText }: propertyButtonProps) => {
	return (
		<>
			<CenterAlignedColumnContainer
				width="auto"
				height="auto"
				padding={s_xxsmall}
				border="1px solid rgba(255,255,255,0.2)"
			>
				<Text fontSize={fs_xsmall} color="white">
					{propertyText}
				</Text>
			</CenterAlignedColumnContainer>
		</>
	);
};

const ValueButton = ({ valueText, isSelected, onClick }: valueButtonProps) => {
	return (
		<>
			<CenterAlignedColumnContainer
				width="auto"
				height="auto"
				padding={s_xxsmall}
				background="rgba(255,255,255,0.2)"
				border={isSelected ? "1px solid white" : "1px solid transperant"}
				onClick={onClick}
			>
				<Text fontSize={fs_xsmall} color="rgba(255,255,255,0.87)">
					{valueText}
				</Text>
			</CenterAlignedColumnContainer>
		</>
	);
};

const PropertyWarpper = styled(FlexStartCenterAlignedRowContainer)`
	width: 100%;
	height: auto;
	padding: ${s_xxsmall};
`;
