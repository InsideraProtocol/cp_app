import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { InsiderProtocolHeader } from "../components/InsiderProtocolHeader/InsiderProtocolHeader";
import { TabBar } from "../components/TabBar/TabBar";

export type TabNavigatorParamsList = {
  [TabNavigatorStackRoutes.HOME]: undefined;
  [TabNavigatorStackRoutes.SAMPLE_ONE]: undefined;
  [TabNavigatorStackRoutes.SAMPLE_TWO]: undefined;
  [TabNavigatorStackRoutes.SAMPLE_THREE]: undefined;
  [TabNavigatorStackRoutes.SAMPLE_FOUR]: undefined;
};

export enum TabNavigatorStackRoutes {
  HOME = "HOME",
  SAMPLE_ONE = "SAMPLE_ONE",
  SAMPLE_TWO = "SAMPLE_TWO",
  SAMPLE_THREE = "SAMPLE_THREE",
  SAMPLE_FOUR = "SAMPLE_FOUR",
}

const TabNavigator = createBottomTabNavigator<TabNavigatorParamsList>();

export function TabNavigatorStack() {
  return (
    <TabNavigator.Navigator
      screenOptions={{
        header: () => <InsiderProtocolHeader />,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <TabNavigator.Screen
        name={TabNavigatorStackRoutes.HOME}
        component={HomeScreen}
      />
      <TabNavigator.Screen
        name={TabNavigatorStackRoutes.SAMPLE_ONE}
        component={HomeScreen}
      />
      <TabNavigator.Screen
        name={TabNavigatorStackRoutes.SAMPLE_TWO}
        component={HomeScreen}
      />
      <TabNavigator.Screen
        name={TabNavigatorStackRoutes.SAMPLE_THREE}
        component={HomeScreen}
      />
      <TabNavigator.Screen
        name={TabNavigatorStackRoutes.SAMPLE_FOUR}
        component={HomeScreen}
      />
    </TabNavigator.Navigator>
  );
}