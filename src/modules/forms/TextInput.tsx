import {h} from "preact"
import TextField, {OutlinedTextFieldProps} from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import {useContext, useRef, useState} from "preact/hooks";
import {TranslateContext} from "@denysvuika/preact-translate";

interface Props extends Partial<OutlinedTextFieldProps> {
  field: string,
  setState: (key: string, value: string) => void,
  validation?: (value: string) => string
  required?: boolean
  suggestions?: string[]
}

export default ({field, setState, validation, required, suggestions, className, ...otherProps}: Props) => {
  const {t} = useContext(TranslateContext);
  const [error, setError] = useState("");
  const [suggestionsSorted, setSuggestions] = useState([] as string[]);
  const inputRef = useRef<OutlinedTextFieldProps>(null);

  const validate = (e: any) => {
    const value: string = e.target.value;

    // validate
    const error = value && validation ? validation(value) : "";
    if (!error)
      setState(field, value);
    else
      setState(field, "");
    setError(error);
  };

  const onChange = (e: any) => {
    const value: string = e.target.value;

    // select suggestions
    if (suggestions && value)
      if (suggestions.find(i => value.toLowerCase() === i.toLowerCase()))
        setSuggestions([]);
      else
        setSuggestions(suggestions.filter(i => i.toLowerCase().indexOf(value.toLowerCase()) >= 0).slice(0, 5));
    else if (value === "") {
      setSuggestions([])
    }
  };

  const onSuggestionClick = (item: string) => {
    if (inputRef && inputRef.current) {
      inputRef.current.value = item;
      onChange({target: {value: item}})
    }
    setState(field, item)
  };
  return (
    <div className={className}>
      <TextField
        id={`text-input-${field}`}
        variant={"outlined"}
        label={t(field)}
        error={!!error}
        helperText={t(error)}
        fullWidth
        defaultValue={""}
        required={required == undefined ? true : required}
        onBlur={validate}
        onChange={error ? validate : onChange}
        inputRef={inputRef}
        {...otherProps}
      >
        {otherProps.children}
      </TextField>
      {suggestions && (
        <div>
          {suggestionsSorted.map((item, key) => (
            <Chip
              style={{margin: 3}}
              key={key}
              label={t(item)}
              onClick={() => onSuggestionClick(t(item))}
              variant={"outlined"}
              color={"primary"}
            />
          ))}
        </div>
      )}
    </div>
  );
}