import { createNavigationContainerRef } from "@react-navigation/native";
import { RootStackParamList } from "./rootNavigation";
import { AuthStackParamsList } from "./AuthStack";

export const navigationRef = createNavigationContainerRef<
  RootStackParamList & AuthStackParamsList
>();

export function navigate(name, params = {}) {
  if (navigationRef.isReady()) {
    // Perform navigation if the react navigation is ready to handle actions
    navigationRef.navigate(name, params);
  } else {
    // You can decide what to do if react navigation is not ready
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    // Perform navigation if the react navigation is ready to handle actions
    navigationRef.canGoBack() && navigationRef.goBack();
  } else {
    // You can decide what to do if react navigation is not ready
    // You can ignore this, or add these actions to a queue you can call later
  }
}
