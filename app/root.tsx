import { FlexStartCenterAlignedColumnContainer } from "@benny-eleventy/benny-ui";
import type { MetaFunction } from "@remix-run/cloudflare";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import { Navbar, Sidebar } from "@/components";
import { SidebarContentContainer } from "./styles";
import { finalVariant } from "./types/themeVariant";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles/GlobalStyles";

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Benny UI Design System",
	viewport: "width=device-width,initial-scale=1",
});

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
				{typeof document === "undefined" ? "__STYLES__" : null}
			</head>
			<body>
				<ThemeProvider theme={finalVariant}>
					<GlobalStyle />
					<FlexStartCenterAlignedColumnContainer
						width="100vw"
						height="100vh"
						background="black"
						borderRadius="0"
					>
						<Navbar />
						<SidebarContentContainer>
							<Sidebar />
							<Outlet />
						</SidebarContentContainer>
					</FlexStartCenterAlignedColumnContainer>
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
				</ThemeProvider>
			</body>
		</html>
	);
}
