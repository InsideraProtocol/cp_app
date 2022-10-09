import React, { useState } from "react";
import {
  Card,
  SafeAreaView,
  ScrollView,
  Spacer,
  Text,
} from "../components/Kit";
import { GoBackHeader } from "../components/InsiderProtocolHeader/GoBackHeader";
import { AddPaymentInfo } from "../components/Forms/AddPaymentInfo";
import { ConfirmSend } from "../components/Forms/ConfirmSend";
import { Trans } from "react-i18next";
import { Colors } from "../stylesheet";
import { ConfirmReceive } from "../components/Forms/ConfirmReceive";

export function SubmitTransactionScreen() {
  const [state, setState] = useState<
    "addInfo" | "send" | "receive" | "insider"
  >("addInfo");

  const hasInsider = false;

  const renderElement = () => {
    switch (state) {
      case "addInfo": {
        return (
          <>
            <Card>
              <Text typo="lg" _textAlign="center" bold>
                submitTransaction.addYourInfo
              </Text>
            </Card>
            <Spacer times={4} />
            <Card>
              <AddPaymentInfo />
            </Card>
          </>
        );
      }
      case "send": {
        return (
          <>
            <Card>
              <Text typo="lg" _textAlign="center" bold>
                submitTransaction.needSend
              </Text>
              <Spacer times={2} />
              <Card
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
              >
                <Trans
                  i18nKey="usd"
                  components={{
                    Text: (
                      <Text
                        color={Colors.dark}
                        margin={[0, 1, 0, 0]}
                        typo="xxl"
                        translationParams={{ value: "0.00" }}
                      />
                    ),
                  }}
                />
              </Card>
            </Card>
            <Spacer times={4} />
            <Card>
              <ConfirmSend />
            </Card>
          </>
        );
      }
      case "receive": {
        return (
          <>
            <Card>
              <Text
                typo={hasInsider ? "xl" : "lg"}
                _textAlign="center"
                bold
                color={hasInsider ? Colors.gray : Colors.dark}
              >
                {hasInsider
                  ? "submitTransaction.insiderTold"
                  : "submitTransaction.didYouReceive"}
              </Text>
              <Spacer times={2} />
              <Card
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
              >
                <Trans
                  i18nKey="usd"
                  components={{
                    Text: (
                      <Text
                        color={Colors.dark}
                        margin={[0, 1, 0, 0]}
                        typo="xxl"
                        translationParams={{ value: "0.00" }}
                      />
                    ),
                  }}
                />
              </Card>
            </Card>
            <Spacer times={4} />
            <Card>
              <ConfirmReceive hasInsider={hasInsider} />
            </Card>
          </>
        );
      }
    }
  };

  return (
    <SafeAreaView>
      <GoBackHeader screenTitle="submitTransaction" />
      <ScrollView>
        <Card padding={[0, 4]}>{renderElement()}</Card>
      </ScrollView>
    </SafeAreaView>
  );
}
