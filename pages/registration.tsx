import React from "react";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import Layout from "../components/shared/Layout";
import UserDataForm from "../components/registration/UserDataForm";

const RegistrationPage = () => (
    <Layout>
        <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_KEY}>
            <div className="w-full max-w-2xl m-auto">
                <UserDataForm/>
            </div>
        </GoogleReCaptchaProvider>
    </Layout>
)

export default RegistrationPage