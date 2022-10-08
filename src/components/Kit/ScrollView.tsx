import React from "react";
import { ScrollViewProps as RNScrollViewProps } from "react-native";
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

export type ScrollViewProps = {} & RNScrollViewProps &
  SetStyle &
  SetBackgroundColor &
  SetFlex &
  SetSpace;

const StyledScrollView: React.FC<ScrollViewProps> = styled.ScrollView<ScrollViewProps>`
  ${setBackgroundColor};
  ${setFlex};
  ${setSpace};
  ${setStyle};
`;

export function ScrollView(props: ScrollViewProps): JSX.Element {
  const { margin, padding, locale, ...restProps } = props;

  const { i18n } = useTranslation();

  return (
    <StyledScrollView
      locale={locale || i18n.language}
      {...restProps}
      $margin={margin}
      $padding={padding}
    />
  );
}
