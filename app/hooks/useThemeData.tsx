import { useTheme } from "styled-components";

export default function useThemeData() {
	const theme = useTheme();
	return theme;
}
