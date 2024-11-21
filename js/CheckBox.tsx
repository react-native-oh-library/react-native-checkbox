/**
 * MIT License
 *
 * Copyright (C) 2021 Huawei Device Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANT KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
'use strict';

import nullthrows from 'nullthrows';
import React from 'react';
import {
  StyleSheet,
  processColor,
  ViewProps,
  NativeMethods,
  NativeSyntheticEvent,
} from 'react-native';
import setAndForwardRef from '@react-native-community/checkbox/dist/setAndForwardRef';
import CheckBoxNativeComponent from './RNCCheckboxNativeComponent';

type CheckBoxEvent = NativeSyntheticEvent<
  Readonly<{
    target: number;
    value: boolean;
  }>
>;

type CommonProps = Readonly<
  ViewProps & {
    /**
     * Used in case the props change removes the component.
     */
    onChange?: (event: CheckBoxEvent) => void;

    /**
     * Invoked with the new value when the value changes.
     */
    onValueChange?: (value: boolean) => void;

    /**
     * If true the user won't be able to toggle the checkbox.
     * Default value is false.
     */
    disabled?: boolean;

    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string;
  }
>;

type CheckBoxNativeType = NativeMethods;

export type Props = Readonly<
  CommonProps & {
    /**
     * The value of the checkbox.  If true the checkbox will be turned on.
     * Default value is false.
     */
    value?: boolean;

    /**
     * Used to get the ref for the native checkbox
     */
    forwardedRef?: React.Ref<CheckBoxNativeType>;

    /**
     * Controls the colors the checkbox has in checked and unchecked states.
     * TODO: improve this type
     */
    tintColors?: {true?: any; false?: any};

    /**
     * @deprecated: Use lineWidth instead
     */
    strokeWidth?: number;
    markSize?: number;
    lineWidth?: number;

    /**
     * @deprecated: Use boxType instead
     */
    shape?:number;

    /**
     * Control circle or square
     */
    boxType: 'circle' | 'square'
    strokeColor: string
    onCheckColor: string
    tintColor: string
  }
>;

class CheckBox extends React.Component<Props> {
  _nativeRef: React.Ref<CheckBoxNativeType> | null = null;
  _setNativeRef = setAndForwardRef({
    getForwardedRef: () => this.props.forwardedRef,
    setLocalRef: (ref: any) => {
      this._nativeRef = ref;
    },
  });

  _onChange = (event: CheckBoxEvent) => {
    const value = this.props.value || false;

    // @ts-ignore
    nullthrows(this._nativeRef).setNativeProps({value: value});

    // Change the props after the native props are set in case the props
    // change removes the component
    this.props.onChange && this.props.onChange(event);
    this.props.onValueChange &&
      this.props.onValueChange(event.nativeEvent.value);
  };

  getTintColors(tintColors: {true?: any; false?: any} | undefined) {
    return tintColors
      ? {
          true: processColor(tintColors.true),
          false: processColor(tintColors.false),
        }
      : undefined;
  }

  render() {
    const {tintColors, style, ...props} = this.props;
    const disabled = this.props.disabled || false;
    const value = this.props.value || false;

    let boxType = this.props.boxType;
    if (this.props.shape && !boxType) {
      boxType = this.props.shape === 0 ? 'circle' : 'square';
    }

    let lineWidth = this.props.lineWidth
    if (this.props.strokeWidth && !lineWidth) {
      lineWidth = this.props.strokeWidth;
    }

    const nativeProps = {
      ...props,
      onStartShouldSetResponder: () => true,
      onResponderTerminationRequest: () => false,
      enabled: !disabled,
      on: value,
      tintColors: this.getTintColors(tintColors),
      style: [styles.rctCheckBox, style],
      lineWidth,
      boxType,
      strokeColor: processColor(this.props.strokeColor || '#ffffff')!,
      onCheckColor: processColor(this.props.onCheckColor || '#007aff')!,
      tintColor: processColor(this.props.tintColor || '#aaaaaa')!,
    };
    return (
      <CheckBoxNativeComponent
        {...nativeProps}
        ref={this._setNativeRef}
        onChange={this._onChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  rctCheckBox: {
    height: 32,
    width: 32,
  },
});

/**
 * Can't use CheckBoxNativeType because it has different props
 */
type CheckBoxType = NativeMethods;

const CheckBoxWithRef = React.forwardRef(function CheckBoxWithRef(
  props: Props,
  ref: React.Ref<CheckBoxType>,
) {
  return <CheckBox {...props} forwardedRef={ref} />;
});

export default CheckBoxWithRef;