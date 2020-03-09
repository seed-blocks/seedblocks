import { get } from "../core/get";
import { createParser } from "../core/parser";
import { css } from "../css/css";
import { styleFn } from "../core/types";

interface VariantArgs<TStyle = object, K extends string = string, TPropName = string> {
	key?: string;
	/** Component prop, defaults to "variant" */
	prop?: TPropName;
	/** theme key for variant definitions */
	scale?: string;
	/** inline theme aware variants definitions  */
	variants?: {
		[key in K]: TStyle;
	};
}

export const variant = ({
	scale,
	prop = "variant",
	// enables new api
	variants = {},
	// shim for v4 API
	key
}: VariantArgs) => {
	let sx: styleFn;
	if (Object.keys(variants).length) {
		sx = (value, scaleX, props) => css(get(scaleX, value, null))(props.theme);
	} else {
		sx = (value, scaleX) => get(scaleX, value, null);
	}
	sx.scale = scale || key;
	sx.defaults = variants;
	const config = {
		[prop]: sx
	};
	return createParser(config);
};

export default variant;

export const buttonStyle = variant({ key: "buttons" });
export const textStyle = variant({ key: "textStyles", prop: "textStyle" });
export const colorStyle = variant({ key: "colorStyles", prop: "colors" });
