import * as React from "react";
import {Button, TextField, Typography} from "@material-ui/core";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import Axios from "axios";
import {useState} from "react";

export default () => {
  const {executeRecaptcha} = useGoogleReCaptcha();
  const [mail, setMail] = useState();
  const [name, setName] = useState();

  const onClick = async () => {
    if (!executeRecaptcha)
      return;
    const token = await executeRecaptcha("registration");
    const res = await Axios.post("/registration", {
        recaptchaToken: token,
        email: mail,
        name: name,
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      });
    console.log(res.data)

  };
  return (
    <div>
      <Typography variant={"h3"}> Anmeldung </Typography>
      <TextField onChange={(e) => setName(e.target.value)} label={"Name"}/>
      <TextField onChange={e => setMail(e.target.value)} label={"Email Addresse"}/>
      <Button variant={"outlined"} onClick={onClick}> Submit </Button>
    </div>
  )
}