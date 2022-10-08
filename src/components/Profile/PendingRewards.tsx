import React from "react";
import { Card, Spacer, Text } from "../Kit";
import { Colors } from "../../stylesheet";

export type PendingRewardsProps = {
  name: string;
  rewards: string;
};

export function PendingRewards(props: PendingRewardsProps) {
  const { name, rewards } = props;
  return (
    <Card
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Card>
        <Text translationParams={{ name }} color={Colors.dark} typo="lg" bold>
          hi
        </Text>
        <Spacer times={0.5} />
        <Text color={Colors.gray} typo="xs">
          rewards
        </Text>
      </Card>
      <Text typo="title" bold color={Colors.dark}>
        {`$${rewards}`}
      </Text>
    </Card>
  );
}
