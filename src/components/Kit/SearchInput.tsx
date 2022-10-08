import React, { useRef } from "react";
import { Pressable, TextInput as RNTextInput } from "react-native";

import { TextInput } from "../Kit/TextInput";
import { CardItem } from "../Kit/CardItem";
import { Colors, Curves } from "../../stylesheet";

export function SearchInput() {
  const _inputRef = useRef<RNTextInput>(null);
  const handlePress = () => {
    _inputRef?.current?.focus();
  };

  return (
    <Pressable onPress={handlePress}>
      <CardItem
        padding={[0, 2]}
        flexDirection="row"
        alignItems="center"
        bg={Colors.screenBg}
      >
        <TextInput
          _height="50px"
          placeholder="form.placeholder.search"
          curve={Curves.circle}
          border={false}
          bg={Colors.transparent}
          alignSelf="stretch"
          iconName="search"
          iconSize={20}
        />
      </CardItem>
    </Pressable>
  );
}
