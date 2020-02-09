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
  REGISTRATION_TYPE,
  SHIRT,
  Street_NUMBER,
  VOICE,
  ZIP_CITY
} from "../../utils/database";
import TextInput from "../forms/TextInput";
import {useTranslation} from "react-i18next";
import {validateBirthday, validateEmail, validateStreetAndNumber, validateZipAndCity} from "./valdiations";
import {
  arrivalOptions,
  BEGINNER,
  congregationSuggestions,
  departureOptions, dietSuggestions,
  registrationOptions,
  voiceOptions,
  yesNoOptions
} from "./choices";
import SelectInput from "../forms/SelectInput";
import RadioInput from "../forms/RadioInput";

const REGISTRATION_URL = "/registration";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
});

export default () => {
  const {executeRecaptcha} = useGoogleReCaptcha();
  const [data, setData] = useState({[PHOTO_AGREEMENT]: "yes"} as any);

  const setState = (key: string, value: string) => {
    setData({...data, [key]: value})
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha)
      return;
    const token = await executeRecaptcha("registration");
    console.log(data);
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
      console.error(e.message)
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
            <TextInput field={CONGREGATION} setState={setState} suggestions={congregationSuggestions}/>
          </Grid>
          <Grid item sm={6} xs={12}>
            <SelectInput field={VOICE} setState={setState} choices={voiceOptions}/>
          </Grid>
          <Grid item sm={6} xs={12}>
            <SelectInput field={REGISTRATION_TYPE} setState={setState} choices={registrationOptions}/>
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

          {/*TODO add information about accommodation*/}
          <Grid item sm={6} xs={12}>
            <TextInput field={ACCOMMODATION} setState={setState}/>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextInput field={ACCOMMODATION_WITH} setState={setState} required={false}/>
          </Grid>

          <Grid item sm={6} xs={12}>
            {/* TODO dropdown*/}
            <TextInput field={SHIRT} setState={setState} required={false}/>

          </Grid>

          <Grid item xs={12}>
            <TextInput field={DIETS} setState={setState} required={false} suggestions={dietSuggestions}/>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              Ich stimme zu, dass Fotos von mir im Rahmen des Bläsertags in Gemeindezeitungen, zur Dokumentation und auf
              Internetseiten veröffentlicht werden.
            </Typography>
            <RadioInput field={PHOTO_AGREEMENT} setState={setState} choices={yesNoOptions} noLabel
                        helpText={"This agreement can always be revoked at the organization of the brass festival."}/>
          </Grid>

          <Grid item xs={12}>
            <TextInput field={COMMENTS} setState={setState} required={false} multiline rows={2}/>
          </Grid>

          <Grid item xs={12}>
            <Button variant={"outlined"} type={"submit"}> Submit </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}