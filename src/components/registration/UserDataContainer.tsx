import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Typography
} from "@material-ui/core";
import React, {useState} from "react";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import {useForm} from 'react-hook-form'
import {useTranslation} from "../../i18n";
import {post} from "../../utils/request";
import {NO_ACCOMMODATION} from "./choices";
import {ACCOMMODATION, ARRIVAL, DEPARTURE, REGISTRATION_TYPE, UserData, VOICE} from "./types";
import UserDataForm from "./UserDataForm";

const REGISTRATION_URL = "/api/registration";

enum States {
    EDITING,
    LOADING,
    DONE,
    ERROR
}

const UserDataContainer = () => {
    const t = useTranslation("registration")
    const {executeRecaptcha} = useGoogleReCaptcha();
    const {register, setValue, errors, watch, control, handleSubmit, reset} = useForm<UserData>({
        mode: "onBlur",
        // Default values for controlled fields are needed to reset the form properly
        defaultValues: {
            [ACCOMMODATION]: NO_ACCOMMODATION,
            [REGISTRATION_TYPE]: "",
            [ARRIVAL]: "",
            [DEPARTURE]: "",
            [VOICE]: "",
        }
    });
    const [message, setMessage] = useState("");
    const [state, setState] = useState(States.EDITING);

    const onSubmit = async (data: UserData): Promise<void> => {
        if (!executeRecaptcha) {
            console.warn("Missing executeRecaptcha function ")
            return;
        }
        setState(States.LOADING);
        const token = await executeRecaptcha("registration");
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
                setState(States.DONE)
                reset()
            }
        } catch (e) {
            console.error(e.message);
            setMessage(`${t("Something went wrong")}: ${t(e.message)}`)
            setState(States.ERROR)
        }

    };
    const registrationType = watch(REGISTRATION_TYPE);
    const accommodation = watch(ACCOMMODATION);
    return (
        <>
            <UserDataForm
                onSubmit={handleSubmit(onSubmit)}
                errors={errors}
                register={register}
                setValue={setValue}
                control={control}
                registrationType={registrationType}
                accommodation={accommodation}
            />
            {message && (
                <Typography color={"error"}>
                    {message}
                </Typography>
            )}
            <Dialog open={[States.LOADING, States.DONE].includes(state)}>
                <DialogTitle>{state === States.LOADING ? t("Sending registration") : t("Registration nearly completed")}</DialogTitle>
                <DialogContent className="flex flex-col justify-center">
                    {state === States.LOADING ? (
                        <CircularProgress className='my-6 mx-12 text-blue' color={"inherit"} size={70}/>
                    ) : (
                        <>
                            <DialogContentText>
                                <div className='flex '>
                                    {t("We have sent you an email")} {t("Please click on the link in that email to complete your registration")}
                                    <svg className="w-24 md:w-16 mx-2 md:mx-4" fill="none" strokeLinecap="round"
                                         strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                            </DialogContentText>
                            <DialogActions>
                                <Button onClick={() => setState(States.EDITING)}>OK</Button>
                            </DialogActions>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}

export default UserDataContainer