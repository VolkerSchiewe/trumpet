import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import {Control, Controller, FieldError, Message, NestDataObject} from "react-hook-form";
import slugify from "../../utils/slugify";

interface Props {
    className?: string;
    name: string;
    choices: string[];
    errors: NestDataObject<Record<string, string | undefined>, FieldError>;
    control: Control;
    noLabel?: boolean;
    row?: boolean;
    helpText?: string;
}

export default function RadioInput({className, name, choices, errors, helpText, noLabel, control, row}: Props): JSX.Element {
    const t = (value: string | Message): string => value as string
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
                                    <FormControlLabel
                                        key={item}
                                        value={item}
                                        control={<Radio id={`radio-item-${name}-${slugify(item)}`}/> as JSX.Element}
                                        label={t(item)}/>
                                )
                            )}
                        </RadioGroup> as JSX.Element
                    }/>
                {helpText && (
                    <FormHelperText>{t(helpText)}</FormHelperText>
                )}
                {!!errors?.[name]?.message && (
                    <FormHelperText>{t(errors?.[name]?.message || "")}</FormHelperText>
                )}
            </FormControl>
        </div>
    )
}