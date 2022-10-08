import React from "react";
import styled from "styled-components/native";
import {
  KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
  Platform,
} from "react-native";

import {
  setAlignItems,
  SetAlignItems,
  setAlignSelf,
  SetAlignSelf,
  setBackgroundColor,
  SetBackgroundColor,
  setBorder,
  SetBorder,
  setFlex,
  SetFlex,
  setFlexDirection,
  SetFlexDirection,
  setJustifyContent,
  SetJustifyContent,
  SetRadius,
  setRadius,
  setShadow,
  SetShadow,
  setSpace,
  SetSpace,
  SetStyle,
  setStyle,
} from "../../stylesheet";
import { useTranslation } from "react-i18next";

export type KeyboardAvoidingViewProps = SetBackgroundColor &
  SetRadius &
  SetStyle &
  SetShadow &
  SetBorder &
  SetSpace &
  SetFlex &
  SetAlignSelf &
  SetAlignItems &
  SetJustifyContent &
  SetFlexDirection &
  RNKeyboardAvoidingViewProps;

export const StyledKeyboardAvoidingView: React.FC<KeyboardAvoidingViewProps> = styled.KeyboardAvoidingView<KeyboardAvoidingViewProps>`
  ${setBackgroundColor};
  ${setRadius};
  ${setBorder};
  ${setSpace};
  ${setFlex};
  ${setAlignSelf};
  ${setAlignItems};
  ${setJustifyContent};
  ${setFlexDirection};
  ${setShadow};
  ${setStyle};
`;

export function KeyboardAvoidingView(props: KeyboardAvoidingViewProps) {
  const { padding, margin, locale, ...restProps } = props;

  const { i18n } = useTranslation();

  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      {...restProps}
      $padding={padding}
      $margin={margin}
      locale={locale || i18n.language}
    />
  );
}
