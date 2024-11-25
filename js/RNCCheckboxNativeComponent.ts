// Copyright (c) 2019 react-native-community. All rights reserved.
// Use of this source code is governed by a MIT license that can be
// found in the LICENSE file.
// 2024.11.23 react-native 新架构适配
//     Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved.

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
