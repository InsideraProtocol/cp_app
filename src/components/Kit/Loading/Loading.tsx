import React from 'react';

import {ContainerLoading} from './ContainerLoading';
import {CardProps} from '../Card';
import {ActivityIndicator, ActivityIndicatorProps} from '../ActivityIndicator';

export type LoadingProps = {
  loading: boolean;
  children?: any;
  containerProps?: CardProps;
  loadingSize?: ActivityIndicatorProps['size'];
  loadingColor?: ActivityIndicatorProps['color'];
  container?: boolean;
};

export function Loading(props: LoadingProps) {
  const {
    loading,
    children,
    containerProps,
    loadingSize,
    loadingColor,
    container,
  } = props;

  return (
    <ContainerLoading
      containerProps={containerProps}
      loading={loading}
      container={container}
    >
      {children}
      {loading ? (
        <ActivityIndicator
          color={loadingColor}
          size={container ? loadingSize || 'large' : undefined}
          _position="absolute"
          _right="0"
          _bottom="0"
          _left="0"
          _top="0"
        />
      ) : null}
    </ContainerLoading>
  );
}
