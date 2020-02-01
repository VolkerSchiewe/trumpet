import * as React from "react";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import UserDataForm from "../modules/registration/UserDataForm";

export default () => (
  <div>
    <GoogleReCaptchaProvider reCaptchaKey={"6LcQYdQUAAAAAFFX5HpuTOvy9cz2SFWTLomepkIB"}>
      <UserDataForm/>
    </GoogleReCaptchaProvider>
  </div>
)