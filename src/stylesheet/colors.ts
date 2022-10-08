import { DefaultTheme } from "styled-components/native";
import { hexToRgba } from "../utils/color";

const mainColors: DefaultTheme = {
  white: "#FFF",
  lightGreen: "#CAD9C8",
  light: "#F8F8F8",
  black: "#0B0A0A",
  dark: "#2B2B2B",
  gray: "#595F67",
  gray100: "#D0D3D8",
  gray200: "#EEEEEE",
  screenBg: "#FFFFFF",
  shadow: "0px 7px 16px 0px #00000099",
  transparent: "transparent",
  green: "#36E1C6",
  red: "#DC4126",
  yellow: "#a2961e",
  pink: "#FCB3C5",

  success: "",
  failure: "",
  warning: "",
};

const colors: DefaultTheme = {
  ...mainColors,
  success: mainColors.green,
  failure: mainColors.red,
  warning: mainColors.yellow,
};

const lightColors: DefaultTheme = {
  ...colors,
  light: colors.dark,
  black: colors.light,
  white: colors.white,

  // grayOpacity50: hexToRgba(colors.light, 0.5),
  dark: colors.light,
  gray200: "#474747",
  gray100: "#252525",
  shadow: "0px 7px 16px 0px #000000",
};

export enum Colors {
  lightGreen = "lightGreen",
  white = "white",
  light = "light",
  black = "black",
  dark = "dark",
  gray200 = "gray200",
  gray100 = "gray100",
  shadow = "shadow",
  green = "green",
  red = "red",
  yellow = "yellow",
  screenBg = "screenBg",
  success = "success",
  warning = "warning",
  failure = "failure",
  transparent = "transparent",
  gray = "gray",
  pink = "pink",
}

export { colors, mainColors, lightColors };
