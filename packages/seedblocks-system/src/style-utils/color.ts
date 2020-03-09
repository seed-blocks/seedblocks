import { system } from "../core/parser";
import { Config } from "../core/types";

const config: Config = {
	color: {
		property: "color",
		scale: "colors"
	},
	backgroundColor: {
		property: "backgroundColor",
		scale: "colors"
	},
	opacity: true
};

config.bg = config.backgroundColor;

export const color = system(config);
export default color;
