import { Box } from "@/components";

import {
	CenterAlignedColumnContainer,
	CenterAlignedRowContainer,
	FlexEndCenterAlignedRowContainer,
	FlexStartCenterAlignedColumnContainer,
	FlexStartCenterAlignedRowContainer,
	FlexStartColumnContainer,
	OverflowFlexStartCenterAlignedColumnContainer,
	OverflowFlexStartCenterAlignedRowContainer,
	SpaceBetweenRowContainer,
	WrappedFlexStartCenterAlignedColumnContainer,
} from "@benny-eleventy/benny-ui";

//@ts-nocheck
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

const rowContainersData = [
	{
		ParentContainer: CenterAlignedRowContainer,
		containerName: "CenterAlignedRowContainer",
		containerInfomartion:
			"Used for centering child elements vertically and horizontally, commonly elements buttons, icon containers, etc.",
		notes: "Center aligned row container",
		ChildContainer: () => <Box noOfBoxes={1} width="100%" height="100%" />,
	},
	{
		ParentContainer: FlexStartCenterAlignedRowContainer,
		containerName: "FlexStartCenterAlignedRowContainer",
		containerInfomartion:
			"Commonly used for card and page layouts. Also can be used for dropdowns, modals, etc.",
		notes: "Flex end center aligned row container",
		ChildContainer: () => <Box noOfBoxes={2} width="20%" height="100%" />,
	},
	{
		ParentContainer: FlexEndCenterAlignedRowContainer,
		containerName: "FlexEndCenterAlignedRowContainer",
		containerInfomartion:
			"Commonly used for card and page layouts. Also can be used for dropdowns, modals, etc.",
		notes: "Flex end center aligned row container",
		ChildContainer: () => <Box noOfBoxes={2} width="20%" height="100%" />,
	},
	{
		ParentContainer: SpaceBetweenRowContainer,
		containerName: "SpaceBetweenRowContainer",
		containerInfomartion:
			"Commonly used for card and page layouts. Also can be used for dropdowns, modals, etc.",
		notes: "Space between row container",
		ChildContainer: () => <Box noOfBoxes={2} width="40%" height="80%" />,
	},
	{
		ParentContainer: OverflowFlexStartCenterAlignedRowContainer,
		containerName: "OverflowRowContainer",
		containerInfomartion:
			"Mostly used for overflowing page layouts, name is too long, will be changed in future.",
		notes: "Overflow flex start center aligned row container",
		ChildContainer: () => (
			<Box noOfBoxes={5} width="90px" height="100%" minWidth="90px" />
		),
	},
	{
		ParentContainer: WrappedFlexStartCenterAlignedColumnContainer,
		containerName: "WrappedFlexStart CenterAlignedColumnContainer",
		containerInfomartion:
			"Mostly used for overflowing page layouts, name is too long, will be changed in future.",
		notes: "Overflow flex start center aligned row container",
		ChildContainer: () => (
			<Box noOfBoxes={5} width="90px" height="30%" minWidth="90px" />
		),
	},
];

const defaultContainerProps = [
	["padding", "spaces.small"],
	["margin", "spaces.small"],
	["borderRadius", "radii.small"],
	["border", "borders.small"],
	["backgroundColor", "colors.background"],
	["color", "colors.text"],
];

export { columnContainersData, rowContainersData, defaultContainerProps };
