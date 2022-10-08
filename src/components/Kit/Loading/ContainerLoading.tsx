import React from "react";
import { Card, CardProps } from "../Card";
import { Colors } from "../../../stylesheet";

export type ContainerLoadingProps = {
  loading: boolean;
  containerProps?: CardProps;
  children?: any;
  container?: boolean;
};

export function ContainerLoading(props: ContainerLoadingProps) {
  const { loading, containerProps = {}, children, container = false } = props;

  return (
    <Card
      flex={Number(container)}
      _position="relative"
      bg={loading ? Colors.loadingOpacity : undefined}
      {...containerProps}
    >
      {children}
    </Card>
  );
}
