import React, { useCallback } from "react";
import {
  Button,
  Card,
  ControllerInput,
  SafeAreaView,
  Spacer,
  Text,
} from "../components/Kit";
import { useForm } from "react-hook-form";
import {
  GetDisputeFormType,
  getDisputeFormValidator,
} from "../validators/getDispute";
import { Colors, Curves } from "../stylesheet";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../navigation/RootNavigation";

export function GetDisputeFeedBackScreen() {
  const { control, formState } = useForm<GetDisputeFormType>({
    defaultValues: {
      method: "paypal",
      recipient: "",
      amount: "",
    },
    mode: "onChange",
    resolver: getDisputeFormValidator,
  });

  const navigation = useNavigation<any>();

  const handleNavigateToPastDispute = useCallback(() => {
    navigation.navigate(Routes.PAST_DISPUTES);
  }, []);

  return (
    <SafeAreaView flex={1}>
      <Card padding={[6, 4]}>
        <Text _textAlign="center" bold typo="title">
          getDisputeFeedBack.title
        </Text>
        <Spacer times={2} />
        <Card>
          <Text>getDisputeFeedBack.chooseMethod</Text>
          <Spacer times={0.5} />
          <ControllerInput<GetDisputeFormType>
            control={control}
            name="method"
            errors={formState.errors}
            padding={[2, 3]}
            bg={Colors.white}
            curve={Curves.md}
          />
        </Card>
        <Spacer times={2} />
        <Card>
          <Text>getDisputeFeedBack.recipientInfo</Text>
          <Spacer times={0.5} />
          <ControllerInput<GetDisputeFormType>
            control={control}
            name="recipient"
            placeholder="placeholders.emailEx"
            errors={formState.errors}
            padding={[2, 3]}
            bg={Colors.white}
            curve={Curves.md}
          />
        </Card>
        <Spacer times={2} />
        <Card>
          <Text>getDisputeFeedBack.amountPaid</Text>
          <Spacer times={0.5} />
          <ControllerInput<GetDisputeFormType>
            control={control}
            name="amount"
            errors={formState.errors}
            padding={[2, 3]}
            placeholder="placeholders.amount"
            bg={Colors.white}
            curve={Curves.md}
          />
        </Card>
        <Spacer />
        <Card>
          <Text _textAlign="center" bold>
            getDisputeFeedBack.details
          </Text>
          <Spacer times={4} />
          <Button
            text="getDisputeFeedBack.send"
            bg={Colors.dark}
            curve={Curves.sm}
            textProps={{ color: Colors.white }}
          />
          <Spacer />
          <Button
            onPress={handleNavigateToPastDispute}
            text="getDisputeFeedBack.seePrevRes"
            bg={Colors.gray300}
            curve={Curves.sm}
            textProps={{ color: Colors.white }}
          />
        </Card>
      </Card>
    </SafeAreaView>
  );
}
