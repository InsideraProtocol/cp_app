import React from "react";
import styled from "styled-components/native";
import { TouchableWithoutFeedbackProps as RNTouchableWithoutFeedbackProps } from "react-native";
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

export type TouchableWithoutFeedbackProps = RNTouchableWithoutFeedbackProps &
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

const StyledTouchableWithoutFeedback: React.FC<TouchableWithoutFeedbackProps> = styled.View<TouchableWithoutFeedbackProps>`
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

export function TouchableWithoutFeedback(props: TouchableWithoutFeedbackProps) {
  const { margin, padding, locale, ...restProps } = props;

  const { i18n } = useTranslation();

  return (
    <StyledTouchableWithoutFeedback
      {...restProps}
      $margin={margin}
      $padding={padding}
      locale={locale || i18n.language}
    />
  );
}
