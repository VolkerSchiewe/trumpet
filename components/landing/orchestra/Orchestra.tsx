import React from "react"
import {ThemeColor} from "../../styles/colors";
import {DistributionArray} from "./distributeOrchestraData";
import {orchestraData, RectangleAttr} from "./orchestra-data"

interface Props {
    className: string
    orchestraDistribution: DistributionArray
}

const Orchestra: React.FC<Props> = ({className, orchestraDistribution}) => {

    return (
        <div className={"w-full h-full " + className}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                 x="0px" y="0px" viewBox="0 0 1300 680" xmlSpace="preserve">
                <rect x="635" y="610" width="30" height="30" className="stroke-current stroke-075 fill-gray"/>

                {Object.keys(orchestraData).map((color) => {
                    const typedColor = color as ThemeColor
                    const filled = orchestraDistribution[typedColor]
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