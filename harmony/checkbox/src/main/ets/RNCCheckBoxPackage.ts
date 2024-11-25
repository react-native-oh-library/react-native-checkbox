// Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
// Use of this source code is governed by a MIT license that can be
// found in the LICENSE file.

import { RNPackage } from "@rnoh/react-native-openharmony/ts";
import type {
  DescriptorWrapperFactoryByDescriptorTypeCtx,
  DescriptorWrapperFactoryByDescriptorType,
} from "@rnoh/react-native-openharmony/ts";
import { RNC } from "./generated/ts";

export class RNCCheckBoxPackage extends RNPackage {
  createDescriptorWrapperFactoryByDescriptorType(
    ctx: DescriptorWrapperFactoryByDescriptorTypeCtx
  ): DescriptorWrapperFactoryByDescriptorType {
    return {
      [RNC.RNCCheckbox.NAME]: (ctx) =>
      new RNC.RNCCheckbox.DescriptorWrapper(ctx.descriptor),
    };
  }
}