/**
 * @format
 */
import { registerRootComponent } from "expo";

import "react-native-gesture-handler";
import { I18nManager, LogBox } from "react-native";
import App from "./App";
import { expo } from "./app.json";
const { name: appName } = expo;

I18nManager.allowRTL(false);

LogBox.ignoreLogs([
  "deprecated-react-native-prop-types",
  "Received data was not a string",
]);

registerRootComponent(App);
