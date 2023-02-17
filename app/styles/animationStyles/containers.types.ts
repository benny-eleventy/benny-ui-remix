import type { Variants } from "framer-motion";
export interface ContainerProps {
	width?: string;
	minWidth?: string;
	maxWidth?: string;
	height?: string;
	minHeight?: string;
	maxHeight?: string;

	position?: string;
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
	zIndex?: string;

	margin?: string;
	marginTop?: string;
	marginRight?: string;
	marginBottom?: string;
	marginLeft?: string;
	marginInline?: string;
	marginBlock?: string;

	padding?: string;
	paddingTop?: string;
	paddingRight?: string;
	paddingBottom?: string;
	paddingLeft?: string;
	paddingInline?: string;
	paddingBlock?: string;

	alignContent?: string;
	alignItems?: string;
	alignSelf?: string;
	display?: string;
	flex?: string;
	flexBasis?: string;
	flexDirection?: string;
	flexGrow?: string;
	flexShrink?: string;
	flexWrap?: string;
	gap?: string;
	justifyItems?: string;
	justifyContent?: string;
	justifySelf?: string;
	order?: string;

	overflow?: string;
	overflowX?: string;
	overflowY?: string;

	gridTemplateColumns?: string;
	gridTemplateRows?: string;
	gridTemplateAreas?: string;
	gridAutoColumns?: string;
	gridAutoRows?: string;
	gridAutoFlow?: string;
	grid?: string;
	gridRow?: string;
	gridColumn?: string;
	gridArea?: string;
	gridRowStart?: string;
	gridRowEnd?: string;
	gridColumnStart?: string;
	gridColumnEnd?: string;
	gridRowGap?: string;
	gridColumnGap?: string;
	gridGap?: string;

	background?: string;
	backgroundColor?: string;
	backgroundImage?: string;
	backgroundSize?: string;
	backgroundPosition?: string;
	backgroundRepeat?: string;
	backgroundAttachment?: string;
	backgroundClip?: string;
	backgroundOrigin?: string;
	backgroundBlendMode?: string;

	border?: string;
	borderRadius?: string;
	borderImage?: string;
	borderImageSource?: string;
	borderImageSlice?: string;
	borderImageWidth?: string;
	borderImageOutset?: string;
	borderImageRepeat?: string;
	borderTop?: string;
	borderRight?: string;
	borderBottom?: string;
	borderLeft?: string;
	borderTopColor?: string;
	borderRightColor?: string;
	borderBottomColor?: string;
	borderLeftColor?: string;

	boxShadow?: string;
	dropShadow?: string;
	textShadow?: string;

	color?: string;
	font?: string;
	fontFamily?: string;
	fontSize?: string;
	fontStyle?: string;
	fontVariant?: string;
	fontWeight?: string;
	fontStretch?: string;
	lineHeight?: string;
	letterSpacing?: string;
	textAlign?: string;
	textDecoration?: string;
	textTransform?: string | undefined;
	textIndent?: string;
	wordSpacing?: string;
	writingMode?: string;
	verticalAlign?: string;

	cursor?: string;
	opacity?: string;
	aspectRatio?: string;
	whiteSpace?: string;
	wordBreak?: string;

	cssTransition?: string;
	cssAnimation?: string;
	cssAnimationName?: string;
	cssAnimationDuration?: string;
	cssAnimationTimingFunction?: string;
	cssAnimationDelay?: string;
	cssAnimationIterationCount?: string;
	cssAnimationDirection?: string;
	cssAnimationFillMode?: string;

	filter?: string;
	backdropFilter?: string;
	clipPath?: string;
	mask?: string;

	scrollSnapType?: string;
	scrollSnapAlign?: string;
	scrollSnapStop?: string;
	scrollBehavior?: string;

	scrollBarWidth?: string;
	scrollBarColor?: string;
	scrollBarTrackColor?: string;
	scrollBarThumbColor?: string;

	variants?: Variants;
	onClick?: () => void;
}
