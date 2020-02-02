import * as React from "react";
import {Button, TextField, Typography} from "@material-ui/core";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import Axios from "axios";
import {FormEvent, useState} from "react";

const REGISTRATION_URL = "/registration";

export default () => {
  const {executeRecaptcha} = useGoogleReCaptcha();
  const [mail, setMail] = useState("volker.s1994@gmail.com");
  const [name, setName] = useState("Volker");
  const [error, setError] = useState();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha)
      return;
    const token = await executeRecaptcha("registration");
    try {
      await Axios.post(REGISTRATION_URL, {
          recaptchaToken: token,
          email: mail,
          name: name,
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
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Typography variant={"h3"}> Anmeldung </Typography>
        <TextField onChange={(e) => setName(e.target.value)} label={"Name"} value={name}/>
        <TextField onChange={e => setMail(e.target.value)} label={"Email Addresse"} value={mail}/>
        <Button variant={"outlined"} type={"submit"}> Submit </Button>
        <Typography style={{color: "red"}}>{error}</Typography>
      </form>
    </div>
  )
}