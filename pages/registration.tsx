import React from "react";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import Layout from "../components/Layout";
import UserDataForm from "../components/registration/UserDataForm";

const RegistrationPage = () => (
    <Layout>
        <GoogleReCaptchaProvider reCaptchaKey={"6LcQYdQUAAAAAFFX5HpuTOvy9cz2SFWTLomepkIB"}>
            <div className="w-full max-w-2xl m-auto">
                <UserDataForm/>
            </div>
        </GoogleReCaptchaProvider>
    </Layout>
)

export default RegistrationPage