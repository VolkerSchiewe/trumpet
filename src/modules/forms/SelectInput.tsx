import {h} from "preact"
import {useContext} from "preact/hooks";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {TranslateContext} from "@denysvuika/preact-translate";
import slugify from "../../../functions/src/utils/slugify";

interface Props {
  className?: string
  field: string
  choices: string[]
  setState: (key: string, value: string) => void,
  required?: boolean
}

export default ({className, field, choices, setState, required}: Props) => {
  const {t} = useContext(TranslateContext);
  return (
    <div className={className}>
      <TextField
        id={`select-input-${field}`}variant={"outlined"}
        fullWidth
        select
        defaultValue={""}
        label={t(field)}
        onChange={e => setState(field, e.target.value)}
        required={required == undefined ? true : required}
      >
        {choices.map(item => (
          <MenuItem key={item} value={item}id={`select-item-${field}-${slugify(item)}`}>
            {t(item)}
          </MenuItem>
        ))}
      </TextField>
    </div>
  )
}