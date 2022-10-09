import React from "react";
import {
  Button,
  Card,
  Image,
  ImageBackground,
  Spacer,
  Text,
} from "../components/Kit";
import { homePageBg } from "../assets/images";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { appIcon } from "../assets/icons";
import { Colors, Curves } from "../stylesheet";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../navigation/RootNavigation";

export function HomeScreen() {
  const { bottom, top } = useSafeAreaInsets();
  const navigation = useNavigation<any>();

  const handleConnectToWallet = () => {
    navigation.navigate(Routes.ON_BOARDING);
  };

  return (
    <ImageBackground
      style={{ paddingTop: top, paddingBottom: bottom }}
      source={homePageBg}
      flex={1}
    >
      <Card
        flexDirection="row"
        padding={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <Card flexDirection="row" alignItems="center">
          <Image source={appIcon} _width="24px" _height="24px" />
          <Spacer />
          <Text style={{ fontWeight: "700" }} typo="lg">
            insiderProtocol
          </Text>
        </Card>
        <Button
          onPress={handleConnectToWallet}
          bg={Colors.dark}
          text="Connect to wallet"
          curve={Curves.circle}
          textProps={{ color: Colors.light }}
        />
      </Card>
      <Spacer times={6} />
      <Card padding={[0, 4]} alignItems="flex-end">
        <Text style={{ fontWeight: "800" }} _textAlign="right" typo="xxl">
          {
            "Unstoppable Justice Protocol for Crypto\nRamps and P2P Exchange Disputes"
          }
        </Text>
        <Spacer />
        <Text>Powered by Real Insiders, Not APIs</Text>
        <Spacer times={2} />
        <Card flexDirection="row" justifyContent="center" alignItems="center">
          <Button
            _width="120px"
            bg={Colors.transparent}
            text="Join a Court"
            borderColor={Colors.dark}
            borderWidth="2px"
            borderStyle="solid"
            textProps={{ color: Colors.dark }}
          />
          <Spacer />
          <Button
            _width="120px"
            bg={Colors.dark}
            text="Add a Dispute"
            textProps={{ color: Colors.white }}
          />
        </Card>
      </Card>
    </ImageBackground>
  );
}
