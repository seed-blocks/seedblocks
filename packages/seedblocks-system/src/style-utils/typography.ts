import { system } from "../core/parser";
import { defaults } from "../constants";
import { Config } from "../core/types";

const config: Config = {
	fontFamily: {
		property: "fontFamily",
		scale: "fonts"
	},
	fontSize: {
		property: "fontSize",
		scale: "fontSizes",
		defaultScale: defaults.fontSizes
	},
	fontWeight: {
		property: "fontWeight",
		scale: "fontWeights"
	},
	lineHeight: {
		property: "lineHeight",
		scale: "lineHeights"
	},
	letterSpacing: {
		property: "letterSpacing",
		scale: "letterSpacings"
	},
	textAlign: true,
	fontStyle: true
};

export const typography = system(config);
export default typography;
