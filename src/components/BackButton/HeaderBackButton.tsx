import React from "react";
import { Text } from "../Kit";
import { TouchableOpacity } from "react-native";

export type HeaderBackButtonProps = {
  onPress: () => void;
};

export function HeaderBackButton(props: HeaderBackButtonProps) {
  const { onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text padding={[0, 2]} typo="sm">
        header.back
      </Text>
    </TouchableOpacity>
  );
}
