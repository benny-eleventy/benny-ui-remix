import { A } from "@/styles/animationStyles";
import {
	AnimatedCenterAlignedRowContainer,
	CenterAlignedColumnContainer,
	CenterAlignedRowContainer,
	s_small,
	Text,
	WrappedFlexStartCenterAlignedColumnContainer,
} from "@benny-eleventy/benny-ui";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import React from "react";
import { useTheme } from "styled-components";

const ITEMS = ["Welcome 👋", "You did it 🎉!", "Success ✅", "Warning ⚠️"];

const fruitesArray = [
	"Apple 🍎",
	"Banana 🍌",
	"Blackberry 🫐",
	"Blueberry 🫐",
	"Cherry 🍒",
	"Coconut 🥥",
	"Dragonfruit 🍍",
	"Durian 🍍",
	"Fig 🥝",
	"Grape 🍇",
	"Guava 🥝",
	"Jackfruit 🍍",
	"Kiwi 🥝",
	"Lemon 🍋",
	"Mango 🥭",
	"Melon 🍈",
	"Olive 🫒",
	"Orange 🍊",
	"Papaya 🍍",
	"Peach 🍑",
	"Pineapple 🍍",
	"Raspberry 🫒",
	"Strawberry 🍓",
	"Watermelon 🍉",
];
interface ListDummyProps {
	identifier: string;
}

const ListDummy = ({ identifier }: ListDummyProps) => {
	const [items, setItems] = React.useState(ITEMS);
	const [fruits, setFruits] = React.useState(fruitesArray);
	const [sort, setSort] = React.useState("asc");
	const [filter, setFilters] = React.useState("all");

	const [sortedFruits, setSortedFruits] = React.useState(
		fruitesArray.sort().reverse()
	);

	const handleSorting = (sortType: "asc" | "desc") => {
		console.log("sortType", sortType);
		if (sortType === "asc") {
			setSortedFruits((prev) => prev.sort());
		} else {
			setSortedFruits((prev) => prev.sort().reverse());
		}
	};

	const theme = useTheme();

	return (
		<LayoutGroup>
			<AnimatePresence>
				{items.map((item, index) => (
					<AnimatedCenterAlignedRowContainer
						width="50%"
						height="6vh"
						padding={s_small}
						key={item}
						background={theme.color_800}
						onClick={() => {
							setItems((prev) => prev.filter((i) => item !== i));
						}}
						layout
						initial={{
							y: 150,
							x: 0,
							opacity: 0,
						}}
						animate={{
							y: 0,
							x: 0,
							opacity: 1,
							transition: {
								duration: 0.5,
								delay: 0.1 * index,
							},
						}}
						exit={{
							opacity: 0,
							x: -400,
							transition: {
								duration: 0.8,
							},
						}}
					>
						<Text color="white">
							{item} - {identifier}{" "}
						</Text>
					</AnimatedCenterAlignedRowContainer>
				))}
			</AnimatePresence>
			<AnimatePresence>
				<CenterAlignedRowContainer
					width="auto"
					height="6vh"
					padding={s_small}
					marginTop={s_small}
				>
					<CenterAlignedColumnContainer
						width="auto"
						height="auto"
						padding={s_small}
						color="white"
						background={theme.color_900}
						onClick={() => {
							setSort("asc");
						}}
					>
						<Text color="white">Sort Asc</Text>
					</CenterAlignedColumnContainer>
					<CenterAlignedColumnContainer
						width="auto"
						height="auto"
						padding={s_small}
						color="white"
						background={theme.color_900}
						onClick={() => {
							setSort("desc");
						}}
					>
						<Text color="white">Sort Dsc</Text>
					</CenterAlignedColumnContainer>
					<CenterAlignedColumnContainer
						width="auto"
						height="auto"
						padding={s_small}
						color="white"
						background={theme.color_900}
						onClick={() => {
							setFilters("all");
						}}
					>
						<Text color="white">All</Text>
					</CenterAlignedColumnContainer>
					<CenterAlignedColumnContainer
						width="auto"
						height="auto"
						padding={s_small}
						color="white"
						background={theme.color_900}
						onClick={() => {
							setFilters("a");
						}}
					>
						<Text color="white">Filter By A</Text>
					</CenterAlignedColumnContainer>
					<CenterAlignedColumnContainer
						width="auto"
						height="auto"
						padding={s_small}
						color="white"
						background={theme.color_900}
						onClick={() => {
							setFilters("m");
						}}
					>
						<Text color="white">Filter By M</Text>
					</CenterAlignedColumnContainer>
				</CenterAlignedRowContainer>
				<WrappedFlexStartCenterAlignedColumnContainer
					width="100%"
					height="auto"
					padding={s_small}
				>
					{[...sortedFruits]
						.filter(
							(item) =>
								filter === "all" ||
								(filter === "a" && item.toLowerCase().startsWith("b")) ||
								(filter === "m" && item.toLowerCase().startsWith("m"))
						)
						.sort((a, b) =>
							sort === "asc" ? a.localeCompare(b) : b.localeCompare(a)
						)
						.map((item, index) => (
							<A.ACenterAlignedColumnContainer
								width="auto"
								height="6vh"
								padding={s_small}
								marginTop={s_small}
								key={item}
								background={theme.color_800}
								onClick={() => {
									setSortedFruits((prev) => prev.filter((i) => item !== i));
								}}
								layout
								transition={{
									layout: {
										duration: 1,
									},
								}}
								animationType="opacity"
								animationConfig={[0, 1, 0]}
								animationDuration={[0.5, 0.8]}
								animationDelay={0.1 * index}
								hoverAnimation={{
									scale: 1.1,
									transition: {
										duration: 0.8,
									},
								}}
							>
								<Text color="white">
									{item} - {identifier}{" "}
								</Text>
							</A.ACenterAlignedColumnContainer>
						))}
				</WrappedFlexStartCenterAlignedColumnContainer>
			</AnimatePresence>
		</LayoutGroup>
	);
};

export default ListDummy;
