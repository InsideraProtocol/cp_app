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
import { useNavigation } from "@react-navigation/native";
import { LoggedInStackRoutes } from "../../navigation/LoggedInNavigatorStack";

export function AddPaymentInfo() {
  const { control, handleSubmit, formState } = useForm<AddPaymentFormType>({
    defaultValues: {
      method: "Paypal",
      paymentInfo: "",
    },
    mode: "onChange",
    resolver: addPaymentValidator,
  });

  const navigation = useNavigation<any>();

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
        <Text>submitTransaction.payInfo</Text>
        <Spacer />
        <ControllerInput
          control={control}
          name="paymentInfo"
          errors={formState.errors}
          padding={[2, 3]}
          bg={Colors.white}
          borderColor={Colors.white}
          borderWidth="1px"
          borderStyle="solid"
          placeholder="placeholders.emailEx"
          curve={Curves.md}
        />
      </Card>
      <Spacer times={4} />
      <Text _textAlign="center" typo="xs" bold>
        submitTransaction.details
      </Text>
      <Spacer times={4} />
      <Button
        onPress={() => navigation.navigate(LoggedInStackRoutes.TAB_NAVIGATOR)}
        text="submitTransaction.confirm"
        bg={Colors.dark}
        textProps={{ color: Colors.white, typo: "sm" }}
      />
    </Card>
  );
}
