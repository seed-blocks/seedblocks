import { isNumber } from "./utils";
import { Scale, NullOrUndefined } from "./types";

export function get(
	obj: object,
	key: string | number,
	def?: unknown,
	p?: number,
	undef?: unknown
): any {
	const path = key && typeof key === "string" ? key.split(".") : [key];
	for (p = 0; p < path.length; p++) {
		obj = obj ? (obj as any)[path[p]] : undef;
	}
	return obj === undef ? def : obj;
}

export function getWidth(n: number, scale: Scale): number | string | NullOrUndefined {
	function defaultWidth(w: number) {
		return !isNumber(w) || w > 1 ? w : `${w * 100}%`;
	}
	return get(scale, n, defaultWidth(n));
}

export const getMargin = (n: any, scale: Scale) => {
	if (!isNumber(n)) {
		return get(scale, n, n);
	}

	const isNegative = n < 0;
	const absolute = Math.abs(n);
	const value = get(scale, absolute, absolute);
	if (!isNumber(value)) {
		return isNegative ? `-${value}` : value;
	}
	return value * (isNegative ? -1 : 1);
};

export const themeGet = (path: string, fallback: any = null) => (props: any) =>
	get(props.theme, path, fallback);
export default themeGet;
