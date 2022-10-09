import React from "react";
import { Card, Spacer, Text } from "../Kit";
import { Colors, Curves } from "../../stylesheet";
import { shortenedString } from "../../utils/shortenedString";

export type FactRoomsProps = {
  factRooms: {
    id: string;
    name: string;
    witnesses: string;
    rewards: string;
    recipient?: string;
    status: string;
  }[];
  prev?: boolean;
};

export function FactRooms(props: FactRoomsProps) {
  const { factRooms, prev } = props;

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
              {prev ? (
                <Text
                  translationParams={{
                    recipient: shortenedString(room.recipient, 16, 4),
                  }}
                  color={Colors.gray}
                >
                  joinFactScreen.recipient
                </Text>
              ) : (
                <Text
                  translationParams={{
                    rewards: room.rewards,
                  }}
                  color={Colors.gray}
                >
                  joinFactScreen.rewards
                </Text>
              )}
            </Card>
            {prev ? (
              <Text typo="lg">{`joinFactScreen.${room.status}`}</Text>
            ) : (
              <Text typo="lg" translationParams={{ rewards: room.rewards }}>
                joinFactScreen.rewards
              </Text>
            )}
          </Card>
        ))
      ) : (
        <></>
      )}
    </Card>
  );
}
