import {
  ToastProps as RNToastProps,
  ToastOptions as RNToastOptions,
} from "react-native-toast-notifications/lib/typescript/toast";
import { AlertMode } from "../utils/alert";

declare module "react-native-toast-notifications/lib/typescript/toast" {
  interface ToastProps extends RNToastProps {
    title?: string;
    icon?: any;
  }
  interface ToastOptions extends RNToastOptions {
    title?: string;
    type?: AlertMode;
  }
}
