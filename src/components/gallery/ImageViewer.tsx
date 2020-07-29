import React, {useRef} from "react";
import {animated, useSprings} from "react-spring";
import {useDrag} from "react-use-gesture";
import {clamp} from "../../utils/clamp";


interface Props {

}

const imageUrls = [
    "/images/blaesertag2019.jpeg",
    "/images/campus.jpg",
    // "/images/herrnhuter-weg.jpg",
]
const ImageViewer: React.FC<Props> = ({}) => {
    const index = useRef(0)
    const [props, set] = useSprings(imageUrls.length, (i) => ({x: i * window.innerWidth}))

    const bind = useDrag(({down, movement: [mx], velocity, distance, direction:[xDir]}) => {
        velocity = clamp(velocity, 1, 3)
        // Set next image as current if distance is more than half of the screen
        if (!down && distance > window.innerWidth / 2) {
            index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, imageUrls.length - 1)
        }
        set(i => {
            const x = (i - index.current) * window.innerWidth + (down ? mx : 0)
            return ({x: x, });
        })
    })

    return (
        <div className="w-screen h-screen absolute overflow-hidden">
            {props.map(({x}, i) => (
                <animated.div {...bind()}
                              style={{
                                  x,
                                  backgroundImage: `url("${imageUrls[i]}")`,
                                  willChange: 'transform'
                              }}
                              className={"h-screen w-screen max-h-screen max-w-screen bg-center bg-contain bg-no-repeat"}
                />
            ))}
        </div>
    )
}

export default ImageViewer