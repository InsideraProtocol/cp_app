import React, { useCallback } from "react";
import {
  Button,
  Card,
  SafeAreaView,
  ScrollView,
  Spacer,
} from "../../components/Kit";
import { colors, Colors, Curves } from "../../stylesheet";
import { OnBoardingSlider } from "./components/OnBoardingSlider";
import { useClientAuth } from "../../redux/modules/auth/clientAuth";
import { InsiderProtocolHeader } from "../../components/InsiderProtocolHeader/InsiderProtocolHeader";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../navigation/RootNavigation";

export function OnBoardingScreen() {
  const { dispatchOnboarded } = useClientAuth();
  const navigation = useNavigation<any>();

  const handleLogin = useCallback(() => {
    navigation.navigate(Routes.AUTH_NAVIGATOR);
  }, []);

  return (
    <SafeAreaView flex={1} bg={Colors.screenBg}>
      <InsiderProtocolHeader />
      <ScrollView>
        <OnBoardingSlider />
        <Spacer times={4} />
        <Card padding={[1, 4]}>
          <Button
            bg={Colors.dark}
            textProps={{ color: Colors.light }}
            text="onBoarding.login"
            curve={Curves.sm}
            onPress={handleLogin}
          />
          <Spacer />
          <Button
            curve={Curves.sm}
            border
            text="onBoarding.signup"
            onPress={handleLogin}
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
