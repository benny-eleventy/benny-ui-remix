import {
	CenterAlignedColumnContainer,
	OverflowFlexStartCenterAlignedRowContainer,
	Text,
	fw_regular,
	s_small,
	s_xsmall,
	s_xxsmall,
} from "@benny-eleventy/benny-ui";
import styled from "styled-components";

interface FiltersProps {
	data: string[] | any[];
	chipDisplayTextKey?: string;
}

interface ChipProps {
	displayText: string;
	onClick: () => void;
	isActive: boolean;
}

const Chip = ({ displayText, isActive }: ChipProps) => {
	return (
		<ChipContainer isActive={isActive}>
			<ChipText>{displayText}</ChipText>
		</ChipContainer>
	);
};

const Filters = ({ data, chipDisplayTextKey }: FiltersProps) => {
	return (
		<FiltersContainer width="100%" height="auto" flexShrink="0">
			{data.map((item, index) => (
				<Chip
					key={index}
					isActive={index === 0 ? true : false}
					displayText={chipDisplayTextKey ? item[chipDisplayTextKey] : item}
					onClick={() => {}}
				/>
			))}
		</FiltersContainer>
	);
};

export default Filters;

const FiltersContainer = styled(OverflowFlexStartCenterAlignedRowContainer)(
	({ theme }) => ({
		width: "98%",
		padding: s_xsmall,
		gap: s_xxsmall,
		"&::-webkit-scrollbar": {
			display: "none",
		},
	})
);

interface ChipContainerProps {
	isActive: boolean;
}

const ChipContainer = styled(CenterAlignedColumnContainer)<ChipContainerProps>(
	({ isActive, theme }) => ({
		width: "auto",
		height: "98%",
		paddingBlock: s_xxsmall,
		paddingInline: s_small,
		background: isActive ? "lightgreen" : "#303030",
		color: isActive ? "#303030" : "white",
	})
);

const ChipText = styled(Text)(({ theme }) => ({
	fontSize: s_small,
	fontWeight: fw_regular,
	whiteSpace: "nowrap",
}));
