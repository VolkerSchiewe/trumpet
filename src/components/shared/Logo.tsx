import React from "react";
interface Props {
    className?: string
}
const Logo: React.FC<Props> = ({className}) => {
    return (
        <img className={className} src={"images/logo.svg"} alt={"Logo mit 4 Berliner Bären mit Instrumenten"}/>
    )
}

export default Logo