import validPropsRegexString from "./propNames";

export const validPropsRegex = new RegExp(validPropsRegexString);
export const isNumber = (n: any) => typeof n === "number" && !isNaN(n);

// https://github.com/emotion-js/emotion/tree/master/packages/memoize
export function memoize<V>(fn: (arg0: string) => V): (arg0: string) => V {
	const cache: any = {};

	return (arg: string) => {
		if (cache[arg] === undefined) cache[arg] = fn(arg);
		return cache[arg];
	};
}

// https://github.com/emotion-js/emotion/blob/master/packages/is-prop-valid/src/index.js
export const isPropValid = memoize(
	prop =>
		validPropsRegex.test(prop) ||
		(prop.charCodeAt(0) === 111 /* o */ &&
		prop.charCodeAt(1) === 110 /* n */ &&
			prop.charCodeAt(2) < 91) /* Z+1 */
);
