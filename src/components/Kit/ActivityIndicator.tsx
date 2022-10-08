import React from "react";
import styled from "styled-components/native";
import { useTranslation } from "react-i18next";
import { ActivityIndicatorProps as RNActivityIndicatorProps } from "react-native";

import {
  Colors,
  setAlignSelf,
  SetAlignSelf,
  setSpace,
  SetSpace,
  SetStyle,
  setStyle,
} from "../../stylesheet";
import { useThemeColors } from "../../redux/modules/theme/theme";

export type ActivityIndicatorProps = RNActivityIndicatorProps &
  SetStyle &
  SetSpace &
  SetAlignSelf;

const StyledActivityIndicator: React.FC<ActivityIndicatorProps> = styled.ActivityIndicator<ActivityIndicatorProps>`
  ${setSpace};
  ${setAlignSelf};
  ${setStyle};
`;

export function ActivityIndicator(props: ActivityIndicatorProps) {
  const {
    children,
    margin,
    padding,
    color = Colors.light,
    locale,
    _color,
    ...restProps
  } = props;

  const [colors] = useThemeColors();

  const { i18n } = useTranslation();

  return (
    <StyledActivityIndicator
      color={_color || colors[color]}
      $margin={margin}
      $padding={padding}
      locale={locale || i18n.language}
      {...restProps}
    >
      {children}
    </StyledActivityIndicator>
  );
}
