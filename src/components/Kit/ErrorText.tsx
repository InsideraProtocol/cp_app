import React from "react";
import { Text, TextProps } from "./Text";
import { Colors } from "../../stylesheet";

export type ErrorTextProps = TextProps & {
  error: string;
};

export function ErrorText(props: ErrorTextProps) {
  const { error, ...restProps } = props;

  return (
    <Text medium typo="xs" color={Colors.failure} {...restProps}>
      {error}
    </Text>
  );
}
