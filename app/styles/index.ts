import {
	FlexStartCenterAlignedColumnContainer,
	GridContainer,
	s_xsmall,
} from "@benny-eleventy/benny-ui";
import styled from "styled-components";
import { A } from "./animationStyles";

export const SidebarContentContainer = styled(GridContainer)`
	width: 100%;
	height: 90vh;
	max-width: 1800px;
	grid-template-columns: 20% 80%;
	align-items: start;
	justify-content: start;
	position: fixed;
	top: 6vh;
	gap: 0;
`;

export const PageContainer = styled(A.AFlexStartCenterAlignedColumnContainer)`
	width: 100%;
	height: 90vh;
	padding: ${s_xsmall};
	gap: ${s_xsmall};
`;
