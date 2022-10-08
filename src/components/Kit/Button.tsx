import React from "react";
import { Keyboard } from "react-native";
import { useTranslation } from "react-i18next";

import {
  TouchableOpacity,
  TouchableOpacityProps,
} from "../Kit/TouchableOpacity";
import { Text, TextProps } from "../Kit/Text";
import {
  ActivityIndicator,
  ActivityIndicatorProps,
} from "../Kit/ActivityIndicator";
import { Colors, Curves } from "../../stylesheet";
import { useThemeColors } from "../../redux/modules/theme/theme";
import { hexToRgba } from "../../utils/color";

export type ButtonProps = TouchableOpacityProps & {
  loading?: boolean;
  text?: string;
  textProps?: Omit<TextProps, "children">;
  translationParams?: TextProps["translationParams"];
  loadingSize?: ActivityIndicatorProps["size"];
  loadingColor?: ActivityIndicatorProps["color"];
  dismissKeyboard?: boolean;
  size?: "lg" | "sm";
  disabled?: boolean;
};

export function Button(props: ButtonProps) {
  const {
    loading,
    text,
    translationParams,
    loadingSize,
    textProps = {},
    loadingColor = Colors.success,
    locale,
    onPress,
    dismissKeyboard,
    size = "lg",
    disabled,
    bg,
    ...restProps
  } = props;
  const [colors] = useThemeColors();

  const { i18n } = useTranslation();

  const handlePress = (e) => {
    if (dismissKeyboard) {
      Keyboard.dismiss();
    }
    onPress?.(e);
  };

  return (
    <TouchableOpacity
      _height={size === "lg" ? "44px" : "32px"}
      padding={[0, 2]}
      disabled={disabled}
      curve={Curves.lg}
      alignItems="center"
      flexDirection="row"
      justifyContent={loading ? "space-between" : "center"}
      locale={locale || i18n.language}
      onPress={handlePress}
      _backgroundColor={
        disabled && bg
          ? hexToRgba(colors[bg], 0.2)
          : bg
          ? colors[bg]
          : undefined
      }
      {...restProps}
    >
      {text ? (
        <Text translationParams={translationParams} {...textProps}>
          {text}
        </Text>
      ) : null}
      {loading ? (
        <ActivityIndicator color={loadingColor} size={loadingSize} />
      ) : null}
    </TouchableOpacity>
  );
}
