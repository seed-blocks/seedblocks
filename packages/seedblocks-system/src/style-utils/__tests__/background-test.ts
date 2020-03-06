import {background} from "../background";

test('returns background styles', () => {
	const style = background({ backgroundImage: 'url(kitten.gif)' });
	// console.log(style);
	expect(style).toEqual({ backgroundImage: 'url(kitten.gif)' })
});
