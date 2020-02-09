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
import {ALTO, BASS, BEGINNER, GUEST, PARTICIPANT, SOPRANO, TENOR} from "../modules/registration/choices";

export default {
  [FIRST_NAME]: "Vorname",
  [LAST_NAME]: "Nachname",
  [EMAIL]: "E-Mail",
  [PHONE]: "Telefon",
  [Street_NUMBER]: "Straße & Hausnummer",
  [ZIP_CITY]: "PLZ & Stadt",
  [BIRTHDAY]: "Geburtstag",
  [DIETS]: "Essensbesonderheiten (Vegetarisch, Vegan, Allergien, etc.)",
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
  // Errors
  "Please enter a valid email": "Bitte gib eine korrekte Email Adresse ein",
  "Please enter a valid birth date": "Bitte gib ein richtiges Geburtsdatum ein",
  "Please enter a valid street name and number": "Bitte gib Straße und Hausnummer richtig ein",
  "Please enter a valid ZIP code and city": "Bitte gib PLZ und Stadt richtig ein"
}