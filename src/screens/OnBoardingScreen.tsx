import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Text } from "../components/Kit";
import { Colors } from "../stylesheet";

export function OnBoardingScreen() {
  return (
    <SafeAreaView>
      <Card>
        <Text color={Colors.blue}>hello</Text>
      </Card>
    </SafeAreaView>
  );
}
