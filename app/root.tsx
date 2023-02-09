import {
	BennyThemeProvider,
	constants,
	FlexStartCenterAlignedColumnContainer,
	OverflowFlexStartCenterAlignedColumnContainer,
} from "@benny-eleventy/benny-ui";
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
				<BennyThemeProvider>
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
				</BennyThemeProvider>
			</body>
		</html>
	);
}
