import {h} from "preact"
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormHelperText from "@material-ui/core/FormHelperText";
import {useContext} from "preact/hooks";
import {TranslateContext} from "@denysvuika/preact-translate";
import {Controller, Control} from "react-hook-form";
import slugify from "../../../functions/src/utils/slugify";

interface Props {
  className?: string
  name: string
  choices: string[]
  errors: any,
  control: Control,
  noLabel?: boolean
  row?: boolean
  helpText?: string
}

export default ({className, name, choices, errors, helpText, noLabel, control, row}: Props) => {
  const {t} = useContext(TranslateContext);
  return (
    <div className={className}>
      <FormControl component="fieldset" error={!!errors?.[name]?.message}>
        {!noLabel && (
          <FormLabel component="legend">{t(name)}</FormLabel>
        )}
        <Controller
          name={name}
          control={control}
          defaultValue={choices[0]}
          as={
            <RadioGroup
              row={row}
              aria-label={t(name)}
              name={name}
            >
              {choices.map(item => (
                  <FormControlLabel key={item} value={item} control={<Radio id={`radio-item-${slugify(item)}`}/> as any} label={t(item)}/>
                )
              )}
            </RadioGroup> as any
          }/>
        {helpText && (
          <FormHelperText>{t(helpText)}</FormHelperText>
        )}
        {!!errors?.[name]?.message && (
          <FormHelperText>{t(errors?.[name]?.message)}</FormHelperText>
        )}
      </FormControl>
    </div>
  )
}