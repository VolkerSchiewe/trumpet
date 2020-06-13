import {makeStyles} from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
    module: {
        position: 'relative',
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
            display: 'block',
            content: '""',
            flex: '2 0 0',
            borderBottom: '1px solid #000',
        },
        '&::after': {
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
    number?: number
    title: string
}

const NumberWithBorder: React.FC<Props> = ({title, number, className}) => {
    const classes = useStyles()

    return (
        <div className={className}>
            <div className={classes.module}>
                <div className={classes.bottomBorder}>
                    <div className={classes.borderText}>
                        <span className="font-bold text-lg">{title}</span>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <span className="font-medium text-center text-6xl">{number || ". . ."}</span>
                </div>
            </div>
        </div>
    )
}

export default NumberWithBorder