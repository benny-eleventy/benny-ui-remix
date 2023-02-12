import {
	CenterAlignedColumnContainer,
	CenterAlignedRowContainer,
	s_small,
	s_xsmall,
	Text,
} from "@benny-eleventy/benny-ui";

interface DualColorChipProps {
	keyText: string;
	valueText: string;
	keyBackground?: string;
	valueBackground: string;
	onClick?: () => void;
}

const DualColorChip = ({
	keyText,
	valueText,
	keyBackground = "#252525",
	valueBackground,
	onClick,
}: DualColorChipProps) => {
	return (
		<CenterAlignedRowContainer
			width="auto"
			height="auto"
			gap="0"
			color="white"
			onClick={onClick}
			cursor="pointer"
		>
			<CenterAlignedColumnContainer
				width="auto"
				height="auto"
				paddingInline={s_small}
				paddingBlock={s_xsmall}
				background={keyBackground}
				borderRadius="0.5rem 0 0 0.5rem"
			>
				<Text>{keyText}</Text>
			</CenterAlignedColumnContainer>
			<CenterAlignedColumnContainer
				width="auto"
				height="auto"
				paddingInline={s_small}
				paddingBlock={s_xsmall}
				background={valueBackground}
				borderRadius="0 0.5rem 0.5rem 0"
			>
				<Text>{valueText}</Text>
			</CenterAlignedColumnContainer>
		</CenterAlignedRowContainer>
	);
};

export default DualColorChip;
