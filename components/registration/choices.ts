// ---------- REGISTRATION TYPE ----------
export const PARTICIPANT = "participant";
export const BEGINNER = "beginner";
export const GUEST = "guest";
export const registrationOptions = [
  PARTICIPANT,
  BEGINNER,
  GUEST
];

// ---------- VOICE ----------------------
export const SOPRANO = "soprano";
export const ALTO = "alto";
export const TENOR = "tenor";
export const BASS = "bass";
export const voiceOptions = [
  SOPRANO,
  ALTO,
  TENOR,
  BASS,
];

// ---------- Arrival & Departure ----------------------
export const FRIDAY = "Friday, 21.05.2021";
export const SATURDAY = "Saturday, 22.05.2021";
export const SUNDAY = "Sunday, 23.05.2021";
export const MONDAY = "Monday, 24.05.2021";

export const arrivalOptions = [
  FRIDAY,
  SATURDAY,
];

export const departureOptions = [
  SUNDAY,
  MONDAY,
];

// ---------- Congregations ----------------------
export const congregationSuggestions = [
  "Dresden",
  "Bautzen-Kleinwelka",
  "Herrnhut",
  "Niesky",
  "Saalburg-Ebersdorf",
  "Zwickau",
  "Berlin",
  "Hamburg",
  "Nordrhein Westfalen (NRW)",
  "Gnadau",
  "Neugnadenfeld",
  "Neuwied",
  "Rhein-Main",
  "Bad Boll",
  "Königsfeld",
  "Neudietendorf",

  "Zeist",
  "Amsterdam-Stad",
  "Amsterdam-Zuidoost",

  "Christiansfeld",
];

// ---------- Accommodation ----------------------
export const NO_ACCOMMODATION = "no accommodation";
export const GROUP_ACCOMMODATION = "group accommodation";
export const DOUBLE_BEDROOM_WITH_BUNK_BED = "double bedroom with bunk bed";
export const DOUBLE_BEDROOM = "double bedroom";
export const FAMILY_BEDROOM = "family bedroom";

export const accommodationOptions = [
  NO_ACCOMMODATION,
  GROUP_ACCOMMODATION,
  DOUBLE_BEDROOM,
  DOUBLE_BEDROOM_WITH_BUNK_BED,
  FAMILY_BEDROOM
];

// ---------- Shirt ----------------------
export const NONE = "None";
export const shirtOptions = [
  NONE,
  "XL",
  "L",
  "M",
  "S",
  "XS",
];


// ---------- Diets ----------------------
export const VEGAN = "vegan";
export const VEGETARIAN = "vegetarian";
export const GLUTEN_FREE = "gluten free";
export const LACTOSE_FREE = "lactose free";
export const dietSuggestions = [
  VEGAN,
  VEGETARIAN,
  GLUTEN_FREE,
  LACTOSE_FREE
];

// ---------- Generic ----------------------
export const YES = "yes";
export const NO = "no";
export const yesNoOptions = [
  YES, NO
];