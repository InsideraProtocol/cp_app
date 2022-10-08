import React, { useMemo } from "react";
import { TextProps as NativeTextProps } from "react-native";
import styled from "styled-components/native";
import { useTranslation } from "react-i18next";

import {
  setBackgroundColor,
  SetBackgroundColor,
  setColor,
  SetColor,
  setShadow,
  SetShadow,
  SetStyle,
  setStyle,
  setTypography,
  SetTypography,
  setRadius,
  SetRadius,
  setSpace,
  SetSpace,
  setAlignItems,
  SetAlignItems,
  setAlignSelf,
  SetAlignSelf,
  setFlex,
  SetFlex,
  setFlexDirection,
  SetFlexDirection,
  setJustifyContent,
  SetJustifyContent,
  Colors,
} from "../../stylesheet";
import { toLocalStringRegex } from "../../validators/regex";
import {
  setLanguageDirection,
  SetLanguageDirection,
} from "../../utils/language";

export type TextProps = NativeTextProps & {
  children?: string | number | any;
  translate?: boolean;
  localeString?: boolean | any;
  enNumeric?: boolean;
  translationParams?: { [key: string]: any };
  toUpperCase?: boolean;
} & SetBackgroundColor &
  SetColor &
  SetShadow &
  SetTypography &
  SetSpace &
  SetStyle &
  SetFlex &
  SetAlignSelf &
  SetAlignItems &
  SetJustifyContent &
  SetRadius &
  SetFlexDirection &
  SetLanguageDirection;

const StyledText: React.FunctionComponent<TextProps> = styled.Text<TextProps>`
  ${setColor};
  ${setBackgroundColor};
  ${setShadow};
  ${setTypography};
  ${setSpace};
  ${setFlex};
  ${setAlignItems};
  ${setAlignSelf};
  ${setJustifyContent};
  ${setRadius};
  ${setFlexDirection};
  ${setLanguageDirection};
  ${setStyle};
`;

export function Text(props: TextProps) {
  const {
    children = "",
    translate = true,
    margin,
    padding,
    localeString = false,
    color = Colors.dark,
    translationParams,
    toUpperCase,
    ...restProps
  } = props;

  const { i18n, t } = useTranslation();

  const locale = i18n.language;

  const text = useMemo(() => {
    let _text = translate
      ? t(children?.toString(), translationParams)
      : children;
    if (localeString) {
      _text = _text.replace(toLocalStringRegex, ",");
    }
    if (toUpperCase) {
      _text = _text.toUpperCase();
    }
    return _text;
  }, [children, localeString, t, toUpperCase, translate, translationParams]);

  return (
    <StyledText
      {...restProps}
      locale={locale}
      $margin={margin}
      $padding={padding}
      localeString={localeString}
      color={color}
    >
      {text}
    </StyledText>
  );
}
