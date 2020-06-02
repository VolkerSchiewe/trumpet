import React from "react";

type ThemeColor = "yellow" | "blue" | "green" | "magenta"

interface Props {
    title: string
    content?: string
    color: ThemeColor
}

const ContentBlock: React.FC<Props> = ({color, title, content}) => {
    return (
        <div className={`group border-${color} text-black hover:bg-${color} border p-5
            transform hover:scale-105 transition-all duration-200 ease-in-out hover:shadow-2xl cursor-pointer`}>
            <h2 className={`font-medium italic text-lg mb-2`}>{title}</h2>
            <hr className={`border-${color} group-hover:border-black`}/>
            <p className={`font-light text-sm font-sans-content my-2`}>
                {content || "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean\n" +
                "                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam\n" +
                "                felis, ultricies nec, light 30"}
            </p>
        </div>
    );
}


export default ContentBlock