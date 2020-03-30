import {BIRTHDAY, EMAIL, STREET_NUMBER, ZIP_CITY} from "../../utils/database";

export const errorRequired = "This field is required";
export const errorBirthday = "Please enter a valid birth date";

export function validateBirthday(date: string): string | boolean {
  try {
    const matches = /^(\d{1,2})[.](\d{1,2})[.](\d{4})$/.exec(date);
    if (matches == null) return errorBirthday;
    const d = parseInt(matches[1], 10);
    const m = parseInt(matches[2], 10) - 1;
    const y = parseInt(matches[3], 10);
    const composedDate = new Date(y, m, d);

    if (composedDate.getDate() == d &&
      composedDate.getMonth() == m &&
      composedDate.getFullYear() == y &&
      composedDate > new Date("1902-1-1") &&
      composedDate < new Date()
    ) {
      return true
    }
  } catch (e) {
    return errorBirthday
  }
  return errorBirthday
}

export const validators = {
  [EMAIL]: {
    message: "Please enter a valid email",
    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  [BIRTHDAY]: {
    validation: validateBirthday,
  },
  [STREET_NUMBER]: {
    message: "Please enter a valid street name and number",
    pattern: /^.+\s\d+\S?$/,
  },
  [ZIP_CITY]: {
    message: "Please enter a valid ZIP code and city",
    pattern: /^\d{4,5}(\s?.{2})?\s.+$/,
  }
};
