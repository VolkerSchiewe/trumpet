import React, {useEffect, useState} from "react";
import NumberWithBorder from "../shared/NumberWithBorder";


interface Props extends React.HTMLAttributes<HTMLDivElement> {
    title: string
}

const Countdown: React.FC<Props> = ({title, className}) => {
    const [days, setDays] = useState<number | undefined>(undefined)
    const calculateDaysLeft = () => {
        const start = new Date("2021/05/21 18:00")
        const distance = start.getTime() - new Date().getTime()
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        setDays(days)
    }
    useEffect(() => {
        const interval = setInterval(() => {
            calculateDaysLeft()
        }, 10000)
        calculateDaysLeft()
        return () => clearInterval(interval)
    })

    if (days && days < 1) {
        return null
    }
    return (
        <NumberWithBorder className={className} title={title} number={days}/>
    )
}

export default Countdown