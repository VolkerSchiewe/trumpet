import * as React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {useTranslation} from "react-i18next";
import {FormHelperText} from "@material-ui/core";

interface Props {
  field: string,
  choices: string[]
  setState: (key: string, value: string) => void
  helpText?: string
  noLabel?: boolean
}

export default ({field, choices, setState, helpText, noLabel}: Props) => {
  const {t} = useTranslation();
  return (
    <FormControl component="fieldset">
      {!noLabel && (
        <FormLabel component="legend">{t(field)}</FormLabel>
      )}
      <RadioGroup aria-label={t(field)} name={field} defaultValue={choices[0]}
                  onChange={e => setState(field, e.target.value)}>
        {choices.map(item => (
            <FormControlLabel key={item} value={item} control={<Radio/>} label={t(item)}/>
          )
        )}
      </RadioGroup>
      <FormHelperText>{helpText && t(helpText)}</FormHelperText>
    </FormControl>
  )
}