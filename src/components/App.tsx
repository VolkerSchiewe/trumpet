import {TranslateProvider} from "@denysvuika/preact-translate";
import Container from "@material-ui/core/Container";
import {h} from "preact"
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import de from "../i18n/de";
import en from "../i18n/en";
import UserDataForm from "../modules/registration/UserDataForm";

const translations = {
  de,
  en,
};
export default () => (
  <div>
    <TranslateProvider lang={"de"} translations={translations}>
      <GoogleReCaptchaProvider reCaptchaKey={"6LcQYdQUAAAAAFFX5HpuTOvy9cz2SFWTLomepkIB"}>
        <Container fixed maxWidth={"sm"}>
          <UserDataForm/>
        </Container>
      </GoogleReCaptchaProvider>
    </TranslateProvider>
  </div>
)
