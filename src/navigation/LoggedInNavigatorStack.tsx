import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabNavigatorStack } from "./TabNavigatorStack";
import { ApproveTransactionScreen } from "../screens/ApproveTransactionScreen";
import { JoinFactRoomScreen } from "../screens/JoinFactRoomScreen";
import { SubmitTransactionScreen } from "../screens/SubmitTransactionScreen";
import { ClaimRewardsScreen } from "../screens/ClaimRewardsScreen";
import { ActionRequiredScreen } from "../screens/ActionRequiredScreen";

export type LoggedInStackParamsList = {
  [LoggedInStackRoutes.TAB_NAVIGATOR]: undefined;
  [LoggedInStackRoutes.APPROVE_TRANSACTION]: undefined;
  [LoggedInStackRoutes.JOIN_FACT_ROOMS]: undefined;
  [LoggedInStackRoutes.SUBMIT_TRANSACTION]: undefined;
  [LoggedInStackRoutes.CLAIM_REWARDS]: undefined;
  [LoggedInStackRoutes.ACTION_REQUIRED]: undefined;
};

export enum LoggedInStackRoutes {
  TAB_NAVIGATOR = "TAB_NAVIGATOR",
  APPROVE_TRANSACTION = "APPROVE_TRANSACTION",
  SUBMIT_TRANSACTION = "SUBMIT_TRANSACTION",
  JOIN_FACT_ROOMS = "JOIN_FACT_ROOMS",
  CLAIM_REWARDS = "CLAIM_REWARDS",
  ACTION_REQUIRED = "ACTION_REQUIRED",
}

const LoggedInStack = createNativeStackNavigator<LoggedInStackParamsList>();

export function LoggedInNavigator() {
  return (
    <LoggedInStack.Navigator screenOptions={{ headerShown: false }}>
      <LoggedInStack.Screen
        name={LoggedInStackRoutes.TAB_NAVIGATOR}
        component={TabNavigatorStack}
      />
      <LoggedInStack.Screen
        name={LoggedInStackRoutes.APPROVE_TRANSACTION}
        component={ApproveTransactionScreen}
      />
      <LoggedInStack.Screen
        name={LoggedInStackRoutes.SUBMIT_TRANSACTION}
        component={SubmitTransactionScreen}
      />
      <LoggedInStack.Screen
        name={LoggedInStackRoutes.JOIN_FACT_ROOMS}
        component={JoinFactRoomScreen}
      />
      <LoggedInStack.Screen
        name={LoggedInStackRoutes.CLAIM_REWARDS}
        component={ClaimRewardsScreen}
      />
      <LoggedInStack.Screen
        name={LoggedInStackRoutes.ACTION_REQUIRED}
        component={ActionRequiredScreen}
      />
    </LoggedInStack.Navigator>
  );
}
