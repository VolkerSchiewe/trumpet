import {NextPage} from "next";
import React from "react";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import Layout from "../components/shared/Layout";
import UserDataForm from "../components/registration/UserDataForm";
import {redirectIfRestricted} from "../utils/restrictAccess";

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

RegistrationPage.getInitialProps = async (ctx) => {
    await redirectIfRestricted(ctx.res)
    return {
        namespacesRequired: ['registration'],
    }
}

export default RegistrationPage