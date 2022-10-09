import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabNavigatorStack } from "./TabNavigatorStack";
import { ApproveTransactionScreen } from "../screens/ApproveTransactionScreen";
import { JoinFactRoomScreen } from "../screens/JoinFactRoomScreen";
import { SubmitTransactionScreen } from "../screens/SubmitTransactionScreen";

export type LoggedInStackParamsList = {
  [LoggedInStackRoutes.TAB_NAVIGATOR]: undefined;
  [LoggedInStackRoutes.APPROVE_TRANSACTION]: undefined;
  [LoggedInStackRoutes.JOIN_FACT_ROOMS]: undefined;
  [LoggedInStackRoutes.SUBMIT_TRANSACTION]: undefined;
};

export enum LoggedInStackRoutes {
  TAB_NAVIGATOR = "TAB_NAVIGATOR",
  APPROVE_TRANSACTION = "APPROVE_TRANSACTION",
  SUBMIT_TRANSACTION = "SUBMIT_TRANSACTION",
  JOIN_FACT_ROOMS = "JOIN_FACT_ROOMS",
}

const AuthStack = createNativeStackNavigator<LoggedInStackParamsList>();

export function LoggedInNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        name={LoggedInStackRoutes.TAB_NAVIGATOR}
        component={TabNavigatorStack}
      />
      <AuthStack.Screen
        name={LoggedInStackRoutes.APPROVE_TRANSACTION}
        component={ApproveTransactionScreen}
      />
      <AuthStack.Screen
        name={LoggedInStackRoutes.SUBMIT_TRANSACTION}
        component={SubmitTransactionScreen}
      />
      <AuthStack.Screen
        name={LoggedInStackRoutes.JOIN_FACT_ROOMS}
        component={JoinFactRoomScreen}
      />
    </AuthStack.Navigator>
  );
}
