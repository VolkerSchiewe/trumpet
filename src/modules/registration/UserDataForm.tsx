import * as React from "react";
import {FormEvent, useState} from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import Axios from "axios";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
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
import {useTranslation} from "react-i18next";
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
import {Backdrop} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const REGISTRATION_URL = "/registration";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
});

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

  const onSubmit = async (e: FormEvent) => {
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

  const classes = useStyles();
  const {t} = useTranslation();

  return (
    <div>
      <form onSubmit={onSubmit} className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant={"h3"}> Anmeldung </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextInput field={FIRST_NAME} setState={setState}/>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextInput field={LAST_NAME} setState={setState}/>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextInput field={EMAIL} setState={setState} type={"email"} validation={validateEmail}/>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextInput field={PHONE} setState={setState} type={"tel"} required={false}/>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextInput field={BIRTHDAY} setState={setState} validation={validateBirthday} placeholder={"dd.mm.yyyy"}
                       inputProps={{inputMode: 'numeric'}}/>
          </Grid>

          <Grid item xs={12}>
            <TextInput field={Street_NUMBER} setState={setState} validation={validateStreetAndNumber}/>
          </Grid>
          <Grid item xs={12}>
            <TextInput field={ZIP_CITY} setState={setState} validation={validateZipAndCity}/>
          </Grid>

          <Grid item xs={12}>
            <Divider/>
          </Grid>

          <Grid item xs={12}>
            <TextInput field={CONGREGATION} setState={setState} suggestions={congregationSuggestions}/>
          </Grid>
          <Grid item sm={6} xs={12}>
            <SelectInput field={REGISTRATION_TYPE} setState={setState} choices={registrationOptions}/>
          </Grid>
          <Grid item sm={6} xs={12}>
            {data[REGISTRATION_TYPE] !== GUEST && (
              <SelectInput field={VOICE} setState={setState} choices={voiceOptions}/>
            )}
          </Grid>
          {data[REGISTRATION_TYPE] == BEGINNER && (
            <Grid item xs={12}>
              <TextInput field={INSTRUMENT_TIME} setState={setState}/>
            </Grid>
          )}
          <Grid item sm={6} xs={12}>
            <SelectInput field={ARRIVAL} setState={setState} choices={arrivalOptions}/>
          </Grid>
          <Grid item sm={6} xs={12}>
            <SelectInput field={DEPARTURE} setState={setState} choices={departureOptions}/>
          </Grid>

          <Grid item xs={12}>
            <RadioInput field={ACCOMMODATION} setState={setState} choices={accommodationOptions}/>
          </Grid>
          {data[ACCOMMODATION] !== NO_ACCOMMODATION && (
            <Grid item xs={12}>
              <TextInput field={ACCOMMODATION_WITH} setState={setState} required={false}/>
            </Grid>
          )}

          <Grid item xs={12}>
            <Divider/>
          </Grid>

          <Grid item sm={3} xs={12}>
            <SelectInput field={SHIRT} setState={setState} choices={shirtOptions} required={false}/>
          </Grid>

          <Grid item sm={9} xs={12}>
            <TextInput field={DIETS} setState={setState} required={false} suggestions={dietSuggestions}/>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              Ich stimme zu, dass Fotos von mir im Rahmen des Bläsertags in Gemeindezeitungen, zur Dokumentation und auf
              Internetseiten veröffentlicht werden.
            </Typography>
            <RadioInput field={PHOTO_AGREEMENT} setState={setState} choices={yesNoOptions} noLabel row
                        helpText={"This agreement can always be revoked at the organization of the brass festival."}/>
          </Grid>

          <Grid item xs={12}>
            <TextInput field={COMMENTS} setState={setState} required={false} multiline/>
          </Grid>

          {error && (
            <Grid item xs={12}>
              <Typography color={"error"}>{error}</Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button variant={"outlined"} type={"submit"}> {t("Submit")} </Button>
          </Grid>

          <Backdrop open={isLoading}>
            <CircularProgress/>
          </Backdrop>
        </Grid>
      </form>
    </div>
  )
}