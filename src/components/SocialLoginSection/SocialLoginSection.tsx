import React from "react";
import { Card, Spacer, Text, TouchableOpacity } from "../Kit";
import { colors, Colors, Curves } from "../../stylesheet";
import Icon from "@expo/vector-icons/FontAwesome5";

export const socials = [
  {
    name: "google",
  },
  {
    name: "facebook",
    color: "#3b5998",
  },
  {
    name: "reddit",
    color: "#FF4301",
  },
  {
    name: "discord",
    color: "#5865F2",
  },
];

export function SocialLoginSection() {
  return (
    <Card>
      <Card flexDirection="row">
        {socials.map((social) => (
          <TouchableOpacity
            _width="40px"
            _height="40px"
            curve={Curves.circle}
            justifyContent="center"
            alignItems="center"
            bg={Colors.white}
            margin={[0, 2, 0, 0]}
            borderColor={Colors.gray200}
            borderWidth="1px"
            borderStyle="solid"
          >
            <Icon
              name={social.name}
              size={24}
              color={social.color || colors.dark}
            />
          </TouchableOpacity>
        ))}
      </Card>
      <Spacer />
      <Card flexDirection="row" alignItems="center" justifyContent="flex-end">
        <Icon name="caret-down" size={24} color={colors.gray100} />
        <Spacer times={0.5} />
        <Text _textAlign="right">auth.viewMore</Text>
      </Card>
    </Card>
  );
}
