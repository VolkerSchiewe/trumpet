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
  Street_NUMBER, VOICE,
  ZIP_CITY
} from "../../utils/database";
import TextInput from "./TextInput";

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
    [FIRST_NAME]: "",
    [LAST_NAME]: "",
    [EMAIL]: "",
    [PHONE]: "",
    [Street_NUMBER]: "",
    [ZIP_CITY]: "",
    [BIRTHDAY]: "",
    [DIETS]: "",
    [REGISTRATION_TYPE]: "",
    [CONGREGATION]: "",
    [VOICE]: "",
    [INSTRUMENT_TIME]: "",
    [ARRIVAL]: "",
    [DEPARTURE]: "",
    [ACCOMMODATION]: "",
    [ACCOMMODATION_WITH]: "",
    [PHOTO_AGREEMENT]: "",
    [SHIRT]: "",
    [COMMENTS]: "",
  });
  const [error, setError] = useState();

  const setState = (key: string, value: string) => {
    setData({...data, [key]: value})
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha)
      return;
    const token = await executeRecaptcha("registration");
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
      setError(e.response.data);
      console.log(e.message)
    }
  };


  const classes = useStyles();

  return (
    <div>
      <form onSubmit={onSubmit} className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant={"h3"}> Anmeldung </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextInput field={FIRST_NAME} data={data} setState={setState}/>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextInput field={LAST_NAME} data={data} setState={setState}/>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextInput field={EMAIL} data={data} setState={setState}/>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextInput field={PHONE} data={data} setState={setState}/>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextInput field={BIRTHDAY} data={data} setState={setState}/>
          </Grid>


          <Grid item xs={12}>
            <TextInput field={Street_NUMBER} data={data} setState={setState}/>
          </Grid>
          <Grid item xs={12}>
            <TextInput field={ZIP_CITY} data={data} setState={setState}/>
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextInput field={CONGREGATION} data={data} setState={setState}/>
          </Grid>
          <Grid item sm={6} xs={12}>
            {/*TODO Dropdown or radio buttons*/}
            <TextInput field={REGISTRATION_TYPE} data={data} setState={setState}/>
          </Grid>
          <Grid item xs={12}>
            {/* TODO only for starters*/}
            <TextInput field={INSTRUMENT_TIME} data={data} setState={setState}/>
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextInput field={ARRIVAL} data={data} setState={setState}/>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextInput field={DEPARTURE} data={data} setState={setState}/>
          </Grid>
          {/*TODO add information about accommodation*/}
          <Grid item sm={6} xs={12}>
            <TextInput field={ACCOMMODATION} data={data} setState={setState}/>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextInput field={ACCOMMODATION_WITH} data={data} setState={setState}/>
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextInput field={SHIRT} data={data} setState={setState}/>
          </Grid>

          <Grid item xs={12}>
            <TextInput field={DIETS} data={data} setState={setState}/>
          </Grid>

          <Grid item xs={12}>
            <TextInput field={PHOTO_AGREEMENT} data={data} setState={setState}/>
          </Grid>

          <Grid item xs={12}>
            <TextInput field={COMMENTS} data={data} setState={setState}/>
          </Grid>

          <Grid item xs={12}>
            <Button variant={"outlined"} type={"submit"}> Submit </Button>
          </Grid>
          <Typography style={{color: "red"}}>{error}</Typography>
        </Grid>
      </form>
    </div>
  )
}