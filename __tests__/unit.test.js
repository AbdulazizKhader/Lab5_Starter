// unit.test.js
import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('is a phone number brackets', () => {
  // TODO
  expect(isPhoneNumber("(144)556-1677")).toBe(true);
});
test('is a phone number dashed', () => {
  // TODO
  expect(isPhoneNumber("124-343-4546")).toBe(true);
});
test('is not a phone number', () => {
  // TODO
  expect(isPhoneNumber("(-14)4556677")).toBe(false);
});
test('is not a phone number letter', () => {
  // TODO
  expect(isPhoneNumber("343434a32424")).toBe(false);
});

test('is an email normal', () => {
  // TODO
  expect(isEmail("ahshs@gmail.com")).toBe(true);
});
test('is an email numbers', () => {
  // TODO
  expect(isEmail("fewf22d@outlook.com")).toBe(true);
});
test('is not an email brackets', () => {
  // TODO
  expect(isEmail("(fewf22d)@outlook.com")).toBe(false);
});
test('is not an email symbols', () => {
  // TODO
  expect(isEmail("_+fewf22d@outlook.com")).toBe(false);
});

test('is a strong password normal', () => {
  // TODO
  expect(isStrongPassword("hhdhdHHdd2323")).toBe(true);
});
test('is a stong Password 4 letters', () => {
  // TODO
  expect(isStrongPassword("fdH4")).toBe(true);
});
test('is not a strong password short', () => {
  // TODO
  expect(isStrongPassword("225")).toBe(false);
});
test('is not a stong Password 16 letters', () => {
  // TODO
  expect(isStrongPassword("hfhgkdlskdjgkfne")).toBe(false);
});

test('is a date normal', () => {
  // TODO
  expect(isDate("20/12/3520")).toBe(true);
});
test('is a date 1 day and month', () => {
  // TODO
  expect(isDate("1/1/2023")).toBe(true);
});
test('is not a date dashes', () => {
  // TODO
  expect(isDate("20-12-3520")).toBe(false);
});
test('is not a date 2 digit year', () => {
  // TODO
  expect(isDate("1/1/23")).toBe(false);
});

test('is a hex color white', () => {
  // TODO
  expect(isHexColor("#000000")).toBe(true);
});
test('is a hex color random', () => {
  // TODO
  expect(isHexColor("#F00EED")).toBe(true);
});
test('is not a hex color color name', () => {
  // TODO
  expect(isHexColor("red")).toBe(false);
});
test('is a hex color 5 symbols', () => {
  // TODO
  expect(isHexColor("#FDDAD")).toBe(3434);
});