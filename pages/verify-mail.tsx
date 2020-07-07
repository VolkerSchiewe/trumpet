import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography
} from "@material-ui/core";
import {GetStaticProps, NextPage} from "next";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Layout from "../src/components/shared/Layout";
import Logo from "../src/components/shared/Logo";
import {getI18nProps, useTranslation, withI18n} from "../src/i18n";
import {post} from "../src/utils/request";


enum State {
    LOADING,
    DONE,
    ERROR
}

const EmailVerificationPage: NextPage = () => {
    const t = useTranslation("verify-mail")
    const {query: {token}, replace} = useRouter()
    const [state, setState] = useState<State>(State.LOADING)
    const [error, setError] = useState<string>("")
    useEffect(() => {
        const verifyMail = async () => {
            const res = await post(`${location.origin}/api/verify-mail?token=${token}`)
            if (res.status === 200) {
                setState(State.DONE)
            } else {
                setError(res.data)
                setState(State.ERROR)
            }
        }
        if (token)
            verifyMail().then()
    }, [token])

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (state == State.DONE) {
            timer = setTimeout(async () => {
                await replace("/")
            }, 5000)
        }
        return () => clearTimeout(timer)
    }, [state])
    return (
        <Layout disableGutters>
            <picture>
                <source srcSet="/images/campus.webp" type="image/webp"/>
                <source srcSet="/images/campus.jpg" type="image/jpeg"/>
                <img className="w-screen h-screen object-cover" src={"/images/campus-slogan.jpg"} alt={"Campus Brüdergemeine Berlin"}/>
            </picture>
            <Dialog open={true} fullWidth>
                <DialogTitle disableTypography className="flex justify-between items-center">
                    <Typography>
                        {t("Email Verification")}

                    </Typography>
                    <Logo className="h-12 w-12"/>
                </DialogTitle>
                <DialogContent className={"flex justify-center items-center"} style={{height: 100}}>
                    {state === State.LOADING && (
                        <CircularProgress/>
                    )}
                    {state === State.DONE && (
                        <div className="flex flex-col">
                            <Typography>{t("Your email has been verified")}. {t("This completes your registration")}.</Typography>
                            <Typography>{t("In a second, you will be redirected to the home page")}.</Typography>
                        </div>
                    )}
                    {state === State.ERROR && (
                        <Typography color={"error"}>{t(error)}</Typography>
                    )}
                </DialogContent>{[State.DONE, State.ERROR].includes(state) &&
            <DialogActions>
                <Button onClick={() => replace("/")}>{t("Back to home page")}</Button>
            </DialogActions>}
            </Dialog>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async (ctx) => ({
    props: await getI18nProps(ctx, ['common', 'verify-mail']),
})
export default withI18n(EmailVerificationPage)
