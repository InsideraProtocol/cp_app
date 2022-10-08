import React from "react";
import styled from "styled-components/native";
import { ImageBackgroundProps as RNImageBackgroundProps } from "react-native";
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

export type ImageBackgroundProps = RNImageBackgroundProps &
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
  SetFlexDirection & {
    children?: any;
  };

const StyledImageBackground: React.FC<ImageBackgroundProps> = styled.ImageBackground<ImageBackgroundProps>`
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

export function ImageBackground(props: ImageBackgroundProps) {
  const { margin, padding, locale, ...restProps } = props;

  const { i18n } = useTranslation();

  return (
    <StyledImageBackground
      {...restProps}
      $margin={margin}
      $padding={padding}
      locale={locale || i18n.language}
    />
  );
}
