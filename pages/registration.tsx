import Typography from "@material-ui/core/Typography";
import {GetStaticProps, NextPage} from "next";
import {useRouter} from "next/router";
import React from "react";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import UserDataContainer from "../src/components/registration/UserDataContainer";
import Layout from "../src/components/shared/Layout";
import {getI18nProps, useTranslation, withI18n} from "../src/i18n";

const RegistrationPage: NextPage = () => {
    const t = useTranslation("registration")
    const router = useRouter()
    return (
        <Layout>
            <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_KEY}>
                <div className="w-full max-w-2xl m-auto">
                    <div className='flex justify-end items-start mt-5'>
                        <svg className='h-8 w-8 text-blue-dark cursor-pointer' fill="currentColor" viewBox="0 0 20 20" onClick={()=>router.push("/")}>
                            <path fillRule="evenodd"
                                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                  clipRule="evenodd"/>
                        </svg>
                        <div className='flex-1'/>
                        <img className="w-1/3 mx-2" src={"images/headline-black.svg"} alt={"headline"}/>
                        <img className="w-1/5 mx-2" src={"images/logo.svg"} alt={"logo"}/>
                    </div>
                    <Typography className="w-full p-2 text-blue-dark" variant={"h3"}>{t("Registration")}</Typography>
                    <UserDataContainer/>
                </div>
            </GoogleReCaptchaProvider>
        </Layout>
    );
}


export const getStaticProps: GetStaticProps = async (ctx) => ({
    props: await getI18nProps(ctx, ['common', 'registration']),
})

export default withI18n(RegistrationPage)