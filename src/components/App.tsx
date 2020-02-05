import * as React from "react";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import UserDataForm from "../modules/registration/UserDataForm";
import Container from "@material-ui/core/Container";

export default () => (
  <div>
    <GoogleReCaptchaProvider reCaptchaKey={"6LcQYdQUAAAAAFFX5HpuTOvy9cz2SFWTLomepkIB"}>
      <Container fixed maxWidth={"sm"}>
        <UserDataForm/>
      </Container>
    </GoogleReCaptchaProvider>
  </div>
)
