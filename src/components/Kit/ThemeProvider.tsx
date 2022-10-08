import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import { StatusBar, StatusBarStyle } from "react-native";

import { useThemeColors } from "../../redux/modules/theme/theme";

export type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export function ThemeProvider(props: ThemeProviderProps): JSX.Element {
  const { children } = props;

  const [theme, name] = useThemeColors();

  const barStyle: StatusBarStyle = `${
    name === "light" ? "dark" : "light"
  }-content`;

  return (
    <>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
      <StatusBar barStyle={barStyle} />
    </>
  );
}
