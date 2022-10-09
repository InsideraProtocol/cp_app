import React, { useCallback } from "react";

import { Colors, Curves } from "../../stylesheet";
import { Card, Icon, Spacer, Text, TouchableOpacity } from "../Kit";
import { useNavigation } from "@react-navigation/native";
import { LoggedInStackRoutes } from "../../navigation/LoggedInNavigatorStack";

export function ShortLinks() {
  const navigation = useNavigation<any>();

  const handleNavigateToJoinFactRooms = useCallback(() => {
    navigation.navigate(LoggedInStackRoutes.JOIN_FACT_ROOMS);
  }, []);
  const handleNavigateToSubmitTransaction = useCallback(() => {
    navigation.navigate(LoggedInStackRoutes.SUBMIT_TRANSACTION);
  }, []);
  const handleNavigateToClaimRewards = useCallback(() => {
    navigation.navigate(LoggedInStackRoutes.TAB_NAVIGATOR);
  }, []);

  return (
    <Card bg={Colors.dark} curve={Curves.sm} flexDirection="row" padding={2}>
      <TouchableOpacity
        flex={1}
        justifyContent="center"
        alignItems="center"
        onPress={handleNavigateToJoinFactRooms}
      >
        <Icon name="plus-circle" size={28} color={Colors.light} />
        <Spacer times={0.5} />
        <Text color={Colors.light} _textAlign="center" typo="tiny" bold>
          joinFact
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        flex={1}
        justifyContent="center"
        alignItems="center"
        onPress={handleNavigateToSubmitTransaction}
      >
        <Icon name="paper-plane" size={28} color={Colors.light} />
        <Spacer times={0.5} />
        <Text color={Colors.light} _textAlign="center" typo="tiny" bold>
          submitTrans
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        flex={1}
        justifyContent="center"
        alignItems="center"
        onPress={handleNavigateToClaimRewards}
      >
        <Icon name="money-check-alt" size={28} color={Colors.light} />
        <Spacer times={0.5} />
        <Text color={Colors.light} _textAlign="center" typo="tiny" bold>
          claimRewards
        </Text>
      </TouchableOpacity>
    </Card>
  );
}
