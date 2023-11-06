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
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { ViewProps, HostComponent, ColorValue } from 'react-native';
import type {
  WithDefault,
  DirectEventHandler,
  Int32,
} from 'react-native/Libraries/Types/CodegenTypes';

export type ChangeEvent = Readonly<{
  target: Int32;
  value: boolean;
}>;

export interface CheckBoxNativeProps extends ViewProps {
  value?: WithDefault<boolean, false>;
  disabled?: WithDefault<boolean, false>;
  onChange?: DirectEventHandler<ChangeEvent>;
  onCheckColor?: ColorValue;
  tintColor?: ColorValue;
  markSize?: WithDefault<Int32, -1>;
  strokeWidth?: WithDefault<Int32, -1>;
  strokeColor?:  ColorValue;
}

export default codegenNativeComponent<CheckBoxNativeProps>(
  'RNCCheckbox'
) as HostComponent<CheckBoxNativeProps>;
