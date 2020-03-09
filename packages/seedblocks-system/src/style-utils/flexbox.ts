import { system } from "../core/parser";
import { Config } from "../core/types";

const config: Config = {
	alignItems: true,
	alignContent: true,
	justifyItems: true,
	justifyContent: true,
	flexWrap: true,
	flexDirection: true,
	// item
	flex: true,
	flexGrow: true,
	flexShrink: true,
	flexBasis: true,
	justifySelf: true,
	alignSelf: true,
	order: true
};

export const flexbox = system(config);

export default flexbox;
