import {h} from "preact"
import {useContext, useState} from "preact/hooks"
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import Axios from "axios";
import {
  ACCOMMODATION,
  ACCOMMODATION_WITH,
  ARRIVAL,
  BIRTHDAY,
  COMMENTS,
  CONGREGATION,
  DEPARTURE,
  DIETS,
  EMAIL,
  FIRST_NAME,
  INSTRUMENT_TIME,
  LAST_NAME,
  PHONE,
  PHOTO_AGREEMENT,
  REGISTRATION_TYPE, requiredFields,
  SHIRT,
  Street_NUMBER,
  VOICE,
  ZIP_CITY
} from "../../utils/database";
import TextInput from "../forms/TextInput";
import {validateBirthday, validateEmail, validateStreetAndNumber, validateZipAndCity} from "./valdiations";
import {
  accommodationOptions,
  arrivalOptions,
  BEGINNER,
  congregationSuggestions,
  departureOptions, dietSuggestions, GUEST, NO_ACCOMMODATION,
  registrationOptions, shirtOptions,
  voiceOptions, YES,
  yesNoOptions
} from "./choices";
import SelectInput from "../forms/SelectInput";
import RadioInput from "../forms/RadioInput";
import Divider from "@material-ui/core/Divider";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import {TranslateContext} from "@denysvuika/preact-translate";

const REGISTRATION_URL = "/registration";


export default () => {
  const {executeRecaptcha} = useGoogleReCaptcha();
  const [data, setData] = useState({
    [ACCOMMODATION]: NO_ACCOMMODATION,
    [PHOTO_AGREEMENT]: YES,
  } as any);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const setState = (key: string, value: string) => {
    setData({...data, [key]: value})
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (!executeRecaptcha)
      return;
    setLoading(true);
    const token = await executeRecaptcha("registration");

    // check if required fields are available
    const missingFields = requiredFields.filter(item => !data[item]);
    if (missingFields.length) {
      setError(t("Please fill out the following fields correctly: ") + missingFields.map(i => t(i)).join(", "));
      setLoading(false);
      return
    }

    // send data to server
    try {
      await Axios.post(REGISTRATION_URL, {
          recaptchaToken: token,
          ...data,
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        });
    } catch (e) {
      console.error(e.message);
      setError(t("Something went wrong. Try again later!"))
    } finally {
      setLoading(false);
    }
  };

  const {t} = useContext(TranslateContext);

  return (
    <div>
      <form className="flex flex-wrap pt-4" onSubmit={onSubmit}>
        <Typography className="w-full p-2" variant={"h3"}> Anmeldung </Typography>
        <TextInput className="w-full md:w-1/2 p-2" field={FIRST_NAME} setState={setState}/>
        <TextInput className="w-full md:w-1/2 p-2" field={LAST_NAME} setState={setState}/>
        <TextInput className="w-full md:w-1/2 p-2" field={EMAIL} setState={setState} type={"email"}
                   validation={validateEmail}/>
        <TextInput className="w-full md:w-1/2 p-2" field={PHONE} setState={setState} type={"tel"} required={false}/>
        <TextInput className="w-full md:w-1/2 p-2" field={BIRTHDAY} setState={setState} validation={validateBirthday}
                   inputProps={{inputMode: 'numeric'}}/>
        <TextInput className="w-full p-2" field={Street_NUMBER} setState={setState}
                   validation={validateStreetAndNumber}/>
        <TextInput className="w-full p-2" field={ZIP_CITY} setState={setState} validation={validateZipAndCity}/>
        <div className="w-full p-2">
          <Divider/>
        </div>
        <TextInput className="w-full p-2" field={CONGREGATION} setState={setState}
                   suggestions={congregationSuggestions}/>
        <SelectInput className="w-full md:w-1/2 p-2" field={REGISTRATION_TYPE} setState={setState}
                     choices={registrationOptions}/>
        {data[REGISTRATION_TYPE] !== GUEST && (
          <SelectInput className="w-full md:w-1/2 p-2" field={VOICE} setState={setState} choices={voiceOptions}/>
        )}
        {data[REGISTRATION_TYPE] == BEGINNER && (
          <TextInput className="w-full p-2" field={INSTRUMENT_TIME} setState={setState}/>
        )}
        <SelectInput className="w-full md:w-1/2 p-2" field={ARRIVAL} setState={setState} choices={arrivalOptions}/>
        <SelectInput className="w-full md:w-1/2 p-2" field={DEPARTURE} setState={setState} choices={departureOptions}/>
        <RadioInput className="w-full p-2" field={ACCOMMODATION} setState={setState} choices={accommodationOptions}/>
        {data[ACCOMMODATION] !== NO_ACCOMMODATION && (
          <TextInput className="w-full p-2" field={ACCOMMODATION_WITH} setState={setState} required={false}/>
        )}
        <div className={"w-full p-2"}>
          <Divider/>
        </div>
        <SelectInput className="w-full md:w-1/4 p-2" field={SHIRT} setState={setState} choices={shirtOptions}
                     required={false}/>
        <TextInput className="w-full md:w-3/4 p-2" field={DIETS} setState={setState} required={false}
                   suggestions={dietSuggestions}/>

        <div className={"w-full p-2"}>
          <Typography>
            Ich stimme zu, dass Fotos von mir im Rahmen des Bläsertags in Gemeindezeitungen, zur Dokumentation und auf
            Internetseiten veröffentlicht werden.
          </Typography>
          <RadioInput field={PHOTO_AGREEMENT} setState={setState} choices={yesNoOptions} noLabel row
                      helpText={"This agreement can always be revoked at the organization of the brass festival."}/>
        </div>
        <TextInput className="w-full p-2" field={COMMENTS} setState={setState} required={false} multiline/>

        {error && (
          <Typography className={"w-full p-2"} color={"error"}>{error}</Typography>
        )}
        <div className="p-2">
          <Button id={`btn-submit-form`} variant={"outlined"} type={"submit"}> {t("Submit")} </Button>

        </div>

        <Backdrop open={isLoading}>
          <CircularProgress/>
        </Backdrop>
      </form>
    </div>
  )
}