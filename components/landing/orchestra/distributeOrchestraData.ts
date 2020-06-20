import {getRandomNumbers} from "../../../utils/random";
import {ThemeColor} from "../../styles/colors";

export type DistributionArray = { [key in ThemeColor]: number[]; }
export type Distribution = { [key in ThemeColor]: number; }

export function distributeOrchestraData(registrationsCount: number): DistributionArray {
    // Security to reduce page load
    const maxPlaces = 264 // 4 colors * 66 rectangles
    const places = Math.min(maxPlaces, registrationsCount)
    const colors: ThemeColor[] = ['magenta', 'blue', 'yellow', 'green']

    const colorsDistributed: Distribution = [...Array(places).keys()].reduce((acc, i) => {
            const color = colors[i % 4]
            acc[color] = acc[color] + 1
            return acc
        },
        {'magenta': 0, 'blue': 0, 'yellow': 0, 'green': 0}
    )
    return Object.keys(colorsDistributed).reduce((acc, key) => {
            const typedKey = key as ThemeColor
            acc[typedKey] = getRandomNumbers(0, 65, colorsDistributed[typedKey])
            return acc
        },
        {'magenta': [], 'blue': [], 'yellow': [], 'green': []} as DistributionArray
    )
}