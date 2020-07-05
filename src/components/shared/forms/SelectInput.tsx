import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {Controller} from "react-hook-form";
import {Control, FieldErrors, ValidationRules} from "react-hook-form/dist/types/form";
import {useTranslation} from "../../../i18n";
import slugify from "../../../utils/slugify";

interface Props {
    choices: string[];
    name: string;
    errors: FieldErrors
    className?: string;
    control: Control;
    rules?: ValidationRules;
}

export default function SelectInput({className, name, choices, errors, control, rules, ...otherProps}: Props): JSX.Element {
    const t = useTranslation("registration")
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
                    {t(errors?.[name]?.message as string)}
                </FormHelperText>
            </FormControl>
        </div>
    )
}