import { Theme, themes } from "../../../stylesheet";
import { useAppSelector } from "../../../hooks/useStore";
import { DefaultTheme } from "styled-components/native";
import config from "../../../config";

export const SET_THEME = "SET_THEME";
export const setTheme = (theme: Theme) => ({
  type: SET_THEME,
  theme,
});

export type ThemeState = {
  name: Theme;
};

export const themeInitialState: ThemeState = {
  name: config.defaultTheme,
};

type Action = {
  type: string;
  theme: Theme;
};
export const theme = (
  state: ThemeState = themeInitialState,
  action: Action
): ThemeState => {
  if (action?.type === SET_THEME) {
    return {
      ...state,
      name: action.theme,
    };
  }
  return state;
};

export function useTheme(): ThemeState {
  return useAppSelector((state) => state.theme);
}

export function useThemeColors(): [DefaultTheme, Theme] {
  const { name } = useTheme();

  const colors = themes[name];

  return [colors, name];
}
