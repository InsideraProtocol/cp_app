import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen } from "../screens/auth/LoginScreen";
import { ProvidersScreen } from "../screens/auth/ProvidersScreen";

export type AuthStackParamsList = {
  [AuthStackRoutes.PROVIDERS]: undefined;
  [AuthStackRoutes.LOGIN]: undefined;
  [AuthStackRoutes.SIGN_UP]: undefined;
};

export enum AuthStackRoutes {
  PROVIDERS = "PROVIDERS",
  LOGIN = "LOGIN",
  SIGN_UP = "SIGN_UP",
}

const AuthStack = createNativeStackNavigator<AuthStackParamsList>();

export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        name={AuthStackRoutes.PROVIDERS}
        component={ProvidersScreen}
      />
      <AuthStack.Screen name={AuthStackRoutes.LOGIN} component={LoginScreen} />
      <AuthStack.Screen
        name={AuthStackRoutes.SIGN_UP}
        component={LoginScreen}
      />
    </AuthStack.Navigator>
  );
}
