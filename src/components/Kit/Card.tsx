import React from "react";
import styled from "styled-components/native";
import { ViewProps } from "react-native";
import { useTranslation } from "react-i18next";

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

export type CardProps = ViewProps &
  SetBackgroundColor &
  SetRadius &
  SetStyle &
  SetShadow &
  SetBorder &
  SetSpace &
  SetFlex &
  SetAlignSelf &
  SetAlignItems &
  SetJustifyContent &
  SetFlexDirection;

const StyledCard: React.FC<CardProps> = styled.View<CardProps>`
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

export function Card(props: CardProps) {
  const { margin, padding, locale, ...restProps } = props;

  const { i18n } = useTranslation();

  return (
    <StyledCard
      {...restProps}
      $margin={margin}
      $padding={padding}
      locale={locale || i18n.language}
    />
  );
}
