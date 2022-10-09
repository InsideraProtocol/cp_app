import React from "react";
import { Card, Hr, SafeAreaView, Spacer, Text } from "../../components/Kit";
import { Colors } from "../../stylesheet";
import { LoginBy } from "../../components/Forms/LoginBy";
import { SocialLoginSection } from "../../components/SocialLoginSection/SocialLoginSection";

export function LoginScreen() {
  return (
    <SafeAreaView flex={1}>
      <Card>
        <Card padding={[0, 0]}>
          <Card
            bg={Colors.white}
            flexDirection="row"
            alignItems="center"
            padding={4}
            shadow
          >
            <Text>image</Text>
            <Spacer />
            <Card>
              <Text typo="xl" bold>
                auth.signIn
              </Text>
              <Text typo="xs" color={Colors.gray}>
                auth.select
              </Text>
            </Card>
          </Card>
          <Card padding={[0, 4]} bg={Colors.light} alignItems="center">
            <Card _width="360px">
              <Spacer times={2} />
              <SocialLoginSection />
              <Hr />
              <LoginBy />
            </Card>
          </Card>
        </Card>
        <Card padding={[2, 4]} _width="100%" bg={Colors.white}>
          <Card
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>terms</Text>
            <Text>securedBy</Text>
          </Card>
        </Card>
      </Card>
    </SafeAreaView>
  );
}
