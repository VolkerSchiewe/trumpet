import {Button, Dialog, DialogContent, DialogContentText, DialogTitle, Divider, Typography} from "@material-ui/core";
import {NextPage} from "next";
import absoluteUrl from "next-absolute-url/index";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Layout from "../components/shared/Layout";
import {redirectIfRestricted} from "../utils/restrictAccess";
import {get, post} from "../utils/request";

interface Props {
    firstName?: string
    lastName?: string
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
    useEffect(() => {
        if (!firstName && !lastName) {
            router.replace("/")
        }
    }, [])
    const onClick = async () => {
        const res = await post(`${baseUrl}/api/verify-mail?token=${token}`)
        if (res.status === 200)
            setAlert({
                error: false,
                open: true,
                title: "Verification completed",
            })
        else
            setAlert({
                error: true,
                open: true,
                title: await res.data,
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

EmailVerificationPage.getInitialProps = async ({req, res, query}) => {
    await redirectIfRestricted(res)
    const {token} = query
    const {origin} = absoluteUrl(req)
    const url = `${origin}/api/get-name?token=${token}`
    const response = await get(url)
    if (response.status === 200)
        return {...(response.data), baseUrl: origin}
    else {
        return {baseUrl: origin}
    }
}
export default EmailVerificationPage
