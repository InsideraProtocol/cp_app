import React, { ReactElement } from "react";

import { Card } from "../Kit/Card";
import { Text } from "../Kit/Text";
import { Spacer } from "../Kit/Spacer";
import { Colors, Curves } from "../../stylesheet";

export type BadgeProps = {
  bg: Colors;
  text: string;
  iconName?: string;
  icon?: ReactElement;
  color?: Colors;
};

export function Badge(props: BadgeProps) {
  const { text, iconName, icon, bg, color = Colors.dark } = props;

  return (
    <Card
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      curve={Curves.sm}
      bg={bg}
      padding={[iconName || icon ? 0.25 : 0.5, 1]}
    >
      {/*{iconName ? <Icomoon name={iconName} size={16} color={color} /> : null}*/}
      {icon || null}
      {icon || iconName ? <Spacer times={0.25} /> : null}
      <Text medium typo="xTiny" color={color}>
        {text}
      </Text>
    </Card>
  );
}
