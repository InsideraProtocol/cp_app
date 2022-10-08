import { DefaultTheme } from "styled-components/native";
import { setStyle } from "./styled";
import { languageUtil, Locale } from "../utils/language";
import config from "../config";

export type SetFlex = {
  theme?: DefaultTheme;
  flex?: number | boolean;
};
export const setFlex = (props: SetFlex) => {
  const { flex } = props;
  if (flex === true) {
    return setStyle({ _display: "flex" });
  } else if (flex) {
    return setStyle({ _display: "flex", _flex: flex });
  } else {
    return "";
  }
};

export type AlignItems =
  | "flex-start"
  | "flex-end"
  | "center"
  | "end"
  | "start"
  | string;
export type SetAlignItems = {
  theme?: DefaultTheme;
  alignItems?: AlignItems;
  locale?: Locale;
};
export const setAlignItems = (props: SetAlignItems) => {
  let { alignItems, locale = config.defaultLocale } = props;

  if (alignItems) {
    const isRTL = languageUtil.isRTL(locale);
    return setStyle({ _alignItems: flexStartOrEnd(alignItems, isRTL) });
  } else {
    return "";
  }
};

export type JustifyContent =
  | "center"
  | "space-around"
  | "space-between"
  | "flex-end"
  | string;
export type SetJustifyContent = {
  theme?: DefaultTheme;
  justifyContent?: JustifyContent;
};
export const setJustifyContent = (props: SetJustifyContent) => {
  const { justifyContent } = props;
  if (justifyContent) {
    return setStyle({ _justifyContent: justifyContent });
  } else {
    return "";
  }
};

export type AlignSelf =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | string;
export type SetAlignSelf = {
  theme?: DefaultTheme;
  alignSelf?: AlignSelf;
  locale?: Locale;
};
export const setAlignSelf = (props: SetAlignSelf) => {
  const { locale = config.defaultLocale, alignSelf } = props;

  if (alignSelf) {
    const isRTL = languageUtil.isRTL(locale);
    return setStyle({ _alignSelf: flexStartOrEnd(alignSelf, isRTL) });
  } else {
    return "";
  }
};

type Value = "flex-start" | "flex-end" | "start" | "end" | string;
export const flexStartOrEnd = (value: Value, isRTL: boolean) => {
  if (value.includes("start")) {
    return value.replace("start", isRTL ? "end" : "start");
  } else if (value.includes("end")) {
    return value.replace("end", isRTL ? "start" : "end");
  } else {
    return value;
  }
};

export type FlexDirection =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse"
  | string;
export type SetFlexDirection = {
  theme?: DefaultTheme;
  locale?: Locale;
  flexDirection?: FlexDirection;
};
export const setFlexDirection = (props: SetFlexDirection) => {
  const { flexDirection, locale = "en" } = props;
  const isRTL = languageUtil.isRTL(locale);

  if (flexDirection === "row") {
    return setStyle({
      _flexDirection: isRTL ? "row-reverse" : "row",
    });
  } else if (flexDirection === "row-reverse") {
    return setStyle({
      _flexDirection: isRTL ? "row" : "row-reverse",
    });
  } else if (flexDirection) {
    return setStyle({ _flexDirection: flexDirection });
  } else {
    return "";
  }
};
