import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Card, Icon, Spacer, Text } from "../Kit";
import { Colors } from "../../stylesheet";

export type GoBackHeaderProps = {
  screenTitle: string;
};

export function GoBackHeader(props: GoBackHeaderProps) {
  const { screenTitle } = props;

  const navigation = useNavigation();

  return (
    <Card padding={4} flexDirection="row" alignItems="center">
      <TouchableOpacity
        onPress={() =>
          navigation.canGoBack() ? navigation.goBack() : undefined
        }
      >
        <Icon name="chevron-left" size={16} />
      </TouchableOpacity>
      <Spacer />
      <Text color={Colors.dark} typo="sm" bold>
        {`screenHeaders.${screenTitle}`}
      </Text>
    </Card>
  );
}
