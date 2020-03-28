import {h} from "preact"
import TextField, {OutlinedTextFieldProps} from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import {useContext, useRef, useState} from "preact/hooks";
import {TranslateContext} from "@denysvuika/preact-translate";

interface Props extends Partial<OutlinedTextFieldProps> {
  name: string
  suggestions?: string[]
  errors: any
  setValue?: (v: any) => void
}

export default ({name, errors, suggestions, className, setValue, ...otherProps}: Props) => {
  const {t} = useContext(TranslateContext);
  const [suggestionsSorted, setSuggestions] = useState([] as string[]);
  const inputRef = useRef<OutlinedTextFieldProps>(null);

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
        helperText={errors?.[name] && t(errors?.[name]?.message)}
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