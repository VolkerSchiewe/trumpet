import Carousel from "@brainhubeu/react-carousel";
import React from "react";
import LandingCarouselItem from "./LandingCarouselItem";

const LandingCarousel: React.FC = () => (
    <Carousel
        dots
        infinite
        autoPlay={10000}
    >
        <LandingCarouselItem imagePath={"/images/campus-slogan"}
                             imageAlt={"Campus Brüdergemeine Berlin mit Aufschrift Brüderischer Bläsertag 2021 Berlin"}
                             logoPosition={"end"}/>
        <LandingCarouselItem imagePath={"/images/oberbaumbruecke-slogan"}
                             imageAlt={"Oberbaumbrücke bei Sonnenuntergang mit Aufschrift Brüderischer Bläsertag 2021 Berlin"}
                             logoPosition={"start"}/>
        <LandingCarouselItem imagePath={'/images/herrnhuter-weg-slogan'}
                             imageAlt={"Herrnhuter Weg Straßenschild mit Aufschrift Brüderischer Bläsertag 2021 Berlin"}
                             logoPosition={'end'}/>
    </Carousel>
)

export default LandingCarousel