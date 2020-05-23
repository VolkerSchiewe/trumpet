import {Button, Dialog, DialogContent, DialogContentText, DialogTitle, Divider, Typography} from "@material-ui/core";
import {NextPage} from "next";
import absoluteUrl from "next-absolute-url/index";
import {useRouter} from "next/router";
import React, {useState} from "react";
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
}

const EmailVerificationPage: NextPage<Props> = ({firstName, lastName, baseUrl}) => {
    const router = useRouter()
    const [alert, setAlert] = useState<Alert>({open: false, error: false, title: "",})
    const {token} = router.query

    const onClick = async () => {
        const res = await fetch(`${baseUrl}/api/verify-mail?token=${token}`, {method: "POST"})
        if (res.ok)
            setAlert({
                error: true,
                open: true,
                title: "Verification completed",
            })
        else
            setAlert({
                error: true,
                open: true,
                title: await res.text(),
            })
    }
    return (
        <Layout>
            <div className="flex flex-col items-center">
                <div className="flex flex-col max-w-4xl h-full m-5">
                    <div className="my-8">
                        <Typography align={"center"} variant={"h4"}>Verify your email address</Typography>
                    </div>
                    <Typography>{'Hello'} <b>{`${firstName} ${lastName},`}</b></Typography>
                    <br/>
                    <Typography>{`We received a registration for the Brüderischen Bläsertag 2021 in Berlin`}</Typography>
                    <Typography>{"To complete your registration please verify your email address by clicking the button below:"}</Typography>
                    <div className="my-6 mx-auto flex justify-center">
                        <Button variant={"outlined"} onClick={onClick}>
                            {"Verify my email"}
                        </Button>
                    </div>
                    <div className="flex-1"/>
                    <Divider/>
                    <div className="mt-2 mb-8 flex justify-center">
                        <Typography className="text-gray-600" variant={'caption'}>
                            {'If you did attempt to register yourself please ignore this email.'}
                        </Typography>
                    </div>
                </div>
            </div>
            <Dialog open={alert.open}>
                <DialogTitle>{alert.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {alert.error ? (
                            <>
                                {"Please try again or contact the team at "}
                                <a href="mailto:info@blaesertag2021.de">{"info@blaesertag2021.de."}</a>
                            </>
                        ) : (
                            "Your registration is completed. We are looking forward to see you in Berlin!"
                        )}
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
