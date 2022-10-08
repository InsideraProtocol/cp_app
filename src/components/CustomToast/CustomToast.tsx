import React from "react";

import { ToastProps } from "react-native-toast-notifications/lib/typescript/toast";
import { Card, Image, Spacer, Text } from "../Kit";
import { Colors, Curves } from "../../stylesheet";
import { AlertMode } from "../../utils/alert";

export type ToastContainerProps = {
  toastOptions: ToastProps;
  mode: AlertMode;
};

export function CustomToast(props: ToastContainerProps) {
  const { toastOptions, mode } = props;

  return (
    <Card
      _position="relative"
      _width="90%"
      _maxWidth="420px"
      _minHeight="64px"
      padding={[1, 2]}
      margin={[1, 0]}
      curve={Curves.md}
      bg={Colors[mode]}
      flexDirection="row"
    >
      {toastOptions.icon ? (
        <>
          <Image source={toastOptions.icon} _width="50px" _height="50px" />
          <Spacer times={1} />
        </>
      ) : null}
      <Card justifyContent="center" flex={1}>
        {toastOptions?.title ? (
          <Text color={Colors.dark} typo="sm" bold>
            {toastOptions.title}
          </Text>
        ) : null}
        {toastOptions?.title && toastOptions?.message ? (
          <Spacer times={0.5} />
        ) : null}
        {toastOptions.message ? (
          <Text color={Colors.dark} typo="sm" medium>
            {toastOptions.message}
          </Text>
        ) : null}
      </Card>
    </Card>
  );
}
