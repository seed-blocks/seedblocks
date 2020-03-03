import assign from "object-assign";
/* eslint-disable no-continue */

type MergeProps = { [key: string]: string | number | { [key: string]: any } };

export function merge(a: MergeProps, b: MergeProps): Object {
	const result = assign({}, a, b);
	for (const key in a) {
		if (!a[key] || typeof b[key] !== "object") continue;
		assign(result, {
			[key]: assign(a[key], b[key])
		});
	}
	return result;
}
