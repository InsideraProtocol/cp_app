import * as Yup from "yup";
import { validator } from "./validators";
import { yupResolver } from "@hookform/resolvers/yup";

export type ConfirmReceiveFormType = {
  method: string;
  date: string;
};

export const confirmReceiveSchema = Yup.object({
  method: validator.string(true),
  date: validator.string(),
});

export const confirmReceiveValidator = yupResolver(confirmReceiveSchema);
