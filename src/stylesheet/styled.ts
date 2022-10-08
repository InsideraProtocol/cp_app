import {
  Colors,
  Typo,
  typography,
  Curves,
  curves,
  AlignItems,
  AlignSelf,
  JustifyContent,
} from "./";
import { css, DefaultTheme } from "styled-components";
import { languageUtil, Locale } from "../utils/language";
import config from "../config";

export type SetStyle = {
  theme?: DefaultTheme;
  _overflow?: "hidden" | "visible" | "auto";
  _overflowX?: "hidden" | "visible" | "auto";
  _color?: string;
  _backgroundColor?: string;
  _border?: string;
  _boxShadow?: string;
  _borderRadius?: string;
  _borderTopStartRadius?: string;
  _borderTopLeftRadius?: string;
  _borderTopEndRadius?: string;
  _borderTopRightRadius?: string;
  _borderBottomStartRadius?: string;
  _borderBottomLeftRadius?: string;
  _borderBottomEndRadius?: string;
  _borderBottomRightRadius?: string;
  _textAlign?: "left" | "center" | "right" | "justify";
  _display?: "flex" | "inline-flex" | "none";
  _flex?: number;
  _alignItems?: AlignItems;
  _justifyContent?: JustifyContent;
  _alignSelf?: AlignSelf;
  _flexDirection?: string;
  _height?: string;
  _width?: string;
  _minWidth?: string;
  _maxWidth?: string;
  _minHeight?: string;
  _maxHeight?: string;
  _flexWrap?: string;
  _borderColor?: string;
  _position?: string;
  _top?: string;
  _right?: string;
  _bottom?: string;
  _left?: string;
  _zIndex?: number;
  _shadowColor?: string;
  _shadowOffset?: string;
  _shadowOpacity?: number;
  _shadowRadius?: string;
  _opacity?: number;
  _fontFamily?: string;
  _elevation?: number;
};
export const setStyle = (props: SetStyle) => {
  const camelCase = /([a-z0-9]|(?=[A-Z]))([A-Z])/g;
  const stylesToString = Object.keys(props).reduce(
    (acc: string, rule: string) => {
      // @ts-ignore
      const cssValue = props[rule];

      if (rule.charAt(0) === "_" && cssValue) {
        acc += `${rule
          .replace("_", "")
          .replace(camelCase, "$1-$2")
          .toLowerCase()}: ${cssValue};`;
      }
      return acc;
    },
    ""
  );

  return css`
    ${stylesToString}
  `;
};

export type SetColor = {
  color?: Colors;
  theme?: DefaultTheme;
};
export const setColor = (props: SetColor) =>
  props?.color && props.theme
    ? setStyle({ _color: props.theme[props.color] })
    : "";

export type SetBackgroundColor = {
  bg?: Colors;
  theme?: DefaultTheme;
};
export const setBackgroundColor = (props: SetBackgroundColor) =>
  props?.bg && props.theme
    ? setStyle({ _backgroundColor: props.theme[props.bg] })
    : "";

export type SetBorder = {
  border?: boolean | string;
  theme?: DefaultTheme;
  borderColor?: Colors;
  borderWidth?: string;
  borderStyle?: "solid" | "dashed" | "dotted";
};
export const setBorder = (props: SetBorder) => {
  const { border, theme, borderColor, borderStyle, borderWidth } = props;
  if (border === true) {
    return setStyle({ _border: `1px solid ${theme?.border}` });
  } else if (border) {
    return setStyle({ _border: border });
  } else if (borderColor && borderStyle && borderWidth) {
    return setStyle({
      _border: `${borderWidth} ${borderStyle} ${theme?.[borderColor]}`,
    });
  } else {
    return "";
  }
};

export type SetShadow = {
  theme?: DefaultTheme;
  shadow?: boolean | Colors;
};

export function shadowGenerator(shadowString: string = ""): SetStyle {
  const [x, y, radius, s, color] = shadowString.split("px ");

  return {
    _shadowColor: color,
    _shadowOffset: `${x}px ${y}px`,
    _shadowOpacity: 0.1,
    _shadowRadius: `${radius}px`,
    _elevation: 5,
  };
}

export const setShadow = (props: SetShadow) => {
  const { shadow, theme } = props;

  if (shadow === true) {
    return setStyle(shadowGenerator(theme?.shadow));
  } else if (shadow) {
    return setStyle({ _boxShadow: theme?.[shadow] });
  } else {
    return "";
  }
};

export type SetTypography = {
  typo?: Typo;
  black?: boolean;
  bold?: boolean;
  extraBold?: boolean;
  light?: boolean;
  medium?: boolean;
  regular?: boolean;
  semiBold?: boolean;
  theme?: DefaultTheme;
};
export const setTypography = (props: SetTypography) => {
  let styles = "";
  if (props?.typo) {
    styles += `font-size: ${typography[props.typo]};`;
  }
  if (props?.bold) {
    styles += "font-family: Rubik-Bold;";
  } else if (props?.black) {
    styles += "font-family: Rubik-Black;";
  } else if (props?.extraBold) {
    styles += "font-family: Rubik-ExtraBold;";
  } else if (props?.light) {
    styles += "font-family: Rubik-Light;";
  } else if (props?.medium) {
    styles += "font-family: Rubik-Medium;";
  } else if (props?.semiBold) {
    styles += "font-family: Rubik-SemiBold;";
  } else {
    styles += "font-family: Rubik-Regular;";
  }
  return css`
    ${styles}
  `;
};

export type SetRadius = {
  theme?: DefaultTheme;
  curve?: boolean | Curves | (Curves | number)[];
  locale?: Locale;
};
export const setRadius = (props: SetRadius) => {
  if (props?.curve === true) {
    return setStyle({ _borderRadius: curves.sm });
  } else if (Array.isArray(props?.curve)) {
    const isRTL = languageUtil.isRTL(props?.locale || config.defaultLocale);
    return setStyle({
      _borderTopLeftRadius: curves[isRTL ? props?.curve[1] : props?.curve[0]],
      _borderTopRightRadius: curves[isRTL ? props?.curve[0] : props?.curve[1]],
      _borderBottomRightRadius:
        curves[isRTL ? props?.curve[3] : props?.curve[2]],
      _borderBottomLeftRadius:
        curves[isRTL ? props?.curve[2] : props?.curve[3]],
    });
  } else if (props?.curve) {
    return setStyle({ _borderRadius: curves[props.curve] });
  } else {
    return "";
  }
};
