import { ListDummy, SectionTitleText } from "@/components";
import { PageContainer } from "@/styles";
import React from "react";

const index = () => {
	return (
		<PageContainer>
			<SectionTitleText title="List Animations" />
			<ListDummy identifier={"1"} />
		</PageContainer>
	);
};

export default index;
