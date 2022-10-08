import React from 'react';
import {Text, TextProps} from './Text';

export type CenterTextProps = TextProps;

export function CenterText(props: CenterTextProps) {
  return <Text _textAlign="center" alignSelf="center" {...props} />;
}
