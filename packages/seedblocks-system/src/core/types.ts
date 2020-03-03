import * as CSS from 'csstype';

export type NullOrUndefined = null | undefined;

export type ObjectOrArray<T, K extends keyof any = keyof any> = T[] | Record<K, T | Record<K, T> | T[]>;

export type Scale = (string | number)[] | Record<string | number | symbol, string | number | Record<string | number | symbol, string | number> | (string | number)[]>;

export type TLengthStyledSystem = string | 0 | number;

export interface Theme<TLength = TLengthStyledSystem> {
	breakpoints?: ObjectOrArray<number | string | symbol>;
	mediaQueries?: { [size: string]: string };
	space?: ObjectOrArray<CSS.MarginProperty<number | string>>;
	fontSizes?: ObjectOrArray<CSS.FontSizeProperty<number>>;
	colors?: ObjectOrArray<CSS.ColorProperty>;
	fonts?: ObjectOrArray<CSS.FontFamilyProperty>;
	fontWeights?: ObjectOrArray<CSS.FontWeightProperty>;
	lineHeights?: ObjectOrArray<CSS.LineHeightProperty<TLength>>;
	letterSpacings?: ObjectOrArray<CSS.LetterSpacingProperty<TLength>>;
	sizes?: ObjectOrArray<CSS.HeightProperty<{}> | CSS.WidthProperty<{}>>;
	borders?: ObjectOrArray<CSS.BorderProperty<{}>>;
	borderStyles?: ObjectOrArray<CSS.BorderProperty<{}>>;
	borderWidths?: ObjectOrArray<CSS.BorderWidthProperty<TLength>>;
	radii?: ObjectOrArray<CSS.BorderRadiusProperty<TLength>>;
	shadows?: ObjectOrArray<CSS.BoxShadowProperty>;
	zIndices?: ObjectOrArray<CSS.ZIndexProperty>;
	buttons?: ObjectOrArray<CSS.StandardProperties>;
	colorStyles?: ObjectOrArray<CSS.StandardProperties>;
	textStyles?: ObjectOrArray<CSS.StandardProperties>;
	disableStyledSystemCache?: boolean;
}

export type RequiredTheme = Required<Theme>;

export type ResponsiveValue<T,
	ThemeType extends Theme = RequiredTheme,
	> = T | Array<T | null> | { [key in ThemeValue<'breakpoints', ThemeType> & string | number]?: T };

export type ThemeValue<K extends keyof ThemeType, ThemeType, TVal = any> =
	ThemeType[K] extends TVal[] ? number :
		ThemeType[K] extends Record<infer E, TVal> ? E :
			ThemeType[K] extends ObjectOrArray<infer F> ? F : never;

export interface SpaceProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'space', ThemeType>> {
	/** Margin on top, left, bottom and right */
	m?: ResponsiveValue<TVal, ThemeType>;
	/** Margin on top, left, bottom and right */
	margin?: ResponsiveValue<TVal, ThemeType>;
	/** Margin on top */
	mt?: ResponsiveValue<TVal, ThemeType>;
	/** Margin on top */
	marginTop?: ResponsiveValue<TVal, ThemeType>;
	/** Margin on right */
	mr?: ResponsiveValue<TVal, ThemeType>;
	/** Margin on right */
	marginRight?: ResponsiveValue<TVal, ThemeType>;
	/** Margin on bottom */
	mb?: ResponsiveValue<TVal, ThemeType>;
	/** Margin on bottom */
	marginBottom?: ResponsiveValue<TVal, ThemeType>;
	/** Margin on left */
	ml?: ResponsiveValue<TVal, ThemeType>;
	/** Margin on left */
	marginLeft?: ResponsiveValue<TVal, ThemeType>;
	/** Margin on left and right */
	mx?: ResponsiveValue<TVal, ThemeType>;
	/** Margin on left and right */
	marginX?: ResponsiveValue<TVal, ThemeType>;
	/** Margin on top and bottom */
	my?: ResponsiveValue<TVal, ThemeType>;
	/** Margin on top and bottom */
	marginY?: ResponsiveValue<TVal, ThemeType>;
	/** Padding on top, left, bottom and right */
	p?: ResponsiveValue<TVal, ThemeType>;
	/** Padding on top, left, bottom and right */
	padding?: ResponsiveValue<TVal, ThemeType>;
	/** Padding on top */
	pt?: ResponsiveValue<TVal, ThemeType>;
	/** Padding on top */
	paddingTop?: ResponsiveValue<TVal, ThemeType>;
	/** Padding on right */
	pr?: ResponsiveValue<TVal, ThemeType>;
	/** Padding on right */
	paddingRight?: ResponsiveValue<TVal, ThemeType>;
	/** Padding on bottom */
	pb?: ResponsiveValue<TVal, ThemeType>;
	/** Padding on bottom */
	paddingBottom?: ResponsiveValue<TVal, ThemeType>;
	/** Padding on left */
	pl?: ResponsiveValue<TVal, ThemeType>;
	/** Padding on left */
	paddingLeft?: ResponsiveValue<TVal, ThemeType>;
	/** Padding on left and right */
	px?: ResponsiveValue<TVal, ThemeType>;
	/** Padding on left and right */
	paddingX?: ResponsiveValue<TVal, ThemeType>;
	/** Padding on top and bottom */
	py?: ResponsiveValue<TVal, ThemeType>;
	/** Padding on top and bottom */
	paddingY?: ResponsiveValue<TVal, ThemeType>;
}

// Preserved to support v4 shim:
// https://github.com/styled-system/styled-system/blob/master/packages/styled-system/src/index.js#L108
export interface LowLevelStyleFunctionArguments<N, S> {
	prop: string;
	cssProperty?: string;
	alias?: string;
	key?: string;
	transformValue?: (n: N, scale?: S) => any;
	scale?: S;
	// new v5 api
	properties?: string[];
}

export interface styleFn {
	(...args: any[]): any;
	config?: object;
	propNames?: string[];
	cache?: object;
	[key: string]: any;
}

export interface ConfigStyle {
	/** The CSS property to use in the returned style object (overridden by `properties` if present). */
	property?: keyof CSS.Properties;
	/**
	 * An array of multiple properties (e.g. `['marginLeft', 'marginRight']`) to which this style's value will be
	 * assigned (overrides `property` when present).
	 */
	properties?: Array<keyof CSS.Properties | undefined>;
	/** A string referencing a key in the `theme` object. */
	scale?: string;
	/** A fallback scale object for when there isn't one defined in the `theme` object. */
	defaultScale?: Scale;
	/** A function to transform the raw value based on the scale. */
	transform?: (value: any, scale?: Scale, _props?: any) => any;

	[key: string]: any;
}

export interface Config {
	/** Property name exposed for use in components */
	[customStyleName: string]: ConfigStyle | boolean;
}

export type ParsePropType = {
	theme: Theme;
	[key: string]: any;
}

export interface Parse {
	(props: ParsePropType): {};
	config: ConfigStyle;
	propNames: string[];
	cache: any;
	[key: string]: any;
}


export type ParseResponsiveProps = {
	breakpoints?: (number | string | { [key: string]: string | number })[],
	mediaQueries?: (string | number)[],
	sx: styleFn,
	scale: Scale,
	raw: any,
	_props: any
}

