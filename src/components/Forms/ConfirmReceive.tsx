import React from "react";
import {
  Button,
  Card,
  ControllerInput,
  KeyboardDismiss,
  Spacer,
  Text,
} from "../Kit";
import { useForm } from "react-hook-form";
import {
  AddPaymentFormType,
  addPaymentValidator,
} from "../../validators/addPaymentInfo";
import { Colors, Curves } from "../../stylesheet";
import {
  ConfirmSendFormType,
  confirmSendFormValidator,
} from "../../validators/confirmSend";
import {
  ConfirmReceiveFormType,
  confirmReceiveValidator,
} from "../../validators/confirmReceive";

export type ConfirmReceiveProps = {
  hasInsider?: boolean;
};

export function ConfirmReceive(props: ConfirmReceiveProps) {
  const { hasInsider } = props;

  const { control, handleSubmit, formState } = useForm<ConfirmReceiveFormType>({
    defaultValues: {
      method: "Paypal",
      date: "",
    },
    mode: "onChange",
    resolver: confirmReceiveValidator,
  });

  return (
    <Card>
      <Card>
        <Text>submitTransaction.payMethod</Text>
        <Spacer />
        <ControllerInput
          control={control}
          name="method"
          errors={formState.errors}
          disabled={true}
          padding={[2, 3]}
          borderColor={Colors.dark}
          borderWidth="2px"
          borderStyle="solid"
          curve={Curves.md}
        />
      </Card>
      <Spacer />
      <Card>
        <Text>submitTransaction.payDate</Text>
        <Spacer />
        <ControllerInput
          control={control}
          name="date"
          errors={formState.errors}
          padding={[2, 3]}
          bg={Colors.white}
          borderColor={Colors.white}
          borderWidth="1px"
          borderStyle="solid"
          placeholder="placeholders.date"
          curve={Curves.md}
        />
      </Card>
      <Spacer times={4} />
      <Button
        text="confirm"
        bg={Colors.dark}
        textProps={{ color: Colors.white, typo: "sm" }}
      />
      {hasInsider ? (
        <Button
          text="skip"
          bg={Colors.screenBg}
          textProps={{ color: Colors.dark, typo: "sm" }}
        />
      ) : null}
    </Card>
  );
}
