import Typography from "@material-ui/core/Typography";
import React from "react";
import {Control, FieldErrors} from "react-hook-form";
import {useTranslation} from "../../i18n";
import {get} from "../../utils/request";
import RadioInput from "../shared/forms/RadioInput";
import SelectInput from "../shared/forms/SelectInput";
import SubmitButton from "../shared/forms/SubmitButton";
import TextInput from "../shared/forms/TextInput";
import {
    accommodationOptions,
    arrivalOptions,
    BEGINNER,
    congregationSuggestions,
    departureOptions,
    dietSuggestions,
    GUEST,
    NO_ACCOMMODATION, PARTICIPANT,
    registrationOptions,
    voiceOptions,
    yesNoOptions
} from "./choices";
import {
    ACCOMMODATION,
    ACCOMMODATION_WITH,
    ARRIVAL,
    BIRTHDAY,
    COMMENTS,
    CONGREGATION,
    DEPARTURE,
    DIETS,
    EMAIL,
    FIRST_NAME,
    INSTRUMENT_TIME,
    LAST_NAME,
    PHONE,
    PHOTO_AGREEMENT,
    REGISTRATION_TYPE,
    STREET_NUMBER, UserData,
    VOICE,
    ZIP_CITY
} from "./types";
import {errorRequired, validators} from "./valdiations";
import {register, setValue} from "../../types/react-hook-form";

interface Props {
    onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
    errors: FieldErrors<UserData>;
    register: register;
    setValue: setValue<UserData>;
    control: Control;
    registrationType: string;
    accommodation: string;
}

const UserDataForm: React.FC<Props> = ({onSubmit, errors, register, setValue, control, registrationType, accommodation}) => {
    const t = useTranslation("registration")
    const validateEmail = (value: string): Promise<string | boolean> => {
        return get(`/api/validate-email?email=${value}`).then(res => {
            if (res.status === 200)
                return t("This email is already registered")
            return true
        })
    }
    return (
        <div>
            <form className="flex flex-wrap pt-4" onSubmit={onSubmit}>
                <TextInput className="w-full md:w-1/2 p-2" name={FIRST_NAME} errors={errors}
                           inputRef={register({required: errorRequired})}/>
                <TextInput className="w-full md:w-1/2 p-2" name={LAST_NAME} errors={errors}
                           inputRef={register({required: errorRequired})}/>
                <TextInput className="w-full md:w-1/2 p-2" name={EMAIL} type={"email"} errors={errors}
                           inputRef={register({
                               required: errorRequired,
                               pattern: {value: validators[EMAIL].pattern, message: validators[EMAIL].message},
                               validate: validateEmail
                           })}/>
                <TextInput className="w-full md:w-1/2 p-2" name={PHONE} errors={errors} type={"tel"}
                           inputRef={register}/>
                <TextInput className="w-full md:w-1/2 p-2" name={BIRTHDAY} errors={errors}
                           inputProps={{inputMode: 'decimal'}}
                           inputRef={register({
                               required: errorRequired,
                               validate: validators[BIRTHDAY].validation
                           })}/>
                <TextInput className="w-full p-2" name={STREET_NUMBER} errors={errors}
                           inputRef={register({
                               required: errorRequired,
                               pattern: {
                                   value: validators[STREET_NUMBER].pattern,
                                   message: validators[STREET_NUMBER].message
                               }
                           })}/>
                <TextInput className="w-full p-2" name={ZIP_CITY} errors={errors} inputRef={register({
                    required: errorRequired,
                    pattern: {value: validators[ZIP_CITY].pattern, message: validators[ZIP_CITY].message}
                })}/>
                <div className="w-full h-8"/>
                <TextInput className="w-full p-2" name={CONGREGATION} errors={errors} setValue={setValue}
                           suggestions={congregationSuggestions} autoComplete={"off"}
                           inputRef={register({required: errorRequired})}/>
                <SelectInput className="w-full md:w-1/2 p-2" name={REGISTRATION_TYPE} errors={errors}
                             choices={registrationOptions} control={control} rules={{required: errorRequired}}/>
                {[PARTICIPANT, BEGINNER].includes(registrationType) && (
                    <SelectInput className="w-full md:w-1/2 p-2" name={VOICE} errors={errors} choices={voiceOptions}
                                 control={control} rules={{required: errorRequired}}/>
                )}
                {registrationType == BEGINNER && (
                    <TextInput className="w-full p-2" name={INSTRUMENT_TIME} errors={errors}
                               inputRef={register({required: errorRequired})}/>
                )}
                <div className='w-full'/>
                <SelectInput className="w-full md:w-1/2 p-2" name={ARRIVAL} errors={errors} choices={arrivalOptions}
                             control={control} rules={{required: errorRequired}}/>
                <SelectInput className="w-full md:w-1/2 p-2" name={DEPARTURE} errors={errors} choices={departureOptions}
                             control={control} rules={{required: errorRequired}}/>
                <div className='w-full'/>
                <RadioInput className="w-full md:w-1/2 p-2" name={ACCOMMODATION} errors={errors}
                            choices={accommodationOptions}
                            control={control}/>
                {(accommodation !== NO_ACCOMMODATION && accommodation !== undefined) && (
                    <TextInput className="w-full md:w-1/2 p-2" name={ACCOMMODATION_WITH} errors={errors}/>
                )}
                <div className="w-full h-8"/>

                <div className={"w-full p-2"}>
                    <Typography>
                        {t("photoAgreementText")}
                    </Typography>
                    <RadioInput name={PHOTO_AGREEMENT} errors={errors} choices={yesNoOptions} noLabel row
                                control={control}
                                helpText={t("photoAgreementRevocation")}/>
                </div>
                <TextInput className="w-full p-2" name={DIETS} errors={errors} inputRef={register}
                           suggestions={dietSuggestions} autoComplete={"off"} setValue={setValue}
                           placeholder={t("vegetarian, allergies, etc")}/>
                <TextInput className="w-full p-2" name={COMMENTS} errors={errors} inputRef={register} multiline/>

                <div className='w-full md:w-1/2'/>
                <div className="w-full md:w-1/2 p-2">
                    <SubmitButton className='float-right' fullWidth id={`btn-submit-form`}>{t("Submit")}</SubmitButton>
                </div>
            </form>
        </div>
    )
}

export default UserDataForm