import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import { RootNavigation } from "./src/navigation/RootNavigation";
import { AppLoading, ThemeProvider } from "./src/components/Kit";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { I18nextProvider } from "react-i18next";
import { i18next } from "./src/localization";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={<AppLoading />}>
            <I18nextProvider i18n={i18next}>
              <ThemeProvider>
                <RootNavigation />
                <StatusBar />
              </ThemeProvider>
            </I18nextProvider>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
