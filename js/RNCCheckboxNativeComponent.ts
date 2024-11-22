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
import type { ViewProps, HostComponent, ProcessedColorValue  } from 'react-native';
import type {
  WithDefault,
  DirectEventHandler,
  Int32,
} from 'react-native/Libraries/Types/CodegenTypes';

export type CheckBoxEvent = Readonly<{
  target: Int32;
  value: boolean;
}>;

export interface Props extends ViewProps {
  value?: WithDefault<boolean, false>;
  disabled?: WithDefault<boolean, false>;
  onChange?: DirectEventHandler<CheckBoxEvent>;
  onCheckColor?: ProcessedColorValue;
  tintColor?: ProcessedColorValue;
  markSize?: WithDefault<Int32, -1>;
  strokeColor?: ProcessedColorValue;
  boxType?:WithDefault<'circle' | 'square', 'circle'>;
  lineWidth?: WithDefault<Int32, -1>;
}

export default codegenNativeComponent<Props>(
  'RNCCheckbox'
) as HostComponent<Props>;
