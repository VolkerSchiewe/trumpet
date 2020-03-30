import {TranslateContext} from "@denysvuika/preact-translate";
import Chip from "@material-ui/core/Chip";
import TextField, {OutlinedTextFieldProps} from "@material-ui/core/TextField";
import {h, JSX} from "preact"
import {useContext, useRef, useState} from "preact/hooks";
import {FieldError, NestDataObject} from "react-hook-form"
import slugify from "../../../functions/src/utils/slugify";

interface Props extends Partial<OutlinedTextFieldProps> {
  name: string;
  suggestions?: string[];
  errors: NestDataObject<Record<string, string|undefined>, FieldError>;
  setValue?: (v: object) => void;
}

export default function TextInput({name, errors, suggestions, className, setValue, ...otherProps}: Props): JSX.Element {
  const {t} = useContext(TranslateContext);
  const [suggestionsSorted, setSuggestions] = useState([] as string[]);
  const inputRef = useRef<OutlinedTextFieldProps>(null);

  const onChange = (e: any): void => {
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

  const onSuggestionClick = (item: string): void => {
    onChange({target: {value: item}});
    setValue && setValue([{[name]: item}]);
  };
  return (
    <div className={className}>
      <TextField
        id={`text-input-${name}`}
        variant={"outlined"}
        label={t(name)}
        error={!!errors?.[name]?.message}
        helperText={errors?.[name] && t(errors?.[name]?.message || "")}
        fullWidth
        defaultValue={""}
        inputRef={inputRef}
        onChange={onChange}
        name={name}
        {...otherProps}
      >
        {otherProps.children}
      </TextField>
      {suggestions && (
        <div>
          {suggestionsSorted.map((item, key) => (
            <Chip
              id={`text-suggestion-${name}-${slugify(item)}`}
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