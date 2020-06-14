import React, {useState} from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import {useForm} from 'react-hook-form'
import {useTranslation} from "../../utils/i18n";
import {post} from "../../utils/request";
import SubmitButton from "../shared/forms/SubmitButton";
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
    SHIRT,
    STREET_NUMBER, UserData,
    VOICE,
    ZIP_CITY
} from "./types";
import RadioInput from "../shared/forms/RadioInput";
import SelectInput from "../shared/forms/SelectInput";
import TextInput from "../shared/forms/TextInput";
import {
    accommodationOptions,
    arrivalOptions,
    BEGINNER,
    congregationSuggestions,
    departureOptions,
    dietSuggestions,
    GUEST,
    NO_ACCOMMODATION,
    registrationOptions,
    shirtOptions,
    voiceOptions,
    yesNoOptions
} from "./choices";
import {errorRequired, validators} from "./valdiations";

const REGISTRATION_URL = "/api/registration";


const UserDataForm = () => {
    const t = useTranslation("registration")
    const {executeRecaptcha} = useGoogleReCaptcha();
    const {register, setValue, errors, watch, control, handleSubmit, reset} = useForm<UserData>({
        mode: "onBlur",
    });
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);


    const onSubmit = async (data: UserData): Promise<void> => {
        if (!executeRecaptcha)
            return;
        setLoading(true);
        const token = await executeRecaptcha("registration");
        // send data to server
        try {
            const res = await post(REGISTRATION_URL,
                {
                    recaptchaToken: token,
                    ...data,
                },
                {
                    "Content-Type": "application/json"
                }
            );
            if (res.status == 200) {
                alert("Anmeldung versendet! Bitte bestätige noch deine Email Adresse.");
                setError("");
                reset()
            }
        } catch (e) {
            console.error(e.message);
            setError(t("Something went wrong. Try again later!"))
        } finally {
            setLoading(false);
        }
    };
    const registrationType = watch(REGISTRATION_TYPE);
    const accommodation = watch(ACCOMMODATION);
    return (
        <div>
            <form className="flex flex-wrap pt-4" onSubmit={handleSubmit(onSubmit)}>
                <TextInput className="w-full md:w-1/2 p-2" name={FIRST_NAME} errors={errors}
                           inputRef={register({required: errorRequired})}/>
                <TextInput className="w-full md:w-1/2 p-2" name={LAST_NAME} errors={errors}
                           inputRef={register({required: errorRequired})}/>
                <TextInput className="w-full md:w-1/2 p-2" name={EMAIL} type={"email"} errors={errors}
                           inputRef={register({
                               required: errorRequired,
                               pattern: {value: validators[EMAIL].pattern, message: validators[EMAIL].message}
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
                {registrationType !== GUEST && (
                    <SelectInput className="w-full md:w-1/2 p-2" name={VOICE} errors={errors} choices={voiceOptions}
                                 control={control} rules={{required: errorRequired}}/>
                )}
                {registrationType == BEGINNER && (
                    <TextInput className="w-full p-2" name={INSTRUMENT_TIME} errors={errors}
                               inputRef={register({required: errorRequired})}/>
                )}
                <SelectInput className="w-full md:w-1/2 p-2" name={ARRIVAL} errors={errors} choices={arrivalOptions}
                             control={control} rules={{required: errorRequired}}/>
                <SelectInput className="w-full md:w-1/2 p-2" name={DEPARTURE} errors={errors} choices={departureOptions}
                             control={control} rules={{required: errorRequired}}/>
                <RadioInput className="w-full md:w-1/2 p-2" name={ACCOMMODATION} errors={errors}
                            choices={accommodationOptions}
                            control={control}/>
                {accommodation !== NO_ACCOMMODATION && accommodation !== undefined && (
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
                           suggestions={dietSuggestions} autoComplete={"off"} setValue={setValue} placeholder={t("vegetarian, allergies, etc")}/>
                <TextInput className="w-full p-2" name={COMMENTS} errors={errors} inputRef={register} multiline/>

                {error && (
                    <Typography className={"w-full p-2"} color={"error"}>{error}</Typography>
                )}
                <div className='w-full md:w-1/2'/>
                <div className="w-full md:w-1/2 p-2">
                    <SubmitButton className='float-right' fullWidth id={`btn-submit-form`}>{t("Submit")}</SubmitButton>
                </div>

                <Backdrop open={isLoading}>
                    <CircularProgress/>
                </Backdrop>
            </form>
        </div>
    )
}

export default UserDataForm