import { getMargin } from "../core/get";
import { system, compose } from "../core/parser";
import { defaults } from "../constants";
import { Config } from "../core/types";

const configs: Config = {};
configs.margin = {
	margin: {
		property: "margin",
		scale: "space",
		transform: getMargin,
		defaultScale: defaults.space
	},
	marginTop: {
		property: "marginTop",
		scale: "space",
		transform: getMargin,
		defaultScale: defaults.space
	},
	marginRight: {
		property: "marginRight",
		scale: "space",
		transform: getMargin,
		defaultScale: defaults.space
	},
	marginBottom: {
		property: "marginBottom",
		scale: "space",
		transform: getMargin,
		defaultScale: defaults.space
	},
	marginLeft: {
		property: "marginLeft",
		scale: "space",
		transform: getMargin,
		defaultScale: defaults.space
	},
	marginX: {
		properties: ["marginLeft", "marginRight"],
		scale: "space",
		transform: getMargin,
		defaultScale: defaults.space
	},
	marginY: {
		properties: ["marginTop", "marginBottom"],
		scale: "space",
		transform: getMargin,
		defaultScale: defaults.space
	}
};

configs.margin.m = configs.margin.margin;
configs.margin.mt = configs.margin.marginTop;
configs.margin.mr = configs.margin.marginRight;
configs.margin.mb = configs.margin.marginBottom;
configs.margin.ml = configs.margin.marginLeft;
configs.margin.mx = configs.margin.marginX;
configs.margin.my = configs.margin.marginY;

configs.padding = {
	padding: {
		property: "padding",
		scale: "space",
		defaultScale: defaults.space
	},
	paddingTop: {
		property: "paddingTop",
		scale: "space",
		defaultScale: defaults.space
	},
	paddingRight: {
		property: "paddingRight",
		scale: "space",
		defaultScale: defaults.space
	},
	paddingBottom: {
		property: "paddingBottom",
		scale: "space",
		defaultScale: defaults.space
	},
	paddingLeft: {
		property: "paddingLeft",
		scale: "space",
		defaultScale: defaults.space
	},
	paddingX: {
		properties: ["paddingLeft", "paddingRight"],
		scale: "space",
		defaultScale: defaults.space
	},
	paddingY: {
		properties: ["paddingTop", "paddingBottom"],
		scale: "space",
		defaultScale: defaults.space
	}
};

configs.padding.p = configs.padding.padding;
configs.padding.pt = configs.padding.paddingTop;
configs.padding.pr = configs.padding.paddingRight;
configs.padding.pb = configs.padding.paddingBottom;
configs.padding.pl = configs.padding.paddingLeft;
configs.padding.px = configs.padding.paddingX;
configs.padding.py = configs.padding.paddingY;

export const margin = system(configs.margin);
export const padding = system(configs.padding);
export const space = compose(margin, padding);

export default space;
