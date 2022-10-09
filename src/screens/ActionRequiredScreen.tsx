import React from "react";
import { Button, Card, SafeAreaView, Spacer, Text } from "../components/Kit";
import { GoBackHeader } from "../components/InsiderProtocolHeader/GoBackHeader";
import { Colors, Curves } from "../stylesheet";
import { Trans } from "react-i18next";

export function ActionRequiredScreen() {
  return (
    <SafeAreaView flex={1}>
      <GoBackHeader screenTitle="actionRequired" />
      <Card flex={1} padding={[0, 4]}>
        <Card justifyContent="center" alignItems="center">
          <Text color={Colors.dark} typo="lg" bold _textAlign="center">
            actionReqScreen.yourData
          </Text>
          <Spacer times={2} />
          <Trans
            i18nKey="usd"
            components={{
              Text: (
                <Text
                  color={Colors.dark}
                  margin={[0, 1, 0, 0]}
                  typo="xxl"
                  translationParams={{ value: "0.00" }}
                />
              ),
            }}
          />
          <Spacer times={4} />
          <Card _width="100%">
            <Text>submitTransaction.payMethod</Text>
            <Spacer times={0.5} />
            <Card
              padding={[2, 3]}
              borderColor={Colors.dark}
              borderWidth="2px"
              borderStyle="solid"
              curve={Curves.md}
            >
              <Text>paypal</Text>
            </Card>
            <Spacer times={0.5} />
            <Text>submitTransaction.payDate</Text>
            <Spacer times={0.5} />
            <Card padding={[2, 3]} bg={Colors.white} curve={Curves.md}>
              <Text>john doe</Text>
            </Card>
          </Card>
          <Card _width="100%">
            <Button />
            <Button
              text="yes"
              bg={Colors.orange}
              onPress={() => console.log("no pressed")}
            />
            <Spacer />
            <Button
              text="no"
              bg={Colors.success}
              onPress={() => console.log("yes pressed")}
            />
          </Card>
        </Card>
      </Card>
    </SafeAreaView>
  );
}
