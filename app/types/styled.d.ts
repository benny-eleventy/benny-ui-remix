// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { finalVariant } from "./themeVariant";
import "styled-components";

type ThemeInterface = typeof finalVariant;

declare module "styled-components" {
	export interface DefaultTheme extends ThemeInterface {}
}
