import React, { useCallback, useState } from "react";
import { Card, Hr, Icon, Text, TouchableOpacity } from "../Kit";
import { Colors } from "../../stylesheet";
import { Trans } from "react-i18next";

export function Keyboard() {
  const [keyboardValue, setKeyboardValue] = useState("");

  const handleSetValue = useCallback(
    (keyValue) => {
      if (!keyboardValue.length && keyValue === ".") {
        setKeyboardValue(
          (prevKeyboardValue) => prevKeyboardValue + "0" + keyValue
        );
        return;
      }
      setKeyboardValue((prevKeyboardValue) => prevKeyboardValue + keyValue);
    },
    [keyboardValue]
  );

  const handleUndo = useCallback(() => {
    setKeyboardValue((prevKeyboardValue) =>
      prevKeyboardValue.slice(0, prevKeyboardValue.length - 1)
    );
  }, []);

  return (
    <Card>
      <Card justifyContent="center" alignItems="center" _height="44px">
        <Card flexDirection="row" alignItems="center">
          <Trans
            i18nKey="usd"
            components={{
              Text: (
                <Text
                  color={Colors.gray}
                  margin={[0, 1, 0, 0]}
                  typo="xl"
                  translationParams={{ value: keyboardValue || "0.00" }}
                />
              ),
            }}
          />
        </Card>
      </Card>
      <Hr margin={[1, 0]} />
      <Card>
        <Card flexDirection="row">
          <KeyBoardKey value="1" onPress={handleSetValue} />
          <KeyBoardKey value="2" onPress={handleSetValue} />
          <KeyBoardKey value="3" onPress={handleSetValue} />
        </Card>
        <Card flexDirection="row">
          <KeyBoardKey value="4" onPress={handleSetValue} />
          <KeyBoardKey value="5" onPress={handleSetValue} />
          <KeyBoardKey value="6" onPress={handleSetValue} />
        </Card>
        <Card flexDirection="row">
          <KeyBoardKey value="7" onPress={handleSetValue} />
          <KeyBoardKey value="8" onPress={handleSetValue} />
          <KeyBoardKey value="9" onPress={handleSetValue} />
        </Card>
        <Card flexDirection="row">
          <KeyBoardKey value="." onPress={handleSetValue} />
          <KeyBoardKey value="0" onPress={handleSetValue} />
          <KeyBoardKey value="back" onPress={handleUndo} />
        </Card>
      </Card>
    </Card>
  );
}

export function KeyBoardKey({
  value,
  onPress,
}: {
  value: string;
  onPress: (value: string) => void;
}) {
  return (
    <TouchableOpacity
      flex={1}
      justifyContent="center"
      alignItems="center"
      _height="64px"
      onPress={() => onPress(value)}
    >
      {value === "back" ? (
        <Icon name="undo" size={24} />
      ) : (
        <Text color={Colors.dark} typo="lg">
          {value}
        </Text>
      )}
    </TouchableOpacity>
  );
}
