import React from "react";
import { KeyboardAwareScrollView } from "../Kit/KeyboardAwareScrollView";
import { Button, Card, ControllerInput, Hr, Spacer, Text } from "../Kit";
import { useForm } from "react-hook-form";
import {
  emailFormValidator,
  validateEmail,
} from "../../validators/validateEmail";
import { Colors, Curves } from "../../stylesheet";

export type TEmailForm = {
  email: string;
};

export function LoginBy() {
  const emailForm = useForm<TEmailForm>({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
    resolver: emailFormValidator,
  });

  const handleSubmitEmail = emailForm.handleSubmit(({ email }) => {
    if (validateEmail(email)) {
      console.log("email is valid");
    }
  });

  return (
    <KeyboardAwareScrollView>
      <Card>
        <Card>
          <Text color={Colors.gray} typo="sm">
            auth.email
          </Text>
          <Spacer />
          <ControllerInput<TEmailForm>
            padding={[2, 3]}
            borderColor={Colors.white}
            borderWidth="1px"
            borderStyle="solid"
            name="email"
            control={emailForm.control}
            keyboardType="email-address"
            errors={emailForm.formState.errors}
            placeholder="placeholders.email"
          />
          <Spacer />
          <Button
            text="auth.withEmail"
            textProps={{
              color: !emailForm.formState.isValid
                ? Colors.gray100
                : Colors.dark,
            }}
            bg={Colors.screenBg}
            borderWidth="1px"
            borderColor={Colors.gray200}
            borderStyle="solid"
            curve={Curves.circle}
            disabled={!emailForm.formState.isValid}
          />
        </Card>
        <Hr />
        <Card>
          <Text color={Colors.gray} typo="sm">
            auth.external
          </Text>
          <Spacer />
          <Button
            text="auth.withEmail"
            bg={Colors.screenBg}
            borderWidth="1px"
            borderColor={Colors.gray200}
            borderStyle="solid"
            curve={Curves.circle}
          />
        </Card>
        <Spacer />
      </Card>
    </KeyboardAwareScrollView>
  );
}
