import React from "react";
import { Card, Image, Spacer, Text } from "../Kit";
import { appIcon } from "../../assets/icons";
import { Colors } from "../../stylesheet";

export function InsiderProtocolHeader() {
  return (
    <Card
      padding={3}
      flexDirection="row"
      alignItems="center"
      bg={Colors.screenBg}
    >
      <Image source={appIcon} _width="20px" _height="20px" />
      <Spacer />
      <Text typo="lg" bold>
        insiderProtocol
      </Text>
    </Card>
  );
}
