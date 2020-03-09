import { shouldForwardProp, propNames, omit, pick } from "../props";

test("returns true for valid HTML attributes", () => {
	const should = shouldForwardProp("href");
	expect(should).toBe(true);
});

propNames &&
	propNames.forEach(prop => {
		test(`returns false for Styled System ${prop} prop`, () => {
			const should = shouldForwardProp(prop);
			expect(should).toBe(false);
		});
	});

const props = {
	id: "hi",
	className: "beep",
	p: 3,
	bg: "tomato",
	color: "white"
};

test("omits styled-system props", () => {
	const attr = omit(props);
	expect(attr).toEqual({
		id: "hi",
		className: "beep"
	});
});

test("picks styled-system props", () => {
	const sx = pick(props);
	expect(sx).toEqual({
		p: 3,
		bg: "tomato",
		color: "white"
	});
});
