import React from "react";

export type ThemeColor = "yellow" | "blue" | "green" | "magenta"

interface Props {
    title: string
    content?: string
    color: ThemeColor
    onClick?: ()=> void
}

const ContentBlock: React.FC<Props> = ({color, title, content, onClick}) => {
    return (
        <div className={`group border-${color} text-black hover:bg-${color} hover:text-white border p-5
            transform hover:scale-105 transition-all duration-200 ease-in-out hover:shadow-2xl hover:z-10 cursor-pointer`}
            onClick={onClick}
        >
            <h2 className={`font-bold italic text-3xl text-${color} group-hover:text-white`}>{title}</h2>
            <hr className={`border-${color} group-hover:border-white my-4`}/>
            <p className={`font-light text-lg font-sans-content text-black`}>
                {content || "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean\n" +
                "                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam\n" +
                "                felis, ultricies nec, light 30"}
            </p>
            {/*<button className="float-right bg-center bg-no-repeat bg-contain px-12 py-3 text-blue-400" style={{backgroundImage: `url('/images/button_bg_${color}.svg')`}}>Mehr</button>*/}
        </div>
    );
}


export default ContentBlock