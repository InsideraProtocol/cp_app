import React from "react";
import styled from "styled-components/native";
import { TouchableOpacityProps as NativeTouchableOpacityProps } from "react-native";
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
  SetFlexDirection,
  setFlexDirection,
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

export type TouchableOpacityProps = NativeTouchableOpacityProps &
  SetBackgroundColor &
  SetRadius &
  SetStyle &
  SetShadow &
  SetBorder &
  SetSpace &
  SetFlex &
  SetAlignSelf &
  SetFlexDirection &
  SetJustifyContent &
  SetAlignItems;

const StyledTouchableOpacity: React.FC<TouchableOpacityProps> = styled.TouchableOpacity<TouchableOpacityProps>`
  ${setBackgroundColor};
  ${setRadius};
  ${setBorder};
  ${setSpace};
  ${setFlex};
  ${setAlignSelf};
  ${setAlignItems};
  ${setFlexDirection};
  ${setJustifyContent};
  ${setShadow};
  ${setStyle};
`;

export function TouchableOpacity(props: TouchableOpacityProps) {
  const { children, margin, padding, locale, ...restProps } = props;

  const { i18n } = useTranslation();

  return (
    <StyledTouchableOpacity
      {...restProps}
      $margin={margin}
      $padding={padding}
      locale={locale || i18n.language}
    >
      {children}
    </StyledTouchableOpacity>
  );
}
