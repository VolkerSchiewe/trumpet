import * as React from "react";
import {Button, TextField, Typography} from "@material-ui/core";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import Axios from "axios";

export default () => {
  const {executeRecaptcha} = useGoogleReCaptcha();
  const onClick = async () => {
    if (!executeRecaptcha)
      return;
    const token = await executeRecaptcha("registration");
    const res = await Axios.get("/checkRecaptcha?token=" + encodeURIComponent(token));
    console.log(res.data)
  };
  return (
    <div>
      <Typography variant={"h3"}> Anmeldung </Typography>
      <TextField label={"Name"}/>
      <TextField label={"Email Addresse"}/>
      <Button variant={"outlined"} onClick={onClick}> Submit </Button>
    </div>
  )
}