import { isNumber } from "../utils";

describe("isNumber", () => {
	test("isNumber returns true for a number", () => {
		expect(isNumber(5)).toBe(true);
	});

	test("isNumber returns true for a float", () => {
		expect(isNumber(5.5)).toBe(true);
	});

	test("isNumber returns false for a 'string'", () => {
		expect(isNumber("5")).toBe(false);
	});

	test("isNumber returns false for a null", () => {
		expect(isNumber(null)).toBe(false);
	});
});
