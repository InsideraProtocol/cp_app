import * as Yup from "yup";
import { validator } from "./validators";
import { yupResolver } from "@hookform/resolvers/yup";

export type AddPaymentFormType = {
  method: string;
  paymentInfo: string;
};

export const addPaymentSchema = Yup.object({
  method: validator.string(true),
  paymentInfo: validator.email(true),
});

export const addPaymentValidator = yupResolver(addPaymentSchema);
