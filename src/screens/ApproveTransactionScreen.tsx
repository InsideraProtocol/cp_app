import React from "react";
import { Button, Card, SafeAreaView, Spacer, Text } from "../components/Kit";
import { GoBackHeader } from "../components/InsiderProtocolHeader/GoBackHeader";
import { Colors, Curves } from "../stylesheet";
import { PaymentTypes } from "../components/PaymentTypes/PaymentTypes";
import { Keyboard } from "../components/Keyboard/Keyboard";

export function ApproveTransactionScreen() {
  return (
    <SafeAreaView>
      <GoBackHeader screenTitle="approveTransaction" />
      <Card padding={[0, 4]}>
        <Card justifyContent="center" alignItems="center">
          <Text typo="md" bold>
            approveScreen.chooseMethod
          </Text>
          <Spacer />
          <PaymentTypes />
          <Spacer />
          <Text typo="md" bold>
            approveScreen.senders
          </Text>
          <Spacer />
          <Text
            bg={Colors.gray200}
            _width="240px"
            curve={Curves.circle}
            _textAlign="center"
            padding={[0.5, 0]}
          >
            email
          </Text>
          <Spacer />
          <Text typo="lg" bold>
            approveScreen.howMuch
          </Text>
        </Card>
        <Spacer />
        <Keyboard />
        <Spacer />
        <Button
          text="approveScreen.gotMoney"
          bg={Colors.dark}
          textProps={{ color: Colors.light }}
          curve={Curves.sm}
          padding={[4, 0]}
        />
        <Spacer />
      </Card>
    </SafeAreaView>
  );
}
