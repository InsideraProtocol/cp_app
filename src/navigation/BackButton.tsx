import React from "react";
import { Text } from "../components/Kit";
import { TouchableOpacity } from "react-native";

export type BackButtonProps = {
  onPress: () => void;
};

export function BackButton(props: BackButtonProps) {
  const { onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text padding={[0, 2]} typo="sm">
        header.back
      </Text>
    </TouchableOpacity>
  );
}
