import {
	Filters,
	Card,
	SectionTitleText,
	SectionDivider,
	DualColorChip,
} from "@/components";
import {
	FlexStartCenterAlignedColumnContainer,
	OverflowFlexStartCenterAlignedColumnContainer,
	WrappedFlexStartCenterAlignedColumnContainer,
	s_small,
	s_xsmall,
	s_xxlarge,
} from "@benny-eleventy/benny-ui";
import {
	columnContainersData,
	rowContainersData,
	defaultContainerProps,
	divProperties,
} from "@/contentSeed";

export default function Index() {
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
				padding={s_xsmall}
			>
				<Filters data={styledComponentsFitlers} />
				<OverflowFlexStartCenterAlignedColumnContainer
					width="98%"
					height="auto"
					backgroundColor={(props) => props.theme.color800}
					paddingBottom={s_xxlarge}
				>
					<SectionTitleText title="Column Containers" />
					<WrappedFlexStartCenterAlignedColumnContainer
						width="100%"
						height="auto"
						padding={s_small}
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
						padding={s_small}
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
						padding={s_small}
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
						style={{ justifyContent: "flex-start" }}
					>
						{divProperties.map((property) => (
							<FlexStartCenterAlignedColumnContainer
								key={`${property.utility}`}
								width="100%"
								height="auto"
							>
								<SectionTitleText title={property.utility} />
								<WrappedFlexStartCenterAlignedColumnContainer
									width="100%"
									height="auto"
									padding={s_small}
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
