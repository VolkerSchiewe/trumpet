import React from "react";
import Logo from "../shared/Logo";

interface Props {
    imagePath: string
    imageAlt: string
    logoPosition: 'start' | 'end'
}

const LandingCarouselItem: React.FC<Props> = ({logoPosition, imagePath, imageAlt}) => {
    return (
        <div className="flex">
            {logoPosition === 'start' && (
                <Logo className="w-1/3 p-1"/>
            )}
            <picture className="w-2/3 p-2">
                <source srcSet={imagePath + '.webp'} type="image/webp"/>
                <img src={imagePath + '.jpg'}
                     alt={imageAlt}/>
            </picture>
            {logoPosition === 'end' && (
                <Logo className="w-1/3 p-1"/>
            )}
        </div>
    )
}

export default LandingCarouselItem