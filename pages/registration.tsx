import Typography from "@material-ui/core/Typography";
import {GetStaticProps, GetStaticPropsContext, NextPage, NextPageContext} from "next";
import React from "react";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import Layout from "../components/shared/Layout";
import UserDataForm from "../components/registration/UserDataForm";
import {getI18nProps, useTranslation, withI18n} from "../utils/i18n";

const RegistrationPage: NextPage = () => {
    const t = useTranslation("registration")
    return (
        <Layout>
            <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_KEY}>
                <div className="w-full max-w-2xl m-auto">
                    <div className='flex justify-end items-start mt-5'>
                        <img className="w-1/3 mx-2" src={"images/headline-black.svg"} alt={"headline"}/>
                        <img className="w-1/5 mx-2" src={"images/logo.svg"} alt={"logo"}/>
                    </div>
                    <Typography className="w-full p-2 text-blue-dark" variant={"h3"}>{t("Registration")}</Typography>
                    <UserDataForm/>
                </div>
            </GoogleReCaptchaProvider>
        </Layout>
    );
}


export const getStaticProps: GetStaticProps = async (ctx) => ({
    props: await getI18nProps(ctx, ['common', 'registration']),
})

export default withI18n(RegistrationPage)