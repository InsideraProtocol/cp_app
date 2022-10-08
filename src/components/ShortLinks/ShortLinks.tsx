import React from "react";

import { Colors, Curves } from "../../stylesheet";
import { Card, Icon, Spacer, Text, TouchableOpacity } from "../Kit";

export function ShortLinks() {
  return (
    <Card bg={Colors.dark} padding={1} curve={Curves.sm} flexDirection="row">
      <TouchableOpacity
        flex={1}
        justifyContent="center"
        alignItems="center"
        padding={1}
      >
        <Icon name="plus-circle" size={28} color={Colors.light} />
        <Spacer times={0.5} />
        <Text color={Colors.light} _textAlign="center" typo="tiny" bold>
          joinFact
        </Text>
      </TouchableOpacity>
      <TouchableOpacity flex={1} justifyContent="center" alignItems="center">
        <Icon name="paper-plane" size={28} color={Colors.light} />
        <Spacer times={0.5} />
        <Text color={Colors.light} _textAlign="center" typo="tiny" bold>
          submitTrans
        </Text>
      </TouchableOpacity>
      <TouchableOpacity flex={1} justifyContent="center" alignItems="center">
        <Icon name="money-check-alt" size={28} color={Colors.light} />
        <Spacer times={0.5} />
        <Text color={Colors.light} _textAlign="center" typo="tiny" bold>
          claimRewards
        </Text>
      </TouchableOpacity>
    </Card>
  );
}
