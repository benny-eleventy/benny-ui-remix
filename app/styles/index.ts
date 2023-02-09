import { GridContainer } from "@benny-eleventy/benny-ui";
import styled from "styled-components";

export const SidebarContentContainer = styled(GridContainer)`
	width: 100%;
	height: 90vh;
	max-width: 1800px;
	grid-template-columns: 20% 80%;
	align-items: start;
	justify-content: start;
	border-radius: 0;
	position: fixed;
	top: 6vh;
`;
