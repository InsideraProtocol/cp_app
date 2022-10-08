import { DefaultTheme } from "styled-components/native";

import { Theme } from "../stylesheet";

export const headerStyle = (theme: DefaultTheme, name: Theme): any => ({
  cardStyle: {
    backgroundColor: name === "dark" ? theme.gray : theme.dark,
  },
  headerStyle: {
    backgroundColor: name === "dark" ? theme.dark : theme.gray,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    borderBottomColor: name === "dark" ? theme.dark : theme.gray,
    borderBottomWidth: 1,
  },
  headerTitleAlign: "center",
  headerTintColor: theme.light,
  headerTitleStyle: {
    paddingBottom: 4,
    alignSelf: "center",
  },
  headerTitleContainerStyle: {
    left: 0,
  },
});
