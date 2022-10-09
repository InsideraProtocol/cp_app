import React from "react";
import {
  Card,
  SafeAreaView,
  ScrollView,
  Spacer,
  Text,
} from "../components/Kit";
import { Notifications } from "../components/Notifications/Notifications";

export const notifications = [
  {
    message: "Confirm PayPal payment",
    date: new Date(),
    rewards: "0.32",
  },
  {
    message: "Confirm PayPal payment",
    date: new Date(),
    rewards: "0.32",
  },
  {
    message: "Confirm PayPal payment",
    date: new Date(),
    rewards: "0.32",
  },
  {
    message: "Confirm PayPal payment",
    date: new Date(),
    rewards: "0.32",
  },
  {
    message: "Confirm PayPal payment",
    date: new Date(),
    rewards: "0.32",
  },
  {
    message: "Confirm PayPal payment",
    date: new Date(),
    rewards: "0.32",
  },
];

export function NotificationsScreen() {
  return (
    <SafeAreaView flex={1}>
      <ScrollView>
        <Card padding={[0, 4]}>
          <Card
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text typo="xl" bold>
              notificationsScreen.title
            </Text>
            <Text>notificationsScreen.final</Text>
          </Card>
          <Spacer times={3} />
          <Notifications notifications={notifications} />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
