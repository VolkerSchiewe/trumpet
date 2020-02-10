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
  Street_NUMBER,
  VOICE,
  ZIP_CITY
} from "../utils/database";
import {
  ALTO,
  BASS,
  BEGINNER, DOUBLE_BEDROOM, DOUBLE_BEDROOM_WITH_BUNK_BED, FAMILY_BEDROOM,
  FRIDAY, GLUTEN_FREE, GROUP_ACCOMMODATION,
  GUEST, LACTOSE_FREE, MONDAY, NO, NO_ACCOMMODATION, NONE,
  PARTICIPANT,
  SATURDAY,
  SOPRANO, SUNDAY,
  TENOR, VEGAN, VEGETARIAN, YES
} from "../modules/registration/choices";
import {errorBirthday, errorEmail, errorStreetAndNumber, errorZipAndCity} from "../modules/registration/valdiations";

export default {
  [FIRST_NAME]: "Vorname",
  [LAST_NAME]: "Nachname",
  [EMAIL]: "E-Mail",
  [PHONE]: "Telefon",
  [Street_NUMBER]: "Straße & Hausnummer",
  [ZIP_CITY]: "PLZ & Stadt",
  [BIRTHDAY]: "Geburtstag",
  [DIETS]: "Essensbesonderheiten (Vegetarisch, Allergien, etc.)",
  [REGISTRATION_TYPE]: "Ich bin",
  [CONGREGATION]: "Gemeinde/Bereich",
  [VOICE]: "Stimme",
  [INSTRUMENT_TIME]: "Instrument & Ausbildungsdauer",
  [ARRIVAL]: "Ankunft",
  [DEPARTURE]: "Abreise",
  [ACCOMMODATION]: "Quartier",
  [ACCOMMODATION_WITH]: "Zusammen mit",
  [PHOTO_AGREEMENT]: "Einverständsnis für Fotos",
  [SHIRT]: "T-Shirt",
  [COMMENTS]: "Weiteres/Bemerkungen",

  [PARTICIPANT]: "Bläser*in",
  [BEGINNER]: "Jungbläser*in",
  [GUEST]: "Gast",

  [SOPRANO]: "Sopran",
  [ALTO]: "Alt",
  [TENOR]: "Tenor",
  [BASS]: "Bass",

  [FRIDAY]: "Freitag 21.05.2021",
  [SATURDAY]: "Samstag 22.05.2021",
  [SUNDAY]: "Sonntag 23.05.2021",
  [MONDAY]: "Montag 24.05.2021",

  [YES]: "Ja",
  [NO]: "Nein",

  [VEGAN]: "Vegan",
  [VEGETARIAN]: "Vegetarisch",
  [GLUTEN_FREE]: "Gluten frei",
  [LACTOSE_FREE]: "Lactose frei",

  [NONE]: "Keins",

  [NO_ACCOMMODATION]: "Ich brauche keine Unterkunft",
  [GROUP_ACCOMMODATION]: "Massenquartier (6 od. 8 Bettzimmer)",
  [DOUBLE_BEDROOM_WITH_BUNK_BED]: "Doppelzimmer Etagenbetten",
  [DOUBLE_BEDROOM]: "Doppelzimmer",
  [FAMILY_BEDROOM]: "Familienzimmer (Doppelbett u. Etagenbett)",

  "This agreement can always be revoked at the organization of the brass festival.": "Widerspruch kann jederzeit bei der Organisation des Bläsertages eingelegt werden.",
  "Submit": "Abschicken",

  // Errors
  [errorEmail]: "Bitte gib eine korrekte Email Adresse ein",
  [errorBirthday]: "Bitte gib ein richtiges Geburtsdatum ein",
  [errorStreetAndNumber]: "Bitte gib Straße und Hausnummer richtig ein",
  [errorZipAndCity]: "Bitte gib PLZ und Stadt richtig ein",

  "Something went wrong. Try again later!": "Etwas ist schiefgelaufen. Versuche es später noch mal!",
  "Please fill out the following fields correctly: ": "Bitte fülle die folgenden Felder korrekt aus: ",
}