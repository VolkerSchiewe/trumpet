import {h} from "preact"
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {useContext} from "preact/hooks";
import {TranslateContext} from "@denysvuika/preact-translate";
import slugify from "../../../functions/src/utils/slugify";

interface Props {
  field: string
  choices: string[]
  setState: (key: string, value: string) => void,
  required?: boolean
}

export default ({field, choices, setState, required}: Props) => {
  const {t} = useContext(TranslateContext);
  return (
    <TextField
      id={`select-input-${field}`}
      variant={"outlined"}
      fullWidth
      select
      defaultValue={""}
      label={t(field)}
      onChange={e => setState(field, e.target.value)}
      required={required == undefined ? true : required}
    >
      {choices.map(item => (
        <MenuItem key={item} value={item} id={`select-item-${field}-${slugify(item)}`}>
          {t(item)}
        </MenuItem>
      ))}
    </TextField>
  )
}