import { get, themeGet } from "../get";

test("returns a deeply nested value", () => {
	const a = get(
		{
			colors: {
				blue: ["#0cf", "#0be", "#09d", "#07c"]
			}
		},
		"colors.blue.3"
	);
	expect(a).toBe("#07c");
});

test("supports fallback values", () => {
	const a = get({}, "hi", "nope");
	expect(a).toBe("nope");
});

test("handles number values", () => {
	const a = get([1, 2, 3], 0);
	expect(a).toBe(1);
});

test("handles undefined values", () => {
	// @ts-ignore
	const a = get({}, undefined);
	expect(a).toBe(undefined);
});

test("handles null values", () => {
	// @ts-ignore
	const a = get({}, null);
	expect(a).toBe(undefined);
});

test("returns 0 index items", () => {
	const a = get(["a", "b", "c"], 0);
	expect(a).toBe("a");
});

const theme = {
	colors: {
		blue: "#07c",
		black: "#111"
	}
};

test("themeGet returns values from the theme", () => {
	const a = themeGet("colors.blue")({ theme });
	expect(a).toBe("#07c");
});

test("themeGet does not throw when value doesnt exist", () => {
	const a = themeGet("colors.blue.5")({ theme });
	expect(a).toBe(null);
});

test("themeGet accepts a fallback", () => {
	const a = themeGet("colors.lightblue", "#0cf")({ theme });
	expect(a).toBe("#0cf");
});
