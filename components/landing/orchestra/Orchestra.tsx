import React from "react"
import {getRandomNumbers} from "../../../utils/random";
import {ThemeColor} from "../ContentBlock";
import {orchestraData, RectangleAttr} from "./orchestra-data"

interface Props {
    className: string
    registrationsCount: number
}

const Orchestra: React.FC<Props> = ({className, registrationsCount}) => {
    // Security to reduce page load
    const maxPlaces = 264 // 4 colors * 66 rectangles
    const places = Math.min(maxPlaces, registrationsCount)
    const colors: ThemeColor[] = ['magenta', 'blue', 'yellow', 'green']

    type Distribution = { [key in ThemeColor]: number; }
    const colorsDistributed: Distribution = [...Array(places).keys()].reduce((acc, i) => {
        const color = colors[i % 4]
        acc[color] = acc[color] + 1
        return acc
    }, {'magenta': 0, 'blue': 0, 'yellow': 0, 'green': 0})
    type DistributionArray = { [key in ThemeColor]: number[]; }
    const placesDistributed: DistributionArray = Object.keys(colorsDistributed).reduce((acc, key) => {
        const typedKey = key as ThemeColor
        acc[typedKey] = getRandomNumbers(0, 65, colorsDistributed[typedKey])
        return acc
    }, {'magenta': [], 'blue': [], 'yellow': [], 'green': []} as DistributionArray)

    return (
        <div className={"w-full h-full " + className}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                 x="0px" y="0px" viewBox="0 0 1300 680" xmlSpace="preserve">
                <rect x="635" y="610" width="30" height="30" className="stroke-current stroke-075 fill-gray"/>

                {Object.keys(orchestraData).map((color) => {
                    const typedColor = color as ThemeColor
                    const filled = placesDistributed[typedColor]
                    return (
                        <g className={`text-${color}`} key={color}>
                            {
                                orchestraData[typedColor].map((item: RectangleAttr, index: number) => {
                                    return (
                                        <rect key={index} x={item.x} y={item.y} transform={item.transform}
                                              className={`stroke-current stroke-075 ${filled.includes(index) ? "fill-current" : "fill-none"}`}
                                              width="15.59" height="15.59"/>
                                    );
                                })}
                        </g>
                    );
                })}
            </svg>
        </div>
    )
}

export default Orchestra