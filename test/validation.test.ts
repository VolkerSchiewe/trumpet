import {errorBirthday, validateBirthday, validators,} from "../src/modules/registration/valdiations";
import {EMAIL, STREET_NUMBER, ZIP_CITY} from "../src/utils/database";

describe("Validation functions", () => {
  describe("Email validation", () => {

    it('should pass with correct mail', () => {
      expect("test@email.com").toEqual(expect.stringMatching(validators[EMAIL].pattern))
    });

    it('should fail with wrong emails', () => {
      const wrong = ["testemail.com", "test@emailcom"];
      wrong.forEach(email => {
        expect(email).toEqual(expect.not.stringMatching(validators[EMAIL].pattern))
      })
    });
  });

  describe("Street and number validation", () => {
    it('should pass with normal street and number', () => {
      const correct = [
        "Example Street 1",
        "Example Street 1D",
      ];
      correct.forEach(streetNumber => {
        expect(streetNumber).toEqual(expect.stringMatching(validators[STREET_NUMBER].pattern))
      })
    });
    it('should fail with invalid street and number', () => {
      const wrong = [
        "Example Street ",
        "1D",
        "12345 Example City",
      ];
      wrong.forEach(streetNumber => {
        expect(streetNumber).toEqual(expect.not.stringMatching(validators[STREET_NUMBER].pattern))
      })
    });
  });

  describe("Zip and City validation", () => {
    it('should pass with correct zip and city', () => {
      const correct = [
        "12345 Example",
        "12345 Example City",
        "1234 AB Dutch Example City",
        "1234AB Dutch Example City",
      ];
      correct.forEach(zipCity => {
        expect(zipCity).toEqual(expect.stringMatching(validators[ZIP_CITY].pattern))
      })
    });
    it('should fail with invalid zip and city', () => {
      const wrong = [
        "Only City",
        "12345",
        "12345City",
      ];
      wrong.forEach(zipCity => {
        expect(zipCity).toEqual(expect.not.stringMatching(validators[ZIP_CITY].pattern))
      })
    });
  });

  describe("Birthday validation", () => {
    it('should pass with correct date', () => {
      const correct = [
        "01.01.2012",
        "31.01.2012",
        "31.12.2012",
        "1.6.2012",
        "1.6.1912",
      ];
      correct.forEach(date => {
        expect(validateBirthday(date)).toBe(true)
      })
    });
    it('should fail with invalid dates', () => {
      const wrong = [
        "31.12.2200",
        "31012012",
        "16.2012",
        "32.6.1912",
        "12.13.1912",
        "Some string",
        "30.02.2012",
      ];
      wrong.forEach(date => {
        expect(validateBirthday(date)).toBe(errorBirthday)
      })
    });
  })

});