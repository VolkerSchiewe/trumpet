import type { ThemeColor } from '$lib/types/colors';
import { colors } from './data';

export type DistributionArray = { [key in ThemeColor]: number[] };
export type Distribution = { [key in ThemeColor]: number };

export function distributeOrchestraData(registrationsCount: number): DistributionArray {
	const maxPlaces = 264; // 4 colors * 66 rectangles
	const places = Math.min(maxPlaces, registrationsCount);

	const colorsDistributed: Distribution = [...Array(places).keys()].reduce(
		(acc, i) => {
			const color = colors[i % 4];
			acc[color] = acc[color] + 1;
			return acc;
		},
		{ magenta: 0, blue: 0, yellow: 0, green: 0 }
	);

	const test = Object.keys(colorsDistributed).reduce(
		(acc, key) => {
			const typedKey = key as ThemeColor;
			acc[typedKey] = getRandomNumbers(0, 65, colorsDistributed[typedKey]);
			return acc;
		},
		{ magenta: [], blue: [], yellow: [], green: [] } as DistributionArray
	);
	return test;
}

export function getRandomNumbers(min: number, max: number, count = 1): number[] {
	const result: number[] = [];
	while (result.length < Math.round(count)) {
		const random = Math.floor(Math.random() * (max - min + 1)) + min;
		if (!result.includes(random)) result.push(random);
	}
	return result;
}
