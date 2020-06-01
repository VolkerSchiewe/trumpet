import Carousel from "@brainhubeu/react-carousel";
import React from "react";

const LandingCarousel: React.FC = () => (
    <Carousel
        dots
        infinite
        autoPlay={10000}
    >
        <div className='bg-white flex flex-row items-start relative'>
            <picture className="w-2/3 px-2">
                <source srcSet={"images/campus-slogan.webp"} type="image/webp"/>
                <img src={"images/campus-slogan.jpg"} alt="Campus Brüdergemeine"/>
            </picture>
            <img className="w-1/3 px-1" src={"images/logo.svg"} alt={"logo"}/>
        </div>
        <div className='bg-white flex flex-row '>
            <img className="w-1/3 p-1" src={"images/logo.svg"} alt={"logo"}/>
            <picture className="w-2/3 p-2">
                <source srcSet={"images/oberbaumbruecke-slogan.webp"} type="image/webp"/>
                <img src={"images/oberbaumbruecke-slogan.jpg"} alt={"Oberbaumbrücke"}/>
            </picture>
        </div>
    </Carousel>
)

export default LandingCarousel