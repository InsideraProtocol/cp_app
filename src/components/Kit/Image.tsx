import React from "react";
import styled from "styled-components/native";
import { ImageProps as RNImageProps } from "react-native";
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

export type ImageProps = RNImageProps &
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

const StyledImage: React.FC<ImageProps> = styled.Image<ImageProps>`
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

export function Image(props: ImageProps) {
  const { margin, padding, locale, ...restProps } = props;

  const { i18n } = useTranslation();

  return (
    <StyledImage
      {...restProps}
      $margin={margin}
      $padding={padding}
      locale={locale || i18n.language}
    />
  );
}
