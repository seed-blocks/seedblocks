import assign from "object-assign";
import { ConfigStyle, Parse, Scale, styleFn } from "./types";
import { get } from "./get";
import { merge } from "./merge";
import { defaults } from "./constants";
// TODO: Fix eslint issues
/* eslint-disable no-continue,guard-for-in,no-shadow, consistent-return */

function getValue(value: any, scale?: Scale): any {
	if (scale !== undefined) return get(scale, value, value);
	return undefined;
}

function createMediaQuery(bp: string): string {
	return `@media screen and (min-width: ${bp})`;
}

function sort(obj: { [key: string]: { [key: string]: any } }): Object {
	const next: any = {};
	Object.keys(obj)
		.sort((a, b) =>
			a.localeCompare(b, undefined, {
				numeric: true,
				sensitivity: "base"
			})
		)
		.forEach(key => {
			next[key] = obj[key];
		});
	return next;
}

function parseResponsiveObject(breakpoints: any, sx: styleFn, scale: Scale, raw: any, _props: any) {
	const styles: { [key: string]: any } = {};
	for (const key in raw) {
		const breakpoint = breakpoints[key];
		const value = raw[key];
		const style = sx(value, scale, _props);
		if (!breakpoint) {
			assign(styles, style);
		} else {
			const media = createMediaQuery(breakpoint);
			assign(styles, {
				[media]: assign({}, styles[media], style)
			});
		}
	}
	return styles;
}

function parseResponsiveStyle(
	mediaQueries: (string | number)[],
	sx: styleFn,
	scale: Scale,
	raw: any,
	_props: any
) {
	const styles: { [key: string]: { [key: string]: any } } = {};
	raw.slice(0, mediaQueries.length).forEach((value: number, i: number) => {
		const media = mediaQueries[i];
		const style = sx(value, scale, _props);
		if (!media) {
			assign(styles, style);
		} else {
			assign(styles, {
				[media]: assign({}, styles[media], style)
			});
		}
	});
	return styles;
}

export function createParser(config: ConfigStyle): styleFn {
	const cache: any = {};

	const parse: Parse = props => {
		let styles = {};
		let shouldSort = false;
		const isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;

		for (const key in props) {
			if (!config[key]) continue;
			const sx = config[key];
			const raw = props[key];
			const scale = get(props.theme, sx.scale, sx.defaults);

			if (typeof raw === "object") {
				cache.breakpoints =
					(!isCacheDisabled && cache.breakpoints) ||
					get(props.theme, "breakpoints", defaults.breakpoints);
				if (Array.isArray(raw)) {
					cache.media = (!isCacheDisabled && cache.media) || [
						null,
						...cache.breakpoints.map(createMediaQuery)
					];
					styles = merge(
						styles,
						parseResponsiveStyle(cache.media, sx, scale, raw, props)
					);
					continue;
				}
				if (raw !== null) {
					styles = merge(
						styles,
						parseResponsiveObject(cache.breakpoints, sx, scale, raw, props)
					);
					shouldSort = true;
				}
				continue;
			}
			assign(styles, sx(raw, scale, props));
		}

		// sort object-based responsive styles
		if (shouldSort) {
			styles = sort(styles);
		}
		return styles;
	};

	parse.config = config;
	parse.propNames = Object.keys(config);
	parse.cache = cache;

	const keys = Object.keys(config).filter(k => k !== "config");
	if (keys.length > 1) {
		keys.forEach(key => {
			parse[key] = createParser({ [key]: config[key] });
		});
	}

	return parse;
}

export function createStyleFunction({
	properties,
	property,
	scale,
	transform = getValue,
	defaultScale
}: ConfigStyle): any {
	properties = properties || [property];
	const sx: styleFn = (value, scale, _props) => {
		const result: any = {};
		const n = transform(value, scale, _props);
		if (n === null) return;
		if (properties !== undefined) {
			properties.forEach(prop => {
				if (prop) result[prop] = n;
			});
		}
		return result;
	};
	sx.scale = scale;
	sx.defaults = defaultScale;
	return sx;
}

export function system(args: any = {}) {
	const config: any = {};
	Object.keys(args).forEach(key => {
		const conf = args[key];
		if (conf === true) {
			// shortcut definition
			config[key] = createStyleFunction({
				// @ts-ignore
				property: key,
				scale: key
			});
			return;
		}
		if (typeof conf === "function") {
			config[key] = conf;
			return;
		}
		config[key] = createStyleFunction(conf);
	});
	return createParser(config);
}

export function compose(...parsers: styleFn[]): styleFn {
	const config = {};
	parsers.forEach(parser => {
		if (!parser || !parser.config) return;
		assign(config, parser.config);
	});
	return createParser(config);
}
