import * as Yup from "yup";
import { validator } from "./validators";
import { yupResolver } from "@hookform/resolvers/yup";

export type ConfirmSendFormType = {
  method: string;
  recipientInfo: string;
};

export const ConfirmSendFormSchema = Yup.object({
  method: validator.string(true),
  recipientInfo: validator.email(true),
});

export const confirmSendFormValidator = yupResolver(ConfirmSendFormSchema);
