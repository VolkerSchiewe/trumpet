import TextField, {OutlinedTextFieldProps} from "@material-ui/core/TextField";
import * as React from "react";
import {useState} from "react";
import {useTranslation} from "react-i18next";

interface Props extends Partial<OutlinedTextFieldProps> {
  field: string,
  setState: (key: string, value: string) => void,
  validation?: (value: string) => string
  required?: boolean
}

export default ({field, setState, validation, required, ...otherProps}: Props) => {
  const {t} = useTranslation();
  const [error, setError] = useState("");
  const onChange = (e: any) => {
    const value: string = e.target.value;
    const error = value && validation ? validation(value) : "";
    if (!error)
      setState(field, value);
    else
      setState(field, "");
    setError(error);
  };
  return (
    <TextField
      variant={"outlined"}
      label={t(field)}
      error={!!error}
      helperText={t(error)}
      fullWidth
      defaultValue={""}
      required={required == undefined ? true : required}
      onBlur={onChange}
      onChange={error ? onChange : undefined}
      {...otherProps}
    >
      {otherProps.children}
    </TextField>
  );
}