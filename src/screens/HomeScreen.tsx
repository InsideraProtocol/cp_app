import React from "react";
import {
  Card,
  Image,
  SafeAreaView,
  ScrollView,
  Spacer,
  Text,
} from "../components/Kit";
import { Colors, Curves } from "../stylesheet";
import { localPayment } from "../assets/images";
import { PendingRewards } from "../components/Profile/PendingRewards";
import { PendingApproval } from "../components/HistoryLists/PendingApproval";
import { ShortLinks } from "../components/ShortLinks/ShortLinks";

export function HomeScreen() {
  return (
    <SafeAreaView flex={1}>
      <ScrollView>
        <Card padding={[0, 3]}>
          <PendingRewards name="Armin Bakhshi" rewards="0.15" />
          <Spacer times={3} />
          <ShortLinks />
          <Spacer />
          <LocalPayment />
          <Spacer />
          <PendingApproval />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export function LocalPayment() {
  return (
    <Card
      bg={Colors.pink}
      padding={2}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      curve={Curves.sm}
    >
      <Card>
        <Text typo="md" bold>
          localPayment
        </Text>
        <Text bold color={Colors.dark}>
          learn
        </Text>
        <Spacer />
        <Text typo="tiny">remember</Text>
      </Card>
      <Spacer />
      <Image source={localPayment} _width="77px" _height="82px" />
    </Card>
  );
}
