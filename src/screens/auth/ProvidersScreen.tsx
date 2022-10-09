import React, { useCallback } from "react";
import { Button, Card, SafeAreaView, Spacer } from "../../components/Kit";
import { Curves } from "../../stylesheet";
import { useNavigation } from "@react-navigation/native";
import { AuthStackRoutes } from "../../navigation/AuthStack";

export function ProvidersScreen() {
  const navigation = useNavigation<any>();

  const handleNavigateToLogin = useCallback(() => {
    navigation.navigate(AuthStackRoutes.LOGIN);
  }, []);

  return (
    <SafeAreaView flex={1}>
      <Card
        flex={1}
        justifyContent="center"
        alignItems="center"
        padding={[0, 4]}
      >
        <Button
          text="providersScreen.withEmail"
          _width="100%"
          padding={[2, 0]}
          border
          curve={Curves.sm}
          onPress={handleNavigateToLogin}
        />
        <Spacer />
        <Button
          text="providersScreen.withWallet"
          _width="100%"
          padding={[2, 0]}
          border
          curve={Curves.sm}
          onPress={handleNavigateToLogin}
        />
      </Card>
    </SafeAreaView>
  );
}
