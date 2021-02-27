import React, { useState } from "react";
import "./App.css";

const calcPoops = (
	numberOfDays: number,
	startingPoops: number,
	growthRate: number
) => {
	let poopCounts: number[] = new Array(numberOfDays);
	let currentPoops = startingPoops;

	for (let i = 0; i < numberOfDays; i++) {
		const newPoops = currentPoops * growthRate;
		currentPoops = currentPoops + newPoops;
		poopCounts[i] = currentPoops;
	}
	return poopCounts;
};

const App = () => {
	const [numberOfDays, setNumberOfDays] = useState(7);

	const [growthRate, setGrowthRate] = useState(50);

	const [startingPoops, setStartingPoops] = useState(2);

	const poopGrowth = calcPoops(numberOfDays, startingPoops, growthRate / 100);

	return (
		<div>
			<div>
				<input
					min={0}
					type="number"
					value={numberOfDays}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setNumberOfDays(parseInt(e.currentTarget.value, 10));
					}}
				/>
				<input
					min={0}
					type="number"
					value={growthRate}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setGrowthRate(parseInt(e.currentTarget.value, 10));
					}}
				/>
				<input
					min={0}
					type="number"
					value={startingPoops}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setStartingPoops(parseInt(e.currentTarget.value, 10));
					}}
				/>
			</div>
			{poopGrowth.map((poopiePoop, index) => (
				<div key={`poopOnDay${index}`}>
					Total PooPoo's after {index + 1} day{index === 0 ? "" : "s"}:{" "}
					{poopiePoop.toFixed()}
				</div>
			))}
		</div>
	);
};

export default App;
