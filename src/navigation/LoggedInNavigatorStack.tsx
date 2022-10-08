import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabNavigatorStack } from "./TabNavigatorStack";
import { ApproveTransactionScreen } from "../screens/ApproveTransactionScreen";

export type LoggedInStackParamsList = {
  [LoggedInStackRoutes.TAB_NAVIGATOR]: undefined;
  [LoggedInStackRoutes.APPROVE_TRANSACTION]: undefined;
};

export enum LoggedInStackRoutes {
  TAB_NAVIGATOR = "TAB_NAVIGATOR",
  APPROVE_TRANSACTION = "APPROVE_TRANSACTION",
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
    </AuthStack.Navigator>
  );
}
