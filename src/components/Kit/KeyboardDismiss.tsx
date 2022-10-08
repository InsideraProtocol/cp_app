import React, {useCallback} from 'react';
import {Keyboard} from 'react-native';
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from './TouchableWithoutFeedback';

interface KeyboardDismissProps extends TouchableWithoutFeedbackProps {
  noDismiss?: boolean;
}

export function KeyboardDismiss(props: KeyboardDismissProps) {
  const {noDismiss, ...restProps} = props;

  const handlePress = useCallback(() => {
    if (!noDismiss) {
      Keyboard.dismiss();
    }
  }, [noDismiss]);

  return (
    <TouchableWithoutFeedback flex={1} onPress={handlePress} {...restProps} />
  );
}
