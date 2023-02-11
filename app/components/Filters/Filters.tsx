import {
	CenterAlignedColumnContainer,
	OverflowFlexStartCenterAlignedRowContainer,
	Text,
} from "@benny-eleventy/benny-ui";
import styled from "styled-components";

interface FiltersProps {
	data: string[];
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

const Filters = ({ data }: FiltersProps) => {
	return (
		<FiltersContainer width="100%" height="auto" flexShrink="0">
			{data.map((item, index) => (
				<Chip
					key={index}
					isActive={index === 0 ? true : false}
					displayText={item}
					onClick={() => {}}
				/>
			))}
		</FiltersContainer>
	);
};

export default Filters;

// const FiltersContainer = styled(OverflowFlexStartCenterAlignedRowContainer)`
// 	width: 100%;
// 	padding: ${constants.spaces.xxsmall};
// 	gap: ${constants.spaces.xsmall};
// 	&::-webkit-scrollbar {
// 		display: none;
// 	}
// `;

const FiltersContainer = styled(OverflowFlexStartCenterAlignedRowContainer)(
	({ theme }) => ({
		width: "100%",
		padding: theme["s-xxsmall"],
		gap: theme["s-xsmall"],
		"&::-webkit-scrollbar": {
			display: "none",
		},
	})
);

interface ChipContainerProps {
	isActive: boolean;
}

// const ChipContainer = styled(CenterAlignedColumnContainer)<ChipContainerProps>`
// 	width: auto;
// 	height: 98%;
// 	padding-block: ${constants.spaces.xxsmall};
// 	padding-inline: ${constants.spaces.small};
// 	background: ${(props) => (props.isActive ? "white" : "#303030")};
// 	color: ${(props) => (props.isActive ? "#303030" : "white")};
// `;

const ChipContainer = styled(CenterAlignedColumnContainer)<ChipContainerProps>(
	({ isActive, theme }) => ({
		width: "auto",
		height: "98%",
		paddingBlock: theme["s-xxsmall"],
		paddingInline: theme["s-small"],
		background: isActive ? "lightgreen" : "#303030",
		color: isActive ? "#303030" : "white",
	})
);

const ChipText = styled(Text)(({ theme }) => ({
	fontSize: theme["s-small"],
	fontWeight: theme["fw-regular"],
}));
