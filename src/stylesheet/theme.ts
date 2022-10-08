import { DefaultTheme } from "styled-components";

import { colors, lightColors } from "./colors";
import { defaultTheme } from "../config";

export type Themes = {
  light: DefaultTheme;
  dark: DefaultTheme;
  default: DefaultTheme;
};

export type Theme = keyof Themes;

export const themes: Themes = {
  light: lightColors,
  dark: colors,
  default: defaultTheme() === "light" ? lightColors : colors,
};
