import {TranslateContext} from "@denysvuika/preact-translate";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";
import {h, JSX} from "preact"
import {useContext, useState} from "preact/hooks"
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import {useForm} from 'react-hook-form'
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
  REGISTRATION_TYPE,
  SHIRT,
  STREET_NUMBER,
  VOICE,
  ZIP_CITY
} from "../../utils/database";
import RadioInput from "../forms/RadioInput";
import SelectInput from "../forms/SelectInput";
import TextInput from "../forms/TextInput";
import {
  accommodationOptions,
  arrivalOptions,
  BEGINNER,
  congregationSuggestions,
  departureOptions,
  dietSuggestions,
  GUEST,
  NO_ACCOMMODATION,
  registrationOptions,
  shirtOptions,
  voiceOptions,
  yesNoOptions
} from "./choices";
import {errorRequired, validators} from "./valdiations";

const REGISTRATION_URL = "/registration";


export default (): JSX.Element => {
  const {executeRecaptcha} = useGoogleReCaptcha();
  const {t} = useContext(TranslateContext);
  const {register, setValue, errors, watch, control, handleSubmit, reset} = useForm({
    mode: "onBlur",
  });
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);


  const onSubmit = async (data: object): Promise<void> => {
    if (!executeRecaptcha)
      return;
    setLoading(true);
    const token = await executeRecaptcha("registration");

    // send data to server
    try {
      const res = await Axios.post(REGISTRATION_URL, {
          recaptchaToken: token,
          ...data,
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        });
      if (res.status == 200) {
        alert("Anmeldung versendet! Bitte bestätige noch deine Email Adresse.");
        setError("");
        reset()
      }
    } catch (e) {
      console.error(e.message);
      setError(t("Something went wrong. Try again later!"))
    } finally {
      setLoading(false);
    }
  };

  const registrationType = watch(REGISTRATION_TYPE);
  const accommodation = watch(ACCOMMODATION);
  return (
    <div>
      {/*
      // @ts-ignore*/}
      <form className="flex flex-wrap pt-4" onSubmit={handleSubmit(onSubmit)}>
        <Typography className="w-full p-2" variant={"h3"}>{t("Registration")}</Typography>
        <TextInput className="w-full md:w-1/2 p-2" name={FIRST_NAME} errors={errors}
                   inputRef={register({required: t(errorRequired)})} />
        <TextInput className="w-full md:w-1/2 p-2" name={LAST_NAME} errors={errors}
                   inputRef={register({required: t(errorRequired)})} />
        <TextInput className="w-full md:w-1/2 p-2" name={EMAIL} type={"email"} errors={errors}
                   inputRef={register({
                     required: t(errorRequired),
                     pattern: {value: validators[EMAIL].pattern, message: t(validators[EMAIL].message)}
                   })} />
        <TextInput className="w-full md:w-1/2 p-2" name={PHONE} errors={errors} type={"tel"}
                   inputRef={register} />
        <TextInput className="w-full md:w-1/2 p-2" name={BIRTHDAY} errors={errors}
                   inputProps={{inputMode: 'decimal'}}
                   inputRef={register({required: t(errorRequired), validate: validators[BIRTHDAY].validation})} />
        <TextInput className="w-full p-2" name={STREET_NUMBER} errors={errors}
                   inputRef={register({
                     required: t(errorRequired),
                     pattern: {value: validators[STREET_NUMBER].pattern, message: t(validators[STREET_NUMBER].message)}
                   })} />
        <TextInput className="w-full p-2" name={ZIP_CITY} errors={errors} inputRef={register({
          required: t(errorRequired),
          pattern: {value: validators[ZIP_CITY].pattern, message: t(validators[ZIP_CITY].message)}
        })} />
        <div className="w-full p-2">
          <Divider />
        </div>
        <TextInput className="w-full p-2" name={CONGREGATION} errors={errors} setValue={setValue}
                   suggestions={congregationSuggestions} autoComplete={"off"}
                   inputRef={register({required: t(errorRequired)})} />
        <SelectInput className="w-full md:w-1/2 p-2" name={REGISTRATION_TYPE} errors={errors}
                     choices={registrationOptions} control={control} rules={{required: t(errorRequired)}} />
        {registrationType !== GUEST && (
          <SelectInput className="w-full md:w-1/2 p-2" name={VOICE} errors={errors} choices={voiceOptions}
                       control={control} rules={{required: t(errorRequired)}} />
        )}
        {registrationType == BEGINNER && (
          <TextInput className="w-full p-2" name={INSTRUMENT_TIME} errors={errors}
                     inputRef={register({required: t(errorRequired)})} />
        )}
        <SelectInput className="w-full md:w-1/2 p-2" name={ARRIVAL} errors={errors} choices={arrivalOptions}
                     control={control} rules={{required: t(errorRequired)}} />
        <SelectInput className="w-full md:w-1/2 p-2" name={DEPARTURE} errors={errors} choices={departureOptions}
                     control={control} rules={{required: t(errorRequired)}} />
        <RadioInput className="w-full p-2" name={ACCOMMODATION} errors={errors} choices={accommodationOptions}
                    control={control} />
        {accommodation !== NO_ACCOMMODATION && (
          <TextInput className="w-full p-2" name={ACCOMMODATION_WITH} errors={errors} />
        )}
        <div className={"w-full p-2"}>
          <Divider />
        </div>
        <SelectInput className="w-full md:w-1/4 p-2" name={SHIRT} errors={errors} choices={shirtOptions}
                     control={control} />
        <TextInput className="w-full md:w-3/4 p-2" name={DIETS} errors={errors} inputRef={register}
                   suggestions={dietSuggestions} autoComplete={"off"} setValue={setValue} />

        <div className={"w-full p-2"}>
          <Typography>
            Ich stimme zu, dass Fotos von mir im Rahmen des Bläsertags in Gemeindezeitungen, zur Dokumentation und auf
            Internetseiten veröffentlicht werden.
          </Typography>
          <RadioInput name={PHOTO_AGREEMENT} errors={errors} choices={yesNoOptions} noLabel row control={control}
                      helpText={"This agreement can always be revoked at the organization of the brass festival."} />
        </div>
        <TextInput className="w-full p-2" name={COMMENTS} errors={errors} inputRef={register} multiline />

        {error && (
          <Typography className={"w-full p-2"} color={"error"}>{error}</Typography>
        )}
        <div className="p-2">
          <Button id={`btn-submit-form`} variant={"outlined"} type={"submit"}> {t("Submit")} </Button>

        </div>

        <Backdrop open={isLoading}>
          <CircularProgress />
        </Backdrop>
      </form>
    </div>
  )
}