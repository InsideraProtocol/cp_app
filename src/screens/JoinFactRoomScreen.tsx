import React from "react";
import {
  Card,
  SafeAreaView,
  ScrollView,
  Spacer,
  Text,
  TouchableOpacity,
} from "../components/Kit";
import { GoBackHeader } from "../components/InsiderProtocolHeader/GoBackHeader";
import { FactRooms } from "../components/FactRooms/FactRooms";
import { colors, Colors, Curves } from "../stylesheet";
import { useNavigation } from "@react-navigation/native";
import { AuthStackRoutes } from "../navigation/AuthStack";
import {
  LoggedInNavigator,
  LoggedInStackRoutes,
} from "../navigation/LoggedInNavigatorStack";

export const factRooms = [
  {
    id: "1",
    name: "Paypal",
    witnesses: "1/4",
    rewards: "120",
    recipient: "aardsfsdfsafdsfasdfasdfsadfsdf",
    status: "paid",
  },
  {
    id: "2",
    name: "Paypal",
    witnesses: "2/4",
    rewards: "110",
    recipient: "aardsfsdfsafdsfdsfasfasfadsf",
    status: "paid",
  },
  {
    id: "3",
    name: "Paypal",
    witnesses: "1/4",
    rewards: "150",
    recipient: "aardsfsdfsafasfasfdsfdasffs",
    status: "notPaid",
  },
];

export function JoinFactRoomScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView flex={1}>
      <GoBackHeader screenTitle="joinFact" />
      <ScrollView>
        <Card padding={[0, 4]}>
          <Text typo="xl" bold _textAlign="center">
            joinFactScreen.title
          </Text>
          <Spacer times={2} />
          <Card>
            <FactRooms factRooms={factRooms} />
          </Card>
          <Card
            border={`2px solid ${colors.dark}`}
            curve={Curves.md}
            padding={[2, 0]}
            alignItems="center"
          >
            <Text typo="md" bold>
              joinFactScreen.areYouFintech
            </Text>
            <Spacer times={0.5} />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(LoggedInStackRoutes.TAB_NAVIGATOR)
              }
            >
              <Text color={Colors.blue} bold typo="sm">
                joinFactScreen.createRoom
              </Text>
            </TouchableOpacity>
          </Card>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
