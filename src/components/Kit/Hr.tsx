import React from "react";
import { Card, CardProps } from "./Card";
import { colors, Colors } from "../../stylesheet";

export type HrProps = {
  horizontal?: boolean;
} & CardProps;

export function Hr(props: HrProps) {
  const { horizontal, ...restProps } = props;

  return (
    <Card
      _width={horizontal ? "1px" : "100%"}
      _height={horizontal ? "100%" : "1px"}
      bg={Colors.darkOpacity15}
      margin={[5, 0]}
      {...restProps}
    />
  );
}
