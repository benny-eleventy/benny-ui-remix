import { GridContainer } from "@benny-eleventy/benny-ui";
import styled from "styled-components";

export const SidebarContentContainer = styled(GridContainer)`
	width: 100%;
	height: 100%;
	grid-template-columns: 20% 80%;
	align-items: start;
	justify-content: start;
	border-radius: 0;
	position: fixed;
	top: 10vh;
	left: 0;
`;
