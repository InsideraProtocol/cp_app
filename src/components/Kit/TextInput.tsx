import React, { ForwardedRef, forwardRef } from "react";
import styled from "styled-components/native";
import {
  TextInput as RNTextInput,
  TextInputProps as NativeTextInputProps,
} from "react-native";
import {
  Colors,
  Curves,
  setAlignSelf,
  SetAlignSelf,
  setBackgroundColor,
  SetBackgroundColor,
  setBorder,
  SetBorder,
  setColor,
  SetColor,
  setFlex,
  SetFlex,
  SetRadius,
  setRadius,
  setShadow,
  SetShadow,
  setSpace,
  SetSpace,
  SetStyle,
  setStyle,
  SetTypography,
  setTypography,
} from "../../stylesheet";
import { useTranslation } from "react-i18next";
import { ErrorText } from "./ErrorText";
import { useThemeColors } from "../../redux/modules/theme/theme";
// import { Icomoon } from "@insiderProtocol/components/Kit/Icomoon";

export type IconProps = {
  iconName?: string;
  iconSize?: number;
};
export type TextInputProps = NativeTextInputProps &
  SetBackgroundColor &
  SetRadius &
  SetStyle &
  SetShadow &
  SetBorder &
  SetSpace &
  SetFlex &
  SetAlignSelf &
  SetColor &
  SetTypography &
  IconProps & {
    ref?: ForwardedRef<any>;
    error?: string;
  };

const StyledTextInput: React.FC<TextInputProps> = styled.TextInput<TextInputProps>`
  ${setBackgroundColor};
  ${setRadius};
  ${setBorder};
  ${setSpace};
  ${setFlex};
  ${setAlignSelf};
  ${setShadow};
  ${setStyle};
  ${setColor};
  ${setTypography};
`;

export const TextInput = forwardRef<RNTextInput, TextInputProps>(
  (props, ref) => {
    const {
      margin,
      padding,
      border,
      curve,
      iconName,
      color = Colors.primaryText,
      placeholder,
      locale,
      error,
      ...restProps
    } = props;

    const [themeColors] = useThemeColors();

    const { t, i18n } = useTranslation();

    return (
      <>
        {/*{iconName ? (*/}
        {/*  <Icomoon name="search" size={16} color={Colors.light} />*/}
        {/*) : null}*/}
        <StyledTextInput
          border={border}
          bg={Colors.gray900}
          curve={curve ?? Curves.circle}
          {...restProps}
          color={color}
          $margin={margin}
          $padding={padding ?? [1, 2]}
          placeholder={placeholder ? t(placeholder) : undefined}
          placeholderTextColor={themeColors.gray500}
          ref={ref}
          locale={locale || i18n.language}
          underlineColorAndroid="#ffffff00"
        />
        {error ? <ErrorText padding={[1, 0]} error={error} /> : null}
      </>
    );
  }
);
