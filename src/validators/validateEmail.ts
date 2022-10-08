import * as Yup from "yup";
import { validator } from "./validators";
import { yupResolver } from "@hookform/resolvers/yup";

export function validateEmail(value: string): boolean {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
}

export const emailFormSchema = Yup.object({
  email: validator.email(true),
});

export const emailFormValidator = yupResolver(emailFormSchema);
