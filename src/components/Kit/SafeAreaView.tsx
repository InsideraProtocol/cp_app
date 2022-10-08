import React from "react";
import {
  NativeSafeAreaViewProps as RNSafeAreaViewProps,
  SafeAreaView as RNSafeAreaView,
} from "react-native-safe-area-context";
import styled from "styled-components/native";

import {
  Colors,
  SetBackgroundColor,
  setBackgroundColor,
  SetFlex,
  setFlex,
  setSpace,
  SetSpace,
  SetStyle,
  setStyle,
} from "../../stylesheet";
import { useTranslation } from "react-i18next";

export type SafeAreaViewProps = {} & RNSafeAreaViewProps &
  SetStyle &
  SetBackgroundColor &
  SetFlex &
  SetSpace;

const StyledSafeAreaView: React.FC<SafeAreaViewProps> = styled(
  RNSafeAreaView
)<SafeAreaViewProps>`
  ${setBackgroundColor};
  ${setFlex};
  ${setSpace};
  ${setStyle};
`;

export function SafeAreaView(props: SafeAreaViewProps): JSX.Element {
  const { padding, margin, locale, ...restProps } = props;

  const { i18n } = useTranslation();

  return (
    <StyledSafeAreaView
      flex={1}
      _height="100%"
      bg={Colors.screenBg}
      {...restProps}
      $padding={padding}
      $margin={margin}
      locale={locale || i18n.language}
    />
  );
}
