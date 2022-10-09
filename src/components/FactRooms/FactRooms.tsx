import React from "react";
import { Card, Spacer, Text } from "../Kit";
import { Colors, Curves } from "../../stylesheet";

export type FactRoomsProps = {
  factRooms: {
    id: string;
    name: string;
    witnesses: string;
    rewards: string;
  }[];
};

export function FactRooms(props: FactRoomsProps) {
  const { factRooms } = props;

  return (
    <Card>
      {factRooms && factRooms.length > 0 ? (
        factRooms.map((room) => (
          <Card
            key={room.id}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            padding={[2, 3]}
            bg={Colors.white}
            margin={[0, 0, 4, 0]}
            curve={Curves.md}
          >
            <Card>
              <Text typo="lg" bold>
                {room.name}
              </Text>
              <Spacer times={0.5} />
              <Text
                translationParams={{ witnesses: room.witnesses }}
                color={Colors.gray}
              >
                joinFactScreen.witnesses
              </Text>
            </Card>
            <Text typo="lg" translationParams={{ rewards: room.rewards }}>
              joinFactScreen.rewards
            </Text>
          </Card>
        ))
      ) : (
        <></>
      )}
    </Card>
  );
}
