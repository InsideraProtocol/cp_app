import React from "react";
import { Card, Image, Spacer, Text, TouchableOpacity } from "../Kit";
import { appIcon } from "../../assets/icons";
import { Colors } from "../../stylesheet";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../navigation/RootNavigation";

export function InsiderProtocolHeader() {
  const navigation = useNavigation<any>();

  return (
    <Card>
      <TouchableOpacity
        padding={3}
        bg={Colors.screenBg}
        onPress={() => navigation.navigate(Routes.HOME)}
        flexDirection="row"
        alignItems="center"
      >
        <Image source={appIcon} _width="20px" _height="20px" />
        <Spacer />
        <Text typo="lg" bold>
          insiderProtocol
        </Text>
      </TouchableOpacity>
    </Card>
  );
}
