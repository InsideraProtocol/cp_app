import React from "react";
import { Card, Icon, Spacer, TouchableOpacity } from "../Kit";
import { Colors, Curves } from "../../stylesheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBarOptions = {
  PROFILE: {
    icon: "home",
  },
  SAMPLE_ONE: {
    icon: "list-ul",
  },
  SAMPLE_TWO: {
    icon: "plus-circle",
  },
  NOTIFICATION: {
    icon: "bell",
  },
  SAMPLE_FOUR: {
    icon: "user",
  },
};

export function TabBar({ state, descriptors, navigation }) {
  const { bottom } = useSafeAreaInsets();

  return (
    <Card
      flexDirection="row"
      bg={Colors.screenBg}
      _height={`${64 + (bottom || 0)}px`}
      alignItems="center"
      justifyContent="center"
      padding={[0, 0, bottom / 16, 0]}
      shadow
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: false } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            flex={1}
            justifyContent="center"
            alignItems="center"
            alignSelf="stretch"
          >
            <Icon
              name={tabBarOptions[route.name].icon}
              size={index === 2 ? 44 : 24}
              color={isFocused || index === 2 ? Colors.dark : Colors.gray}
            />
            <Spacer times={0.5} />
            {isFocused ? (
              <Card
                bg={Colors.dark}
                _width="4px"
                _height="4px"
                curve={Curves.circle}
              />
            ) : null}
          </TouchableOpacity>
        );
      })}
    </Card>
  );
}
