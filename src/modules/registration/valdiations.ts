import moment from "moment";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export function validateEmail(email: string) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email && !regex.test(String(email).trim().toLowerCase())) {
    return "Please enter a valid email";
  } else {
    return ""
  }
}

export function validateStreetAndNumber(value: string) {
  const regex = /^.+\s\d+\S?$/;
  if (value && !regex.test(String(value).trim()))
    return "Please enter a valid street name and number";
  else
    return ""
}

export function validateZipAndCity(value: string) {
  const regex = /^\d{4,5}(\s?.{2})?\s.+$/; // matches german and dutch format
  if (value && !regex.test(String(value).trim()))
    return "Please enter a valid ZIP code and city";
  else
    return ""
}

export function validateBirthday(birthday: string) {
  const errorText = "Please enter a valid birth date";
  // FIXME does not catch all edge cases :/
  try {
    const parts = birthday.match(/(\d+)/g)?.map(p => parseInt(p));
    if (parts && parts.length > 2) {
      if (parts[1] > 12)
        return errorText;
      if (parts[0] > 31) {
        return errorText;
      }
      const date = new Date(parts[2], parts[1] - 1, parts[0]);
      if (new Date() > date && date > new Date("1902-1-1"))
        return "";
    } else {
      return errorText
    }
  } catch (e) {
    return errorText
  }
  return errorText
}