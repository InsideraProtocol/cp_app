import React from "react";
import { Card, Image, Spacer, Text } from "../Kit";
import { Colors } from "../../stylesheet";
import { approvePendingIcon } from "../../assets/icons";

export const pendingList: pendingType[] = [
  {
    type: "PayPal",
    date: new Date(),
    payment: "0.15",
  },
  {
    type: "Claro",
    date: new Date(),
    payment: "0.15",
  },
  {
    type: "Pix",
    date: new Date(),
    payment: "0.15",
  },
];

export type pendingType = {
  type: string;
  date: Date;
  payment: string;
};

export function PendingApproval() {
  return (
    <Card>
      <Card
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text typo="lg" bold>
          pendingApproval
        </Text>
        <Text typo="lg" bold>
          pendingRewards
        </Text>
      </Card>
      <Spacer />
      <Card>
        {pendingList.map((pending, index) => (
          <Card
            key={index}
            flexDirection="row"
            alignItems="center"
            padding={[1, 2]}
          >
            <Image source={approvePendingIcon} _width="32px" _height="32px" />
            <Spacer />
            <Card
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Card>
                <Text typo="sm" bold color={Colors.dark}>
                  {pending.type}
                </Text>
                <Spacer times={0.5} />
                <Text typo="sm" bold color={Colors.gray}>
                  {pending.date.toLocaleDateString()}
                </Text>
              </Card>
              <Text bold typo="sm">
                {`$${pending.payment}`}
              </Text>
            </Card>
          </Card>
        ))}
      </Card>
    </Card>
  );
}
