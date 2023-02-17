import {
	AnimatedCenterAlignedColumnContainer,
	AnimatedColumnContainer,
	AnimatedRowContainer,
	AnimatedFlexContainer,
	AnimatedGridContainer,
	AnimatedFlexStartCenterAlignedColumnContainer,
} from "@benny-eleventy/benny-ui";

import type { ContainerProps } from "./containers.types";
import type {
	MotionProps,
	Variants,
	Variant,
	EasingDefinition,
	Transition,
} from "framer-motion";
import {
	ANOverflowFlexStartCenterAlignedColumnContainer,
	ANWrappedFlexStartCenterAlignedColumnContainer,
} from "./createAnimationContainer";

interface AcustomInterface {
	animationType?: "opacity" | "scale" | "rotate" | "x" | "y";
	animationDuration?: number[];
	animationConfig?: number[];
	animationEasing?: EasingDefinition;
	hoverAnimation?: Variant;
	clickAnimation?: Variant;
	animationDelay?: number;
	animationRepeat?: number;
	animationRepeatType?: "loop" | "reverse" | "none" | "mirror";
}

type unionProps = ContainerProps & MotionProps & AcustomInterface;

interface GcustomInterface {
	animationType: "opacity" | "scale" | "rotate" | "x" | "y" | "none";
	animationDuration: number[];
	animationConfig: number[];
	animationEasing: EasingDefinition;
	hoverAnimation: Variant;
	clickAnimation: Variant;
	animationRepeat: number;
	animationRepeatType: "loop" | "reverse" | "none" | "mirror";
	animationDelay: number;
}

const generateAnimationTypeVariants = ({
	animationType,
	animationDuration,
	animationConfig,
	animationEasing,
	hoverAnimation,
	clickAnimation,
	animationDelay,
	animationRepeat,
	animationRepeatType,
}: GcustomInterface): Variants => {
	const initialvalue = animationConfig[0];
	const animatevalue = animationConfig[1];
	const exitvalue = animationConfig[2];
	return {
		initial: {
			[animationType]: initialvalue,
		},
		animate: {
			[animationType]: animatevalue,
			transition: {
				//@ts-ignore
				duration: animationDuration[0],
				//@ts-ignore
				ease: animationEasing,
				delay: animationDelay,
				repeat: animationRepeat,
				//@ts-ignore
				repeatType: animationRepeatType,
			},
		},
		exit: {
			[animationType]: exitvalue,
			transition: {
				duration: animationDuration[1],
			},
		},
		hover: hoverAnimation,
		clicked: { ...clickAnimation },
	};
};

const ContainerNameMap = [
	{
		name: "CenterAlignedColumnContainer",
		component: AnimatedCenterAlignedColumnContainer,
	},
	{
		name: "ColumnContainer",
		component: AnimatedColumnContainer,
	},
	{
		name: "RowContainer",
		component: AnimatedRowContainer,
	},
	{
		name: "FlexContainer",
		component: AnimatedFlexContainer,
	},
	{
		name: "GridContainer",
		component: AnimatedGridContainer,
	},
	{
		name: "WrappedFlexStartCenterAlignedColumnContainer",
		component: ANWrappedFlexStartCenterAlignedColumnContainer,
	},
	{
		name: "FlexStartCenterAlignedColumnContainer",
		component: AnimatedFlexStartCenterAlignedColumnContainer,
	},
	{
		name: "OverflowFlexStartCenterAlignedColumnContainer",
		component: ANOverflowFlexStartCenterAlignedColumnContainer,
	},
];

export const A = ({ children, ...rest }: unionProps) => {
	return <>{children}</>;
};

function createAnimatedComponent(key: string) {
	return function AnimatedComponent({ children, ...rest }: unionProps) {
		const StyledComponent = ContainerNameMap.filter(
			(item) => item.name === key
		)[0].component;
		// const Component = motion<unionProps>(StyledComponent, {
		// 	forwardMotionProps: true,
		// });

		const getAnimationVariants = () => {
			if (rest.animationType || rest.clickAnimation || rest.hoverAnimation) {
				return generateAnimationTypeVariants({
					animationType: rest.animationType ? rest.animationType : "none",
					animationDuration: rest.animationDuration
						? rest.animationDuration
						: [0.5, 0.5],
					animationConfig: rest.animationConfig
						? rest.animationConfig
						: [1, 1, 1],
					animationEasing: rest.animationEasing
						? rest.animationEasing
						: "easeInOut",
					hoverAnimation: rest.hoverAnimation
						? rest.hoverAnimation
						: { scale: 1 },
					clickAnimation: rest.clickAnimation
						? rest.clickAnimation
						: { scale: 1 },
					animationDelay: rest.animationDelay ? rest.animationDelay : 0,
					animationRepeat: rest.animationRepeat ? rest.animationRepeat : 0,
					animationRepeatType: rest.animationRepeatType
						? rest.animationRepeatType
						: "none",
				});
			} else {
				return rest.variants;
			}
		};

		return (
			<StyledComponent
				initial="initial"
				animate="animate"
				exit="exit"
				whileHover="hover"
				whileTap="clicked"
				variants={getAnimationVariants()}
				{...rest}
			>
				{children}
			</StyledComponent>
		);
	};
}

A.ACenterAlignedColumnContainer = createAnimatedComponent(
	"CenterAlignedColumnContainer"
);

A.AColumnContainer = createAnimatedComponent("ColumnContainer");

A.ARowContainer = createAnimatedComponent("RowContainer");

A.AFlexContainer = createAnimatedComponent("FlexContainer");

A.AgridContainer = createAnimatedComponent("GridContainer");

A.AWrappedFlexStartCenterAlignedColumnContainer = createAnimatedComponent(
	"WrappedFlexStartCenterAlignedColumnContainer"
);

A.AFlexStartCenterAlignedColumnContainer = createAnimatedComponent(
	"FlexStartCenterAlignedColumnContainer"
);

A.OverflowFlexStartCenterAlignedColumnContainer = createAnimatedComponent(
	"OverflowFlexStartCenterAlignedColumnContainer"
);
