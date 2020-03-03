import {h} from "preact"
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormHelperText from "@material-ui/core/FormHelperText";
import {useContext} from "preact/hooks";
import {TranslateContext} from "@denysvuika/preact-translate";
import slugify from "../../../functions/src/utils/slugify";

interface Props {
  className?: string
  field: string,
  choices: string[]
  setState: (key: string, value: string) => void
  helpText?: string
  noLabel?: boolean
  row?: boolean
}

export default ({className, field, choices, setState, helpText, noLabel, row}: Props) => {
  const {t} = useContext(TranslateContext);
  return (
    <div className={className}>
        <FormControl component="fieldset">
          {!noLabel && (
            <FormLabel component="legend">{t(field)}</FormLabel>
          )}
            <RadioGroup
                row={row}
                aria-label={t(field)}
                name={field}
                defaultValue={choices[0]}
                onChange={e => setState(field, e.target.value)}>
              {choices.map(item => (
                  <FormControlLabel key={item} value={item} control={<Radio id={`radio-item-${slugify(item)}`}/> as any} label={t(item)}/>
                )
              )}
            </RadioGroup>
          {helpText && (
            <FormHelperText>{t(helpText)}</FormHelperText>
          )}
        </FormControl>
    </div>
  )
}