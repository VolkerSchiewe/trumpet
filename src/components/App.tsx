import {h} from "preact"
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import UserDataForm from "../modules/registration/UserDataForm";
import Container from "@material-ui/core/Container";
import {TranslateProvider} from "@denysvuika/preact-translate";
import de from "../i18n/de";
import en from "../i18n/en";

const translations = {
  de: de,
  en: en,
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
