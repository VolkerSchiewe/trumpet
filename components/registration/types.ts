export const FIRST_NAME = "firstName";
export const LAST_NAME = "lastName";
export const EMAIL = "email";
export const PHONE = "phone";
export const BIRTHDAY = "birthday";
export const STREET_NUMBER = "streetNumber";
export const ZIP_CITY = "zipCity";
export const DIETS = "diets";
export const REGISTRATION_TYPE = "registrationType";
export const CONGREGATION = "congregation";
export const VOICE = "voice";
export const INSTRUMENT_TIME = "instrumentTime";
export const ARRIVAL = "arrival";
export const DEPARTURE = "departure";
export const ACCOMMODATION = "accommodation";
export const ACCOMMODATION_WITH = "accommodationWith";
export const PHOTO_AGREEMENT = "photoAgreement";
export const SHIRT = "shirt";
export const COMMENTS = "comments";


export const requiredFields = [
    FIRST_NAME, LAST_NAME, EMAIL, BIRTHDAY, STREET_NUMBER, ZIP_CITY, REGISTRATION_TYPE, CONGREGATION, ARRIVAL, DEPARTURE, ACCOMMODATION, PHOTO_AGREEMENT
];

export interface UserData {
    [FIRST_NAME]: string
    [LAST_NAME]: string
    [EMAIL]: string
    [PHONE]: string
    [BIRTHDAY]: string
    [STREET_NUMBER]: string
    [ZIP_CITY]: string
    [DIETS]: string
    [REGISTRATION_TYPE]: string
    [CONGREGATION]: string
    [VOICE]: string
    [INSTRUMENT_TIME]: string
    [ARRIVAL]: string
    [DEPARTURE]: string
    [ACCOMMODATION]: string
    [ACCOMMODATION_WITH]: string
    [PHOTO_AGREEMENT]: string
    [SHIRT]: string
    [COMMENTS]: string
}