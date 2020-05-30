import {NextPage, NextPageContext} from "next";
import React from "react";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import Layout from "../components/shared/Layout";
import UserDataForm from "../components/registration/UserDataForm";
import {getI18nProps, withI18n} from "../utils/i18n";

const RegistrationPage: NextPage = () => {
    return (
        <Layout>
            <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_KEY}>
                <div className="w-full max-w-2xl m-auto">
                    <UserDataForm/>
                </div>
            </GoogleReCaptchaProvider>
        </Layout>
    );
}


export const getStaticProps = async (ctx: NextPageContext) => ({
    props: await getI18nProps(ctx, ['common', 'registration']),
})

export default withI18n(RegistrationPage)