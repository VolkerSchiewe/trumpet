import React from "react"
import {makeStyles} from "@material-ui/styles";
import {orchestraData} from "./orchestra-data"

const useStyles = makeStyles({
    conductor: {
        fill: "#7d7d7d",
        stroke: "black",
        strokeWidth: 0.75,
    },
    outlined: {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 0.75,
    },
    filled: {
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: 0.75,
    },
})

const Orchestra: React.FC<{ className: string }> = ({className}) => {
    const classes = useStyles()

    return (
        <div className={"w-full h-full " + className}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                 x="0px" y="0px" viewBox="0 0 1300 680" xmlSpace="preserve">
                <rect x="635" y="610" width="30" height="30" className={classes.conductor}/>

                {Object.keys(orchestraData).map((color: string) => {
                    return (
                        <g className={`text-${color}`}>
                            {
                                // @ts-ignore
                                orchestraData[color].map((item: any) => (
                                    <rect x={item.x} y={item.y} transform={item.transform}
                                          className={classes.outlined}
                                          width="15.59" height="15.59"/>
                                ))}
                        </g>
                    );
                })}
            </svg>
        </div>
    )
}
export default Orchestra