import React from "react";
import {
  ActivityIndicator,
  Card,
  ImageBackground,
  Spacer,
  AppVersion,
} from "../";
import { splash } from "../../../assets/images";
import { colors } from "../../../stylesheet";

export function AppLoading() {
  return (
    <ImageBackground flex={1} source={splash} resizeMode="cover">
      <Card flex={1} />
      <Card flex={1} alignItems="center" justifyContent="center">
        <ActivityIndicator _color={colors.light} size="large" />
        <Spacer times={2} />
        <AppVersion _color={colors.light} typo="sm" />
      </Card>
    </ImageBackground>
  );
}
