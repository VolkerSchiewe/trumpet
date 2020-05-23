import {Button, Dialog, DialogContent, DialogContentText, DialogTitle, Snackbar, Typography} from "@material-ui/core";
import {GetStaticProps, NextPage, NextPageContext} from "next";
import absoluteUrl from "next-absolute-url/index";
import {useRouter} from "next/router";
import React, {useState} from "react";
import {log} from "util";
import Layout from "../components/shared/Layout";

interface Props {
    firstName: string
    lastName: string
    baseUrl: string
}

interface Alert {
    open: boolean,
    error: boolean
    title: string,
    message: string
}

const EmailVerificationPage: NextPage<Props> = ({firstName, lastName, baseUrl}) => {
    const router = useRouter()
    const [alert, setAlert] = useState<Alert>({open: false, error: false, title: "", message: ""})
    const {token} = router.query

    const onClick = async () => {
        const res = await fetch(`${baseUrl}/api/verify-mail?token=${token}`, {method: "POST"})
        if (res.ok)
            setAlert({
                error: true,
                open: true,
                title: "Verification completed",
                message: "Your registration is completed. We are looking forward to see you in Berlin!"
            })
        else
            setAlert({
                error: true,
                open: true,
                title: await res.text(),
                message: "Please try again or contact the team at info@blaesertag2021.de."
            })
    }
    return (
        <Layout>
            <div className="flex flex-col items-center">
                <div className="max-w-6xl flex flex-col items-around">
                    <Typography align={"center"} variant={"h4"}>Verify your email address</Typography>
                    <Typography>{`Hello ${firstName} ${lastName},`}</Typography>
                    <Typography>{`We received a registration for the Brüderischen Bläsertag 2021 in Berlin`}</Typography>
                    <Typography>{"To complete your registration please verify your email address by clicking the button below:"}</Typography>
                    <Button variant={"outlined"} onClick={onClick}>
                        {"Verify my email"}
                    </Button>
                </div>
            </div>
            <Dialog open={alert.open}>
                <DialogTitle>{alert.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {alert.message}
                    </DialogContentText>
                </DialogContent></Dialog>
        </Layout>
    );
}

EmailVerificationPage.getInitialProps = async (context) => {
    const {token} = context.query
    const {origin} = absoluteUrl(context.req)
    const url = `${origin}/api/get-name?token=${token}`
    const res = await fetch(url)
    if (res.ok)
        return {...(await res.json()), baseUrl: origin}
    else {
        return {firstName: "", lastName: ""}
    }
}
export default EmailVerificationPage
