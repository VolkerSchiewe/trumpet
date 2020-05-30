import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import React, {useEffect, useState} from "react";

const useStyles = makeStyles({
    module: {
        position: 'relative',
        borderRadius: 3,
        padding: '20px 50px',
        borderRight: '1px solid #000',
        borderTop: '1px solid #000',
        borderLeft: '1px solid #000',
        minWidth: 170,
    },
    bottomBorder: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,

        '&::before': {
            borderRadius: '3px 0 0 0',
            display: 'block',
            content: '""',
            flex: '2 0 0',
            borderBottom: '1px solid #000',
        },
        '&::after': {
            borderRadius: '0 3px 0 0',
            display: 'block',
            content: '""',
            flex: '2 0 0',
            borderBottom: '1px solid #000',
        },
    },
    borderText: {
        height: 26,
        color: '#000',
        flex: '0 0 150px',
        marginBottom: '-10px',
        textAlign: 'center',
    },

})

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    title: string
}

const Countdown: React.FC<Props> = ({title, className}) => {
    const classes = useStyles()
    const [days, setDays] = useState<number | null>(null)
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

    if (days && days < 1){
        return null
    }
    return (
        <div className={className}>
            <div className={classes.module}>
                <div className={classes.bottomBorder}>
                    <div className={classes.borderText}>
                        <Typography>{title}</Typography>
                    </div>
                </div>
                <div>
                    <Typography align={"center"} variant={"h1"}>{days || ". . ."}</Typography>
                </div>
            </div>
        </div>

    )
}

export default Countdown