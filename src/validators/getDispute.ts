import * as Yup from "yup";
import { validator } from "./validators";
import { yupResolver } from "@hookform/resolvers/yup";

export type GetDisputeFormType = {
  method: string;
  recipient: string;
  amount: string;
};

export const GetDisputeFormSchema = Yup.object({
  method: validator.string(true),
  recipient: validator.email(true),
  amount: validator.string(true),
});

export const getDisputeFormValidator = yupResolver(GetDisputeFormSchema);
