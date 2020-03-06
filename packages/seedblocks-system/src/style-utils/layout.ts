import { system } from "../core/parser";
import { get } from "../core/get";
import { NullOrUndefined, Scale, Config } from "../core/types";

const isNumber = (n: any) => typeof n === "number" && !isNaN(n);
const getWidth = (n: any, scale: Scale): number | string | NullOrUndefined =>
	get(scale, n, !isNumber(n) || n > 1 ? n : `${n * 100}%`);

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
