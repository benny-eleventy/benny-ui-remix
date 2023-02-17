import { SectionTitleText } from "@/components";
import { PageContainer } from "@/styles";
import {
	br_large,
	br_regular,
	br_small,
	CenterAlignedRowContainer,
	FlexStartCenterAlignedRowContainer,
	Icon,
	s_small,
} from "@benny-eleventy/benny-ui";
import React from "react";
import Button from "./Button";

const Index = () => {
	const [isLoading, setIsLoading] = React.useState(false);
	return (
		<PageContainer>
			<SectionTitleText title="buttons" />
			<FlexStartCenterAlignedRowContainer
				width="100%"
				height="auto"
				padding={s_small}
			>
				<Button
					label="Click Me"
					color="black"
					background="linear-gradient(95.46deg,#3BA8F7 0.6%,#DC6BDE 97.25%)"
					onClick={() => {
						setIsLoading(true);
						console.log("primary button clicked");
					}}
					hoverAnimation={{ opacity: 0.5, transition: { duration: 0.25 } }}
					clickAnimation={{ scale: 0.7, transition: { duration: 0.5 } }}
					tooltipText="Click Me If You Can"
					tooltipPosition={["bottom", "0.2rem"]}
					isLoading={isLoading}
					animationType="opacity"
					animationDuration={[0.5, 0.5]}
					animationConfig={[0, 1, 0]}
					animationEasing="easeInOut"
					animationDelay={0}
				></Button>
				<Button
					label="Search"
					border="1px solid rgba(255,255,255,0.8)"
					color="rgba(255,255,255,0.8)"
					background="none"
					onClick={() => {
						setIsLoading(true);
						console.log("primary button clicked");
					}}
					hoverAnimation={{
						scale: 1.025,
						transition: { duration: 0.25 },
					}}
					clickAnimation={{ scale: 0.7, transition: { duration: 0.5 } }}
					leftIcon={<Icon.Search size="1.25em" />}
					tooltipText="Click Me If You Can"
					tooltipPosition={["bottom", "0.2rem"]}
					isLoading={isLoading}
					animationType="opacity"
					animationDuration={[0.5, 0.5]}
					animationConfig={[0, 1, 0]}
					animationEasing="easeInOut"
					animationDelay={0.2}
				></Button>
				<Button
					label="styled components"
					borderRadius={br_large}
					color="black"
					gap="0rem"
					background="#FF8DC7"
					onClick={() => {
						setIsLoading(true);
						console.log("primary button clicked");
					}}
					hoverAnimation={{ opacity: 0.5, transition: { duration: 0.25 } }}
					clickAnimation={{ scale: 0.7, transition: { duration: 0.5 } }}
					rightIcon={<Icon.Cancel size="1.2em" />}
					tooltipText="Click Me If You Can"
					tooltipPosition={["bottom", "0.2rem"]}
					isLoading={isLoading}
					animationType="opacity"
					animationDuration={[0.5, 0.5]}
					animationConfig={[0, 1, 0]}
					animationEasing="easeInOut"
					animationDelay={0.3}
				></Button>
				<Button
					label="Chip"
					borderRadius={br_large}
					color="black"
					gap="0rem"
					background="white"
					onClick={() => {
						setIsLoading(true);
						console.log("primary button clicked");
					}}
					hoverAnimation={{ opacity: 0.5, transition: { duration: 0.25 } }}
					clickAnimation={{ scale: 0.7, transition: { duration: 0.5 } }}
					tooltipText="Click Me If You Can"
					tooltipPosition={["bottom", "0.2rem"]}
					isLoading={isLoading}
					animationType="opacity"
					animationDuration={[0.5, 0.5]}
					animationConfig={[0, 1, 0]}
					animationEasing="easeInOut"
					animationDelay={0.4}
				></Button>
				<Button
					borderRadius={br_regular}
					color="black"
					gap="0rem"
					background="white"
					onClick={() => {
						setIsLoading(true);
						console.log("primary button clicked");
					}}
					hoverAnimation={{ opacity: 0.5, transition: { duration: 0.25 } }}
					clickAnimation={{ scale: 0.7, transition: { duration: 0.5 } }}
					leftIcon={<Icon.Share size="1.25em" />}
					tooltipText="Click Me If You Can"
					tooltipPosition={["bottom", "0.2rem"]}
					isLoading={isLoading}
					animationType="opacity"
					animationDuration={[0.5, 0.5]}
					animationConfig={[0, 1, 0]}
					animationEasing="easeInOut"
					animationDelay={0.5}
				></Button>
				<Button
					label="Text Button"
					borderRadius="0"
					color="rgba(255,255,255,0.87)"
					borderBottom="1px solid rgba(255,255,255,0.87)"
					gap="0rem"
					onClick={() => {
						setIsLoading(true);
						console.log("primary button clicked");
					}}
					hoverAnimation={{ opacity: 0.5, transition: { duration: 0.25 } }}
					clickAnimation={{ scale: 0.7, transition: { duration: 0.5 } }}
					tooltipText="Click Me If You Can"
					tooltipPosition={["bottom", "0.2rem"]}
					isLoading={isLoading}
					animationType="opacity"
					animationDuration={[0.5, 0.5]}
					animationConfig={[0, 1, 0]}
					animationEasing="easeInOut"
					animationDelay={0.6}
				></Button>
			</FlexStartCenterAlignedRowContainer>
		</PageContainer>
	);
};

export default Index;
