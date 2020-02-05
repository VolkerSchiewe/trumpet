import TextField from "@material-ui/core/TextField";
import * as React from "react";
import {useTranslation} from "react-i18next";

interface Props {
  field: string,
  setState: (key: string, value: string) => void,
  data: any
}

export default ({field, setState, data}: Props) => {
  const {t} = useTranslation();
  return (
    <TextField variant={"outlined"} onChange={e => setState(field, e.target.value)} label={t(field)}
               value={data[field]} fullWidth/>
  );
}