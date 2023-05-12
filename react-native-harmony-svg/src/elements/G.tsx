import type {ReactNode} from 'react';
import React from 'react';
import extractProps, {
  propsAndStyles,
} from 'react-native-svg/src/lib/extract/extractProps';
import {extractFont} from 'react-native-svg/src/lib/extract/extractText';
import extractTransform from 'react-native-svg/src/lib/extract/extractTransform';
import type {
  CommonPathProps,
  FontProps,
  NumberProp,
  TransformProps,
} from 'react-native-svg/src/lib/extract/types';
import Shape from './Shape';
import RNSVGGroup from '../fabric/GroupNativeComponent';
import type {NativeMethods} from 'react-native';

export interface GProps extends CommonPathProps, FontProps {
  children?: ReactNode;
  opacity?: NumberProp;
}

export default class G<P> extends Shape<GProps & P> {
  static displayName = 'G';

  setNativeProps = (
    props: Object & {
      matrix?: number[];
    } & TransformProps,
  ) => {
    const matrix = !props.matrix && extractTransform(props);
    if (matrix) {
      props.matrix = matrix;
    }
    this.root?.setNativeProps(props);
  };

  render() {
    const {props} = this;
    const prop = propsAndStyles(props);
    const extractedProps = extractProps(prop, this);
    const font = extractFont(prop);
    if (hasProps(font)) {
      extractedProps.font = font;
    }
    return (
      <RNSVGGroup
        ref={(ref: any) => this.refMethod(ref as (G<P> & NativeMethods) | null)}
        {...extractedProps}>
        {props.children}
      </RNSVGGroup>
    );
  }
}

const hasProps = (obj: {}) => {
  for (let _ in obj) {
    return true;
  }
  return false;
};