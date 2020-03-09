import { memoize, isPropValid } from "../core/utils";
import { compose } from "../core/parser";
import { space } from "./space";
import { typography } from "./typography";
import { color } from "./color";
import { layout } from "./layout";
import { flexbox } from "./flexbox";
import { border } from "./border";
import { background } from "./background";
import { position } from "./position";
import { grid } from "./grid";
import { shadow } from "./shadow";
import { buttonStyle, colorStyle, textStyle } from "./variant";
/* eslint-disable no-continue */

const all = compose(
	space,
	typography,
	color,
	layout,
	flexbox,
	border,
	background,
	position,
	grid,
	shadow,
	buttonStyle,
	textStyle,
	colorStyle
);

export const { propNames } = all;
const regex = new RegExp(`^(${propNames && propNames.join("|")})$`);

export function createShouldForwardProp(props: any) {
	const regx = new RegExp(`^(${props.join("|")})$`);
	return memoize(prop => isPropValid(prop) && !regx.test(prop));
}

export const shouldForwardProp = createShouldForwardProp(propNames);

export function omit(props: { [key: string]: any }) {
	const next: any = {};
	for (const key in props) {
		if (regex.test(key)) continue;
		next[key] = props[key];
	}
	return next;
}

export function pick(props: { [key: string]: any }) {
	const next: any = {};
	for (const key in props) {
		if (!regex.test(key)) continue;
		next[key] = props[key];
	}
	return next;
}
