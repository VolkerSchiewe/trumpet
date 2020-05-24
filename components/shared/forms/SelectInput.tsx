import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {Control, Controller, FieldError, Message, NestDataObject} from "react-hook-form";
import slugify from "../../../utils/slugify";

interface Props {
    choices: string[];
    name: string;
    errors: NestDataObject<Record<string, string | undefined>, FieldError>;
    className: string;
    control: Control;
    rules?: any;
}

export default function SelectInput({className, name, choices, errors, control, rules, ...otherProps}: Props): JSX.Element {
    const t = (value: string | Message): string => value as string
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