import React from "react";
import { Card, CardProps } from "./Card";
import { Colors, Curves } from "../../stylesheet";

export type CardItemProps = CardProps;

export function CardItem(props: CardItemProps) {
  return (
    <Card
      curve={Curves.md}
      padding={2}
      shadow
      bg={Colors.primaryBg}
      {...props}
    />
  );
}
