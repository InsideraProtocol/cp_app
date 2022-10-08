import React from "react";
import { Text, TouchableOpacity } from "../Kit";
import { useNavigation } from "@react-navigation/native";
import { useLanguage } from "../../redux/modules/language/language";
import { languageUtil } from "../../utils/language";
import { Colors } from "../../stylesheet";

export type BackIconProps = {
  close?: boolean;
  onBack?: () => void;
};

export function BackIcon(props: BackIconProps) {
  const { close, onBack } = props;
  const { canGoBack, goBack } = useNavigation();

  const { locale } = useLanguage();

  const handleBack = () => (onBack ? onBack() : canGoBack() && goBack());

  return (
    <TouchableOpacity
      onPress={handleBack}
      flex={1}
      alignItems="flex-start"
      justifyContent="center"
      alignSelf="stretch"
    >
      <Text>back</Text>
      {/*<Icomoon*/}
      {/*  name={*/}
      {/*    close*/}
      {/*      ? "close"*/}
      {/*      : `arrow-${languageUtil.isRTL(locale) ? "right" : "left"}`*/}
      {/*  }*/}
      {/*  size={close ? 20 : 24}*/}
      {/*  color={Colors.light}*/}
      {/*/>*/}
    </TouchableOpacity>
  );
}
