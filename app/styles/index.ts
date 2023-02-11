import {
	constants,
	FlexStartCenterAlignedColumnContainer,
	GridContainer,
} from "@benny-eleventy/benny-ui";
import styled from "styled-components";

export const SidebarContentContainer = styled(GridContainer)`
	width: 100%;
	height: 90vh;
	max-width: 1800px;
	grid-template-columns: 20% 80%;
	align-items: start;
	justify-content: start;
	position: fixed;
	top: 6vh;
`;

export const PageContainer = styled(FlexStartCenterAlignedColumnContainer)`
	width: 100%;
	height: 90vh;
	padding: ${constants.spaces.xsmall};
	gap: ${constants.spaces.xsmall};
`;
