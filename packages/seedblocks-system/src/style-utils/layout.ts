import { system } from "../core/parser";
import { getWidth } from "../core/get";
import { Config } from "../core/types";

const config: Config = {
	width: {
		property: "width",
		scale: "sizes",
		transform: getWidth
	},
	height: {
		property: "height",
		scale: "sizes"
	},
	minWidth: {
		property: "minWidth",
		scale: "sizes"
	},
	minHeight: {
		property: "minHeight",
		scale: "sizes"
	},
	maxWidth: {
		property: "maxWidth",
		scale: "sizes"
	},
	maxHeight: {
		property: "maxHeight",
		scale: "sizes"
	},
	size: {
		properties: ["width", "height"],
		scale: "sizes"
	},
	overflow: true,
	overflowX: true,
	overflowY: true,
	display: true,
	verticalAlign: true
};

export const layout = system(config);
export default layout;
