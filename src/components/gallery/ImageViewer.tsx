import React from "react";
import {animated, useSpring} from "react-spring";
import {useDrag} from "react-use-gesture";

function clamp(number: number, lower: number, upper: number) {
    number = number <= upper ? number : upper
    number = number >= lower ? number : lower
    return number
}

interface Props {

}

const ImageViewer: React.FC<Props> = ({}) => {
    const [{x, y}, set] = useSpring(() => ({x: 0, y: 0}))

    const bind = useDrag(({down, movement: [mx, my], velocity}) => {
        velocity = clamp(velocity, 1, 3)
        set({x: down ? mx : 0, y: down ? my : 0, config: {mass: velocity, tension: 500 * velocity, friction: 50}})
    })

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <animated.div {...bind()} style={{x, backgroundImage: 'url("/images/blaesertag2019.jpeg")', willChange: 'transform'}}
                          className={"h-screen w-screen max-h-screen max-w-screen bg-center bg-contain bg-no-repeat"}/>
        </div>
    )
}

export default ImageViewer