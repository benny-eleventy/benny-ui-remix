import {
	BennyThemeProvider,
	CenterAlignedColumnContainer,
	Text,
} from "@benny-eleventy/benny-ui";

export default function Index() {
	return (
		<BennyThemeProvider>
			<CenterAlignedColumnContainer
				width="100vw"
				height="100vh"
				background="lightpink"
			>
				<Text>Hello World</Text>
			</CenterAlignedColumnContainer>
		</BennyThemeProvider>
	);
}
