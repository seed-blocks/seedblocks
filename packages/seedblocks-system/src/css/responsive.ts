import { get } from "../core/get";
import { defaults } from "../constants";
import { Theme } from "../core/types";
// TODO: Fix eslint issues
/* eslint-disable no-continue, guard-for-in */

export const responsive = (styles: { [key: string]: any }) => (theme: Theme) => {
	const next: { [key: string]: any } = {};
	const breakpoints = get(theme, "breakpoints", defaults.breakpoints);
	const mediaQueries = [
		null,
		...breakpoints.map((n: number | string) => `@media screen and (min-width: ${n})`)
	];

	for (const key in styles) {
		const value = typeof styles[key] === "function" ? styles[key](theme) : styles[key];

		if (value == null) continue;
		if (!Array.isArray(value)) {
			next[key] = value;
			continue;
		}
		for (let i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
			const media = mediaQueries[i];
			if (!media) {
				next[key] = value[i];
				continue;
			}
			next[media] = next[media] || {};
			if (value[i] == null) continue;
			next[media][key] = value[i];
		}
	}
	return next;
};
