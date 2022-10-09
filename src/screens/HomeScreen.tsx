import React, { useEffect, useState } from "react";
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
import { Dimensions } from "react-native";

export function HomeScreen() {
  const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        // @ts-ignore
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  }, []);

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
        <Card
          flexDirection={dimensions.screen.width > 767 ? "row" : "column"}
          alignItems="center"
        >
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
        <Text
          style={{ fontWeight: "800" }}
          _textAlign="right"
          typo={dimensions.screen.width > 1000 ? "xxl" : "xl"}
        >
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
            onPress={handleConnectToWallet}
          />
          <Spacer />
          <Button
            _width="120px"
            bg={Colors.dark}
            text="Add a Dispute"
            textProps={{ color: Colors.white }}
            onPress={handleConnectToWallet}
          />
        </Card>
      </Card>
    </ImageBackground>
  );
}
