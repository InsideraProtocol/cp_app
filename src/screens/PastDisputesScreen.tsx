import React from "react";
import {
  Card,
  SafeAreaView,
  Spacer,
  Text,
  TouchableOpacity,
} from "../components/Kit";
import { GoBackHeader } from "../components/InsiderProtocolHeader/GoBackHeader";
import { FactRooms } from "../components/FactRooms/FactRooms";
import { factRooms } from "./JoinFactRoomScreen";
import { Colors, colors, Curves } from "../stylesheet";

export function PastDisputesScreen() {
  return (
    <SafeAreaView>
      <GoBackHeader screenTitle="joinFact" />
      <Card padding={[0, 4]}>
        <Text typo="lg" _textAlign="center">
          pasDisputesScreen.title
        </Text>
        <Spacer times={4} />
        <FactRooms factRooms={factRooms} prev />
        <Spacer times={4} />
        <Card
          border={`2px solid ${colors.dark}`}
          curve={Curves.md}
          padding={[2, 0]}
          alignItems="center"
        >
          <Text typo="md" bold>
            pasDisputesScreen.haveAny
          </Text>
          <Spacer times={0.5} />
          <TouchableOpacity>
            <Text color={Colors.blue} bold typo="sm">
              pasDisputesScreen.feedback
            </Text>
          </TouchableOpacity>
        </Card>
      </Card>
    </SafeAreaView>
  );
}
