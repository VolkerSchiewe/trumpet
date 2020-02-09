import * as React from "react"
import TextField from "@material-ui/core/TextField";
import {useTranslation} from "react-i18next";
import MenuItem from "@material-ui/core/MenuItem";

interface Props {
  field: string
  choices: string[]
  setState: (key: string, value: string) => void,
  required?: boolean
}

export default ({field, choices, setState, required}: Props) => {
  const {t} = useTranslation();
  return (
    <TextField
      variant={"outlined"}
      fullWidth
      select
      defaultValue={""}
      label={t(field)}
      onChange={e => setState(field, e.target.value)}
      required={required == undefined ? true : required}
    >
      {choices.map(item => (
        <MenuItem key={item} value={item}>
          {t(item)}
        </MenuItem>
      ))}
    </TextField>
  )
}