import {h} from "preact"
import {useContext} from "preact/hooks";
import {TranslateContext} from "@denysvuika/preact-translate";
import {Controller, Control} from "react-hook-form";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import slugify from "../../../functions/src/utils/slugify";

interface Props {
  choices: string[]
  name: string
  errors: any
  className: string
  control: Control
  rules?: any
}

export default ({className, name, choices, errors, control, rules, ...otherProps}: Props) => {
  const {t} = useContext(TranslateContext);
  return (
    <div className={className}>
      <FormControl variant="outlined" fullWidth error={!!errors[name]}
                   id={`select-input-${field}`}variant={"outlined"}
      >
        <InputLabel id={"id-select-label-" + name}>{t(name)}</InputLabel>
        <Controller
          as={
            <Select
              name={name}
              labelId={"id-select-label-" + name}
              label={t(name)}
              {...otherProps}
            >
              {choices.map(item => (
                <MenuItem key={item} value={item}>
                  {t(item)}
                </MenuItem>
              ))}
            </Select> as any
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
      {/*<TextField*/}
      {/*  variant={"outlined"}*/}
      {/*  fullWidth*/}
      {/*  select*/}
      {/*  defaultValue={""}*/}
      {/*  error={!!errors?.[name]?.message}*/}
      {/*  helperText={errors?.[name] && t(errors?.[name]?.message)}*/}
      {/*  label={t(name)}*/}
      {/*  name={name}*/}
      {/*  {...otherProps}*/}
      {/*>*/}
      {/*  {choices.map(item => (*/}
      {/*    <MenuItem key={item} value={item}>*/}
      {/*      {t(item)}*/}
      {/*    </MenuItem>*/}
      {/*  ))}*/}
      {/*</TextField>*/}
    </div>
  )
}