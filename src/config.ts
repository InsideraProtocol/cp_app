import { Appearance, ColorSchemeName } from "react-native";

import { Theme } from "./stylesheet";

export function defaultTheme(): ColorSchemeName {
  return Appearance.getColorScheme();
}

const config: Config = {
  defaultLocale: "en",
  defaultTheme: defaultTheme() === "light" ? "light" : "dark",
  baseUrl: "",
  debugFetch: false,
  reduxLogger: false,
};

export type Config = {
  defaultLocale: string;
  defaultTheme: Theme;
  baseUrl: string;
  debugFetch: boolean;
  reduxLogger: boolean;
};

export default config;
