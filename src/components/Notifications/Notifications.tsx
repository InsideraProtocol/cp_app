import React from "react";
import { Card, Spacer, Text } from "../Kit";
import { Colors, Curves, curves } from "../../stylesheet";

export type NotificationsProps = {
  notifications: {
    message: string;
    date: Date;
    rewards: string;
  }[];
};

export function Notifications(props: NotificationsProps) {
  const { notifications } = props;

  return (
    <Card>
      {notifications && notifications.length > 0
        ? notifications.map((notification) => (
            <Card
              key={notification.date.getMilliseconds()}
              bg={Colors.white}
              margin={[0, 0, 2, 0]}
              padding={1}
              curve={Curves.sm}
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Card>
                <Text typo="md" bold>
                  {notification.message}
                </Text>
                <Spacer times={0.5} />
                <Text color={Colors.gray}>
                  {notification.date.toLocaleDateString()}
                </Text>
              </Card>
              <Text bold typo="sm">
                ${notification.rewards}
              </Text>
            </Card>
          ))
        : null}
    </Card>
  );
}
