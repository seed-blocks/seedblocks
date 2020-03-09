import { system } from "../core/parser";
import { Config } from "../core/types";

const config: Config = {
	boxShadow: {
		property: "boxShadow",
		scale: "shadows"
	},
	textShadow: {
		property: "textShadow",
		scale: "shadows"
	}
};

export const shadow = system(config);

export default shadow;
