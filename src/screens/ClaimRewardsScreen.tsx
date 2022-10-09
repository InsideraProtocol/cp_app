import React from "react";
import { Button, Card, SafeAreaView, Spacer, Text } from "../components/Kit";
import { Trans } from "react-i18next";
import { Colors } from "../stylesheet";
import { GoBackHeader } from "../components/InsiderProtocolHeader/GoBackHeader";

export function ClaimRewardsScreen() {
  return (
    <SafeAreaView flex={1}>
      <GoBackHeader screenTitle="claimRewards" />
      <Card flex={1} padding={[0, 4]}>
        <Card flex={1} justifyContent="center" alignItems="center">
          <Text typo="title">claimRewardsScreen.claim</Text>
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
          <Spacer />
        </Card>
        <Button
          _width="100%"
          text="claimRewardsScreen.claimBtn"
          bg={Colors.dark}
          textProps={{ color: Colors.white }}
        />
        <Spacer times={4} />
      </Card>
    </SafeAreaView>
  );
}
