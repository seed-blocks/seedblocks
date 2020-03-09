import layout from "../layout";

test("returns layout styles", () => {
	const style = layout({
		width: [1, 1 / 2, 1 / 4],
		minHeight: 32,
		maxWidth: 768
	});
	expect(style).toEqual({
		width: "100%",
		maxWidth: 768,
		minHeight: 32,
		"@media screen and (min-width: 576px)": {
			width: "50%"
		},
		"@media screen and (min-width: 768px)": {
			width: "25%"
		}
	});
});

test("returns 0 from theme.sizes", () => {
	const style = layout({
		theme: {
			sizes: [24, 48, 96]
		},
		width: 0,
		height: 0
	});
	expect(style).toEqual({
		width: 24,
		height: 24
	});
});
