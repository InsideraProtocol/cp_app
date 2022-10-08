import React from "react";
import {
  KeyboardAwareScrollView as RNKeyboardAwareScrollView,
  KeyboardAwareScrollViewProps as RNKeyboardAwareScrollViewProps,
} from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";
import { useTranslation } from "react-i18next";
import {
  SetBackgroundColor,
  setBackgroundColor,
  SetFlex,
  setFlex,
  SetSpace,
  setSpace,
  SetStyle,
  setStyle,
} from "../../stylesheet";

export type KeyboardAwareScrollViewProps = RNKeyboardAwareScrollViewProps &
  SetStyle &
  SetBackgroundColor &
  SetFlex &
  SetSpace;

const StyledKeyboardAwareScrollView: React.FC<KeyboardAwareScrollViewProps> = styled(
  RNKeyboardAwareScrollView
)<KeyboardAwareScrollViewProps>`
  ${setBackgroundColor};
  ${setFlex};
  ${setSpace};
  ${setStyle};
`;

export function KeyboardAwareScrollView(
  props: KeyboardAwareScrollViewProps
): JSX.Element {
  const { margin, padding, locale, ...restProps } = props;

  const { i18n } = useTranslation();

  return (
    <StyledKeyboardAwareScrollView
      scrollIndicatorInsets={{ bottom: 300 }}
      locale={locale || i18n.language}
      keyboardShouldPersistTaps="always"
      {...restProps}
      $margin={margin}
      $padding={padding}
    />
  );
}
