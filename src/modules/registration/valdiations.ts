export const errorEmail = "Please enter a valid email";

export function validateEmail(email: string) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email && !regex.test(String(email).trim().toLowerCase())) {
    return errorEmail;
  } else {
    return ""
  }
}

export const errorStreetAndNumber = "Please enter a valid street name and number";

export function validateStreetAndNumber(value: string) {
  const regex = /^.+\s\d+\S?$/;
  if (value && !regex.test(String(value).trim()))
    return errorStreetAndNumber;
  else
    return ""
}

export const errorZipAndCity = "Please enter a valid ZIP code and city";

export function validateZipAndCity(value: string) {
  const regex = /^\d{4,5}(\s?.{2})?\s.+$/; // matches german and dutch format
  if (value && !regex.test(String(value).trim()))
    return errorZipAndCity;
  else
    return ""
}

export const errorBirthday = "Please enter a valid birth date"

export function validateBirthday(birthday: string) {
  // FIXME does not catch all edge cases :/
  try {
    const parts = birthday.match(/(\d+)/g)?.map(p => parseInt(p));
    if (parts && parts.length > 2) {
      if (parts[1] > 12)
        return errorBirthday;
      if (parts[0] > 31) {
        return errorBirthday;
      }
      const date = new Date(parts[2], parts[1] - 1, parts[0]);
      if (new Date() > date && date > new Date("1902-1-1"))
        return "";
    }
  } catch (e) {
    return errorBirthday
  }
  return errorBirthday
}