import {
	CenterAlignedColumnContainer,
	CenterAlignedRowContainer,
	fs_small,
	s_small,
	s_xsmall,
	s_xxsmall,
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
				paddingInline={s_xsmall}
				paddingBlock={s_xxsmall}
				background={keyBackground}
				borderRadius="0.5rem 0 0 0.5rem"
			>
				<Text fontSize={fs_small}>{keyText}</Text>
			</CenterAlignedColumnContainer>
			<CenterAlignedColumnContainer
				width="auto"
				height="auto"
				paddingInline={s_xsmall}
				paddingBlock={s_xxsmall}
				background={valueBackground}
				borderRadius="0 0.5rem 0.5rem 0"
			>
				<Text fontSize={fs_small}>{valueText}</Text>
			</CenterAlignedColumnContainer>
		</CenterAlignedRowContainer>
	);
};

export default DualColorChip;
