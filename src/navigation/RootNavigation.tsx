import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoardingScreen } from "../screens/onBoarding/OnBoardingScreen";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { useThemeColors } from "../redux/modules/theme/theme";
import { navigationRef } from "./navigationRef";
import Toast from "react-native-toast-notifications";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CustomToast } from "../components/CustomToast/CustomToast";
import { AlertMode } from "../utils/alert";
import { languageUtil } from "../utils/language";
import { useLanguage } from "../redux/modules/language/language";
import { headerStyle } from "./headerStyle";
import { HeaderBackButton } from "../components/BackButton/HeaderBackButton";
import { useClientAuth } from "../redux/modules/auth/clientAuth";
import { AuthStackNavigator } from "./AuthStack";

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { AuthStackParamsList, AuthStackRoutes } from "./AuthStack";
import { TabNavigatorStackRoutes } from "./TabNavigatorStack";
import {
  LoggedInNavigator,
  LoggedInStackRoutes,
} from "./LoggedInNavigatorStack";
import { GetDisputeFeedBackScreen } from "../screens/GetDisputeFeedBackScreen";
import { PastDisputesScreen } from "../screens/PastDisputesScreen";
import { HomeScreen } from "../screens/HomeScreen";

const toastProviderProps = {
  placement: "bottom" as any,
  swipeEnabled: true,
  renderType: {
    normal: (toastOptions) => (
      <CustomToast toastOptions={toastOptions} mode={AlertMode.Info} />
    ),
    [AlertMode.Success]: (toastOptions) => (
      <CustomToast toastOptions={toastOptions} mode={AlertMode.Success} />
    ),
    [AlertMode.Warning]: (toastOptions) => (
      <CustomToast toastOptions={toastOptions} mode={AlertMode.Warning} />
    ),
    [AlertMode.Failure]: (toastOptions) => (
      <CustomToast toastOptions={toastOptions} mode={AlertMode.Failure} />
    ),
    [AlertMode.Error]: (toastOptions) => (
      <CustomToast toastOptions={toastOptions} mode={AlertMode.Error} />
    ),
    [AlertMode.Info]: (toastOptions) => (
      <CustomToast toastOptions={toastOptions} mode={AlertMode.Info} />
    ),
  },
};

export type RootStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.ON_BOARDING]: undefined;
  [Routes.AUTH_NAVIGATOR]: undefined;
  [Routes.LOGGED_IN_NAVIGATOR]: undefined;
  [Routes.GET_DISPUTE_FEEDBACK]: undefined;
  [Routes.PAST_DISPUTES]: undefined;
};

export enum Routes {
  HOME = "HOME",
  ON_BOARDING = "ON_BOARDING",
  AUTH_NAVIGATOR = "AUTH_NAVIGATOR",
  LOGGED_IN_NAVIGATOR = "LOGGED_IN_NAVIGATOR",
  GET_DISPUTE_FEEDBACK = "GET_DISPUTE_FEEDBACK",
  PAST_DISPUTES = "PAST_DISPUTES",
}

const linking: LinkingOptions<RootStackParamList & AuthStackParamsList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      [Routes.HOME]: "/home",
      [Routes.ON_BOARDING]: "on-boarding",
      [Routes.PAST_DISPUTES]: "past-disputes",
      [Routes.GET_DISPUTE_FEEDBACK]: "get-dispute-feedback",
      [Routes.AUTH_NAVIGATOR]: {
        path: "auth",
        screens: {
          [AuthStackRoutes.PROVIDERS]: "/providers",
          [AuthStackRoutes.LOGIN]: "/login",
          [AuthStackRoutes.SIGN_UP]: "/signup",
        },
      },
      [Routes.LOGGED_IN_NAVIGATOR]: {
        path: "/",
        screens: {
          [LoggedInStackRoutes.APPROVE_TRANSACTION]: "/approve-transaction",
          [LoggedInStackRoutes.SUBMIT_TRANSACTION]: "/submit-transaction",
          [LoggedInStackRoutes.JOIN_FACT_ROOMS]: "/join-fact-rooms",
          [LoggedInStackRoutes.CLAIM_REWARDS]: "/claim-rewards",
          [LoggedInStackRoutes.ACTION_REQUIRED]: "/action-required",
          [LoggedInStackRoutes.TAB_NAVIGATOR]: {
            path: "/",
            screens: {
              [TabNavigatorStackRoutes.PROFILE]: "/profile",
              [TabNavigatorStackRoutes.SAMPLE_ONE]: "/one",
              [TabNavigatorStackRoutes.SAMPLE_TWO]: "/two",
              [TabNavigatorStackRoutes.NOTIFICATION]: "/notifications",
              [TabNavigatorStackRoutes.SAMPLE_FOUR]: "/four",
            },
          },
        },
      },
    },
  },
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigation() {
  const { onboarded, loggedIn } = useClientAuth();

  const { bottom } = useSafeAreaInsets();
  const [theme, name] = useThemeColors();
  const { locale } = useLanguage();

  return (
    <>
      <Toast
        ref={(ref) => (global.toast = ref)}
        offsetBottom={bottom}
        {...toastProviderProps}
      />
      <NavigationContainer
        linking={linking}
        ref={navigationRef}
        theme={DefaultTheme}
      >
        <Stack.Navigator
          screenOptions={({ navigation }) => {
            const isRTL = languageUtil.isRTL(locale);

            return {
              ...headerStyle(theme, name),
              gestureDirection: isRTL ? "horizontal-inverted" : "horizontal",
              headerLeft:
                !isRTL && navigation.canGoBack()
                  ? () => <HeaderBackButton onPress={navigation.goBack} />
                  : undefined,

              headerRight:
                isRTL && navigation.canGoBack()
                  ? () => <HeaderBackButton onPress={navigation.goBack} />
                  : undefined,
              animationEnabled: true,
              headerShown: false,
            };
          }}
        >
          <Stack.Screen name={Routes.HOME} component={HomeScreen} />
          {!onboarded ? (
            <>
              <Stack.Screen
                name={Routes.ON_BOARDING}
                component={OnBoardingScreen}
              />
            </>
          ) : null}
          {!loggedIn ? (
            <Stack.Screen
              name={Routes.AUTH_NAVIGATOR}
              component={AuthStackNavigator}
            />
          ) : (
            <Stack.Screen
              name={Routes.LOGGED_IN_NAVIGATOR}
              component={LoggedInNavigator}
            />
          )}
          <Stack.Screen
            name={Routes.GET_DISPUTE_FEEDBACK}
            component={GetDisputeFeedBackScreen}
          />
          <Stack.Screen
            name={Routes.PAST_DISPUTES}
            component={PastDisputesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
