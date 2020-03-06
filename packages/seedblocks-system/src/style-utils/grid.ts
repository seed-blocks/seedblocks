import { system } from "../core/parser";
import { Config } from "../core/types";
import { defaults } from "../constants";

const config: Config = {
	gridGap: {
		property: "gridGap",
		scale: "space",
		defaultScale: defaults.space
	},
	gridColumnGap: {
		property: "gridColumnGap",
		scale: "space",
		defaultScale: defaults.space
	},
	gridRowGap: {
		property: "gridRowGap",
		scale: "space",
		defaultScale: defaults.space
	},
	gridColumn: true,
	gridRow: true,
	gridAutoFlow: true,
	gridAutoColumns: true,
	gridAutoRows: true,
	gridTemplateColumns: true,
	gridTemplateRows: true,
	gridTemplateAreas: true,
	gridArea: true
};

export const grid = system(config);
export default grid;
