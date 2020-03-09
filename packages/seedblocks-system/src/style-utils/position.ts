import { system } from "../core/parser";
import { defaults } from "../constants";
import { Config } from "../core/types";

const config: Config = {
	position: true,
	zIndex: {
		property: "zIndex",
		scale: "zIndices"
	},
	top: {
		property: "top",
		scale: "space",
		defaultScale: defaults.space
	},
	right: {
		property: "right",
		scale: "space",
		defaultScale: defaults.space
	},
	bottom: {
		property: "bottom",
		scale: "space",
		defaultScale: defaults.space
	},
	left: {
		property: "left",
		scale: "space",
		defaultScale: defaults.space
	}
};

export const position = system(config);

export default position;
