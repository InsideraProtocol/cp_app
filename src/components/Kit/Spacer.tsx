import React from "react";
import { Card, CardProps } from "../Kit/Card";

export type SpacerProps = CardProps & {
  times?: number;
};

export function Spacer(props: SpacerProps) {
  const { times = 1 } = props;

  return <Card padding={times} {...props} />;
}
