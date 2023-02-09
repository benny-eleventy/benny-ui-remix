import { Box, Filters, HorizontalCard, SectionTitleText } from "@/components";
import {
	CenterAlignedColumnContainer,
	constants,
	FlexStartCenterAlignedColumnContainer,
	FlexStartColumnContainer,
	GridContainer,
	OverflowFlexStartCenterAlignedColumnContainer,
	WrappedFlexStartCenterAlignedColumnContainer,
} from "@benny-eleventy/benny-ui";

export default function Index() {
	const styledComponentsFitlers = [
		"Containers",
		"Text",
		"Buttons",
		"Inputs",
		"Image",
		"Animated Container",
	];

	const columnContainersData = [
		{
			ParentContainer: CenterAlignedColumnContainer,
			containerName: "CenterAlignedColumnContainer",
			containerInfomartion:
				"Used for centering child elements vertically and horizontally, commonly elements buttons, icon containers, etc.",
			notes: "Center aligned column container",
			ChildContainer: () => <Box noOfBoxes={1} width="100%" height="100%" />,
		},
		{
			ParentContainer: FlexStartCenterAlignedColumnContainer,
			containerName: "FlexStartCenterAlignedColumnContainer",
			containerInfomartion:
				"Commonly used for card and page layouts. Also can be used for dropdowns, modals, etc.",
			notes: "Flex start center aligned column container",
			ChildContainer: () => <Box noOfBoxes={2} width="100%" height="20%" />,
		},
		{
			ParentContainer: FlexStartColumnContainer,
			containerName: "FlexStartColumnContainer",
			containerInfomartion:
				"Commonly used for list items, same can be achieved using flexStartCenterAlignedColumnContainer",
			notes: "Flex start column container",
			ChildContainer: () => <Box noOfBoxes={3} width="50%" height="20%" />,
		},
		{
			ParentContainer: OverflowFlexStartCenterAlignedColumnContainer,
			containerName: "OverflowColumnContainer",
			containerInfomartion:
				"Mostly used for overflowing page layouts, name is too long, will be changed in future.",
			notes: "Overflow flex start center aligned column container",
			ChildContainer: () => (
				<Box noOfBoxes={5} width="50%" height="40px" minHeight="40px" />
			),
		},
	];

	return (
		<>
			<FlexStartCenterAlignedColumnContainer
				width="100%"
				height="90vh"
				padding={constants.spaces.xsmall}
				gap={constants.spaces.xsmall}
			>
				<Filters data={styledComponentsFitlers} />
				<OverflowFlexStartCenterAlignedColumnContainer
					width="100%"
					height="auto"
					padding={constants.spaces.xsmall}
					paddingBottom={constants.spaces.xxlarge}
					gap={constants.spaces.xsmall}
				>
					<SectionTitleText title="Column Containers" />
					<WrappedFlexStartCenterAlignedColumnContainer
						width="100%"
						height="auto"
						gap={constants.spaces.small}
						padding={constants.spaces.small}
						style={{ justifyContent: "center" }}
					>
						{columnContainersData.map(
							({
								ParentContainer,
								containerName,
								containerInfomartion,
								notes,
								ChildContainer,
							}) => (
								<HorizontalCard
									key={containerName}
									ParentContainer={ParentContainer}
									containerName={containerName}
									containerInfomartion={containerInfomartion}
									notes={notes}
									ChildContainer={ChildContainer}
								/>
							)
						)}
					</WrappedFlexStartCenterAlignedColumnContainer>
					<SectionTitleText title="Column Containers" />
					<WrappedFlexStartCenterAlignedColumnContainer
						width="100%"
						height="auto"
						gap={constants.spaces.small}
						padding={constants.spaces.small}
						style={{ justifyContent: "center" }}
					>
						{columnContainersData.map(
							({
								ParentContainer,
								containerName,
								containerInfomartion,
								notes,
								ChildContainer,
							}) => (
								<HorizontalCard
									key={containerName}
									ParentContainer={ParentContainer}
									containerName={containerName}
									containerInfomartion={containerInfomartion}
									notes={notes}
									ChildContainer={ChildContainer}
								/>
							)
						)}
					</WrappedFlexStartCenterAlignedColumnContainer>
				</OverflowFlexStartCenterAlignedColumnContainer>
			</FlexStartCenterAlignedColumnContainer>
		</>
	);
}
