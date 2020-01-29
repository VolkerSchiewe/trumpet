import * as React from "react"
import {makeStyles, Typography, ThemeProvider} from "@material-ui/core";
import theme from "../utils/theme";
import backgroundWebp from "../images/blaesertag2019.webp"
import backgroundJpg from "../images/blaesertag2019.jpg"

const useStyles = makeStyles({
    root: {
        height: "100vh",
        width: "100vw",
        margin: 0,
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
    },
    img: {
        height: "100vh",
    },
    wrapper: {
        position: "absolute",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(133,133,133,0.8)",
    },
    title: {
        margin: "100px 20px",
    }
});
export default () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <Typography className={classes.title} variant="h1" align={"center"}>Brüderischer Bläsertag 2021 in
                        Berlin</Typography>
                    <Typography variant={"h3"}>Coming soon...</Typography>
                </div>
                <picture>
                    <source srcSet={backgroundWebp} type="image/webp"/>
                    <source srcSet={backgroundJpg} type="image/jpeg"/>
                    <img src={backgroundJpg}/>
                </picture>
            </div>
        </ThemeProvider>
    )
}