import {
	Filters,
	Card,
	SectionTitleText,
	SectionDivider,
	DualColorChip,
} from "@/components";
import {
	constants,
	FlexStartCenterAlignedColumnContainer,
	OverflowFlexStartCenterAlignedColumnContainer,
	WrappedFlexStartCenterAlignedColumnContainer,
	themes,
	CenterAlignedColumnContainer,
} from "@benny-eleventy/benny-ui";
import {
	columnContainersData,
	rowContainersData,
	defaultContainerProps,
	divProperties,
} from "@/contentSeed";
import styled from "styled-components";

const BackgroundColor = styled.div`
	padding: ${(props) => props.theme["s-small"]};
	gap: ${(props) => props.theme["s-small"]};
	font-size: ${(props) => props.theme["fs-small"]};
	font-weight: ${(props) => props.theme["fw-bold"]};
`;

export default function Index() {
	// console.log(themes);

	const styledComponentsFitlers = [
		"Containers",
		"Text",
		"Buttons",
		"Inputs",
		"Image",
		"Animated Container",
	];
	return (
		<>
			<FlexStartCenterAlignedColumnContainer
				width="100%"
				height="90vh"
				padding={constants.spaces.xsmall}
				gap={constants.spaces.xsmall}
			>
				<Filters data={styledComponentsFitlers} />
				<OverflowFlexStartCenterAlignedColumnContainer
					width="100%"
					height="auto"
					backgroundColor={(props) => props.theme.color800}
					paddingBottom={constants.spaces.xxlarge}
					gap={(props) => props.theme["s-small"]}
				>
					<SectionTitleText title="Column Containers" />
					<WrappedFlexStartCenterAlignedColumnContainer
						width="100%"
						height="auto"
						gap={constants.spaces.small}
						padding={constants.spaces.small}
						style={{ justifyContent: "center" }}
					>
						{columnContainersData.map(
							({
								ParentContainer,
								containerName,
								containerInfomartion,
								notes,
								ChildContainer,
							}) => (
								<Card
									key={containerName}
									ParentContainer={ParentContainer}
									containerName={containerName}
									containerInfomartion={containerInfomartion}
									notes={notes}
									ChildContainer={ChildContainer}
									variant="horizontal"
								/>
							)
						)}
					</WrappedFlexStartCenterAlignedColumnContainer>
					<SectionDivider />
					<SectionTitleText title="Row Containers" />
					<WrappedFlexStartCenterAlignedColumnContainer
						width="100%"
						height="auto"
						gap={constants.spaces.small}
						padding={constants.spaces.small}
						style={{ justifyContent: "center" }}
					>
						{rowContainersData.map(
							({
								ParentContainer,
								containerName,
								containerInfomartion,
								notes,
								ChildContainer,
							}) => (
								<Card
									key={containerName}
									ParentContainer={ParentContainer}
									containerName={containerName}
									containerInfomartion={containerInfomartion}
									notes={notes}
									ChildContainer={ChildContainer}
									variant="vertical"
								/>
							)
						)}
					</WrappedFlexStartCenterAlignedColumnContainer>
					<SectionDivider />

					<SectionTitleText title="Defaults" />
					<WrappedFlexStartCenterAlignedColumnContainer
						width="100%"
						height="auto"
						gap={constants.spaces.small}
						padding={constants.spaces.small}
						style={{ justifyContent: "flex-start" }}
					>
						{defaultContainerProps.map((property) => (
							<DualColorChip
								key={`${[property[0]]}`}
								keyText={property[0]}
								valueText={property[1]}
								valueBackground="#014F54"
							/>
						))}
					</WrappedFlexStartCenterAlignedColumnContainer>
					<SectionDivider />
					<SectionTitleText title="Div Properties" />
					<WrappedFlexStartCenterAlignedColumnContainer
						width="100%"
						height="auto"
						gap={constants.spaces.small}
						style={{ justifyContent: "flex-start" }}
					>
						{divProperties.map((property) => (
							<FlexStartCenterAlignedColumnContainer
								key={`${property.utility}`}
								width="100%"
								height="auto"
								gap={constants.spaces.xsmall}
							>
								<SectionTitleText title={property.utility} />
								<WrappedFlexStartCenterAlignedColumnContainer
									width="100%"
									height="auto"
									gap={constants.spaces.small}
									padding={constants.spaces.small}
									style={{ justifyContent: "flex-start" }}
								>
									{property.properties.map((property) => (
										<DualColorChip
											key={`${property[0]}`}
											keyText={property[0]}
											valueText={property[1]}
											valueBackground="#695ED3"
											onClick={() => {
												window.open(
													"https://developer.mozilla.org/en-US/docs/Web/CSS/" +
														property[0]
												);
											}}
										/>
									))}
								</WrappedFlexStartCenterAlignedColumnContainer>
								<SectionDivider width="60%" />
							</FlexStartCenterAlignedColumnContainer>
						))}
					</WrappedFlexStartCenterAlignedColumnContainer>
				</OverflowFlexStartCenterAlignedColumnContainer>
			</FlexStartCenterAlignedColumnContainer>
		</>
	);
}
