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
import { View, StyleSheet } from 'react-native';
import type { CheckBoxNativeProps } from './RNCCheckboxNativeComponent';
import { forwardRef, memo } from 'react';
import React from 'react';
import RNCCheckbox from './RNCCheckboxNativeComponent';

type CheckBoxProps = CheckBoxNativeProps & {
  onValueChange?: (value: boolean) => void;
  testID?: string | undefined;
};

function CheckboxBase({
  value,
  disabled,
  style,
  onChange,
  onValueChange,
  tintColor,
  onCheckColor,
  testID,
  shape,
  forwardedRef,
  markSize,
  strokeWidth,
  strokeColor,
  ...props
}: CheckBoxProps & { forwardedRef: React.Ref<any> }) {
  return (
    <View testID={testID} style={[styles.container, style]} ref={forwardedRef}>
      <RNCCheckbox
        {...props}
        style={StyleSheet.absoluteFill}
        onChange={(event) => {
          onChange && onChange(event);
          onValueChange && onValueChange(event.nativeEvent.value);
        }}
        tintColor={tintColor}
        onCheckColor={onCheckColor}
        value={value}
        shape={shape}
        disabled={disabled}
        markSize={markSize}
        strokeWidth={strokeWidth}
        strokeColor={strokeColor}
      />
    </View>
  );
}

const CheckBoxMemo = memo(CheckboxBase);
const CheckBoxComponent: React.ComponentType<CheckBoxProps> = forwardRef(
  (props: CheckBoxProps, ref: React.Ref<any>) => (
    <CheckBoxMemo forwardedRef={ref} {...props} />
  )
);

CheckBoxComponent.displayName = 'CheckBox';

export interface CheckBoxStaticProperties {}

const CheckBox: React.ComponentType<CheckBoxProps> = CheckBoxComponent as any;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    height: 32,
    width: 32,
  },
});

export default CheckBox;
