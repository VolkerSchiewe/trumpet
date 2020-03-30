import {TranslateContext} from "@denysvuika/preact-translate";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {h} from "preact"
import {useContext} from "preact/hooks";
import {Control, Controller, FieldError, NestDataObject} from "react-hook-form";
import slugify from "../../../functions/src/utils/slugify";

interface Props {
  choices: string[];
  name: string;
  errors: NestDataObject<Record<string, string | undefined>, FieldError>;
  className: string;
  control: Control;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rules?: any;
}

export default function SelectInput({className, name, choices, errors, control, rules, ...otherProps}: Props): JSX.Element {
  const {t} = useContext(TranslateContext);
  return (
    <div className={className}>
      <FormControl variant="outlined" fullWidth error={!!errors[name]} id={`select-input-${name}`}>
        <InputLabel id={`id-select-label-${name}`}>{t(name)}</InputLabel>
        <Controller
          as={
            <Select
              name={name}
              labelId={`id-select-label-${name}`}
              label={t(name)}
              {...otherProps}
            >
              {choices.map(item => (
                <MenuItem key={item} value={item} id={`select-item-${name}-${slugify(item)}`}>
                  {t(item)}
                </MenuItem>
              ))}
            </Select> as JSX.Element
          }
          name={name}
          control={control}
          rules={rules}
          defaultValue={""}
        />
        <FormHelperText>
          {errors?.[name]?.message}
        </FormHelperText>
      </FormControl>
    </div>
  )
}