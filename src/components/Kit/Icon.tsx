import React from "react";
import VectorIcon from "@expo/vector-icons/FontAwesome5";
import {
  Colors,
  setColor,
  SetColor,
  SetStyle,
  setStyle,
} from "../../stylesheet";
import styled from "styled-components/native";

export type VectorIconProps = { name: string; size: number } & SetColor &
  SetStyle;

const StyledIcon: React.FunctionComponent<VectorIconProps> = styled(
  VectorIcon
)<VectorIconProps>`
  ${setColor};
  ${setStyle};
`;

export function Icon(props: VectorIconProps) {
  const { name, color = Colors.dark, size, ...restProps } = props;

  return <StyledIcon color={color} name={name} size={size} {...restProps} />;
}
