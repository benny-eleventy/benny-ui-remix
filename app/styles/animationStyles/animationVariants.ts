import type {
	AnimationControls,
	EasingDefinition,
	Target,
	TargetAndTransition,
	Variant,
	VariantLabels,
	Variants,
} from "framer-motion";
import { slow } from "./animationConstants";

type animationVariantsProps = {
	//make duration optional with default value
	duration?: number;
	initial?: number;
	animate?: number;
	exit?: number;
	variant?: "opacity" | "scale" | "rotate" | "x" | "y";
};

export const animation1 = ({
	initial = 0,
	animate = 1,
	exit = 0,
	duration = slow,
	variant = "opacity",
}: animationVariantsProps): Variants => {
	return {
		initial: {
			[variant]: initial,
		},
		animate: {
			[variant]: animate,
			transition: {
				duration: duration,
			},
		},
		exit: {
			[variant]: exit,
			transition: {
				duration: duration,
			},
		},
	};
};

export const scaleVariants = ({
	initial = 0,
	animate = 1,
	exit = 0,
	duration = slow,
}: animationVariantsProps): Variants => {
	return {
		initial: {
			scale: initial,
		},
		animate: {
			scale: animate,
			transition: {
				duration: duration,
			},
		},
		exit: {
			scale: exit,
			transition: {
				duration: duration,
			},
		},
	};
};

type slideVariantsProps = {
	//make duration optional with default value
	duration?: number;
	enterDirection?: "left" | "right" | "up" | "down";
	exitDirection?: "left" | "right" | "up" | "down";
	isOppositeExitDirection?: boolean;
	initialOffset?: number;
	animateOffset?: number;
	exitOffset?: number;
};

export const slideVariants = ({
	duration = slow,
	enterDirection = "left",
	isOppositeExitDirection = false,
	exitDirection = "right",
	initialOffset = 100,
	animateOffset = 0,
	exitOffset = 100,
}: slideVariantsProps): Variants => {
	const enterDirectionMap = {
		left: { x: initialOffset },
		right: { x: -initialOffset },
		up: { y: initialOffset },
		down: { y: -initialOffset },
	};
	const exitDirectionMap = {
		left: { x: isOppositeExitDirection ? -exitOffset : exitOffset },
		right: { x: isOppositeExitDirection ? exitOffset : -exitOffset },
		up: { y: isOppositeExitDirection ? -exitOffset : exitOffset },
		down: { y: isOppositeExitDirection ? exitOffset : -exitOffset },
	};

	return {
		initial: {
			...enterDirectionMap[enterDirection],
			// x: initialOffset,
		},
		animate: {
			x: animateOffset,
			y: animateOffset,
			transition: {
				duration: duration,
			},
		},
		exit: {
			...exitDirectionMap[exitDirection],
			transition: {
				duration: duration,
			},
		},
	};
};

interface complexAnimationVariantsProps {
	[key: string]:
		| boolean
		| Target
		| VariantLabels
		| number
		| AnimationControls
		| TargetAndTransition
		| VariantLabels
		| boolean;

	// [key: string]: Variant | number;

	//create duration variable with number type
}

//create intersection type for duration and exitDuration

interface NativeAnimationOptions {
	delay?: number;
	duration?: number;
	ease?: EasingDefinition;
	times?: number[];
	repeat?: number;
	repeatType?: "loop" | "reverse" | "mirror";
}

interface customInterface extends NativeAnimationOptions {
	exitDuration?: number;
	type?: "opacity" | "scale" | "rotate" | "x" | "y";
}

//create union type for

type unionProps = customInterface & complexAnimationVariantsProps;

export const animation = ({ ...args }: unionProps): Variants => {
	const customProps = ["duration", "exitDuration"];
	console.log(args.type);

	if (args.type) {
		return {
			initial: {
				[args.type]: args.initial,
			},
			animate: {
				[args.type]: args.animate,
				transition: {
					duration: args.duration,
					repeat: args.repeat,
					repeatType: args.repeatType,
				},
			},
			exit: {
				[args.type]: args.exit,
				transition: {
					duration: args.duration,
				},
			},
		};
	} else {
		const { duration, exitDuration, ...rest } = args;
		//@ts-ignore
		return { ...rest };
	}
};
