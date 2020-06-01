import React from "react";
import {Divider} from "@material-ui/core";

interface Props {
    title: string
    content?: string
    color: "yellow" | "blue" | "green" | "magenta"
}

const ContentBlock: React.FC<Props> = ({color, title, content}) => {
    return (
        <div className={`border-${color} text-${color} hover:text-white hover:bg-${color} border p-5 transform hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-2xl`}>
            <h2 className={`font-medium italic text-lg mb-2`}>{title}</h2>
            <Divider/>
            <p className={`font-light text-sm font-sans-content my-2`}>
                {content || "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean\n" +
                "                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam\n" +
                "                felis, ultricies nec, light 30"}
            </p>
        </div>
    );
}


export default ContentBlock