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

export function ConfirmSend() {
  const { control, handleSubmit, formState } = useForm<ConfirmSendFormType>({
    defaultValues: {
      method: "Paypal",
      recipientInfo: "john@doe.com",
    },
    mode: "onChange",
    resolver: confirmSendFormValidator,
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
        <Text>submitTransaction.recipient</Text>
        <Spacer />
        <ControllerInput
          control={control}
          name="recipientInfo"
          errors={formState.errors}
          padding={[2, 3]}
          bg={Colors.white}
          borderColor={Colors.white}
          borderWidth="1px"
          borderStyle="solid"
          placeholder="placeholders.emailEx"
          curve={Curves.md}
          disabled={true}
        />
      </Card>
      <Spacer times={4} />
      <Button
        text="submitTransaction.confirmAfterSending"
        bg={Colors.dark}
        textProps={{ color: Colors.white, typo: "sm" }}
      />
    </Card>
  );
}
