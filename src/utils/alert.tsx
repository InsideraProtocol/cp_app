import { Alert, AlertButton, AlertOptions } from "react-native";
import { isWeb } from "./web";
import { ToastOptions } from "react-native-toast-notifications/lib/typescript/toast";

export function asyncAlert(
  title: string,
  message: string,
  resolveButton: AlertButton,
  rejectButton?: AlertButton,
  reverse?: boolean
) {
  return new Promise((resolve, reject) => {
    let buttons: AlertButton[] = [
      {
        text: rejectButton?.text || "Cancel",
        onPress: reject,
        style: rejectButton?.style,
      },
      {
        text: resolveButton?.text || "OK",
        onPress: resolve,
        style: resolveButton?.style,
      },
    ];
    if (reverse) {
      buttons = buttons.reverse();
    }
    Alert.alert(title, message, buttons);
  });
}

export type AlertBasicOptions = {
  message: string;
  mode?: AlertMode;
};
export type ShowAlertOptions = AlertBasicOptions & {
  title?: string;
  buttons?: AlertButton[];
  alertOptions?: AlertOptions;
  toastOptions?: ToastOptions;
};

export enum AlertMode {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error",
  Failure = "failure",
}

export function showAlert(options: ShowAlertOptions) {
  const {
    message,
    title,
    mode = AlertMode.Info,
    buttons,
    alertOptions,
    toastOptions,
  } = options;

  if (isWeb()) {
    toast?.show(message, {
      type: mode,
      title,
      ...toastOptions,
    });
  } else {
    Alert.alert(
      title || message,
      title ? message : undefined,
      buttons,
      alertOptions
    );
  }
}

export function showSagaAlert(options: ShowAlertOptions) {
  const { message, title, buttons, alertOptions, mode } = options;

  return new Promise((resolve, reject) => {
    if (isWeb()) {
      showAlert({
        title,
        message,
        alertOptions: alertOptions ?? { cancelable: false },
        mode,
      });
      resolve("ok");
      return;
    }
    const _buttons = buttons
      ? buttons.map((button, i) => ({
          text: button.text,
          onPress: () => {
            if (i === 0) {
              resolve("ok");
            } else {
              reject();
            }
          },
        }))
      : [
          {
            text: "OK",
            onPress: () => {
              resolve("ok");
            },
          },
          {
            text: "Cancel",
            onPress: () => {
              reject();
            },
          },
        ];
    showAlert({
      title,
      message,
      buttons: _buttons,
      alertOptions: alertOptions ?? { cancelable: false },
      mode,
    });
  });
}
