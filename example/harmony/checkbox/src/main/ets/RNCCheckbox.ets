/**
 * MIT License
 *
 * Copyright (C) 2023 Huawei Device Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * Ï
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
import {
  Descriptor,
  RNViewBase,
  ColorSegments,
  ViewBaseProps,
  RNComponentContext,
  RNOHLogger,
} from '@rnoh/react-native-openharmony'
import { RNC } from "./generated/ts";

export interface RNCCheckboxProps extends ViewBaseProps {
  onCheckColor: ColorSegments
  tintColor: ColorSegments
  value: boolean
  disabled: boolean
  markSize: number
  shape: number
  strokeWidth: number
  strokeColor: ColorSegments
}

export type CheckboxDescriptor = Descriptor<"RNCCheckbox", RNCCheckboxProps>
export const CHECKBOX_TYPE: string = RNC.RNCCheckbox.NAME

@Component
export struct RNCCheckbox {
  ctx!: RNComponentContext
  tag: number = 0
  @State private descriptor: RNC.RNCCheckbox.DescriptorWrapper =
    {} as RNC.RNCCheckbox.DescriptorWrapper
  @State isSelect: boolean = false;
  private logger: RNOHLogger | null = null;
  // 存储需要在组件卸载时清理的回调函数
  private cleanUpCallbacks: (() => void)[] = []
  private eventEmitter: RNC.RNCCheckbox.EventEmitter | undefined = undefined

  aboutToAppear() {
    // 创建EventEmitter实例，用于处理事件的订阅和触发
    this.eventEmitter = new RNC.RNCCheckbox.EventEmitter(this.ctx.rnInstance, this.tag)
    // 处理组件初始状态
    this.onDescriptorWrapperChange(this.ctx.descriptorRegistry.findDescriptorWrapperByTag<RNC.RNCCheckbox.DescriptorWrapper>(this.tag)!)
    this.logger = this.ctx?.logger.clone(RNC.RNCCheckbox.NAME);
    this.isSelect = this.descriptor.props.value
    // 订阅组件状态的变化，然后放入cleanUpCallbacks等待清理
    this.cleanUpCallbacks.push( this.ctx.descriptorRegistry.subscribeToDescriptorChanges(this.tag,
      (_descriptor, newDescriptorWrapper) => {
        // 更新组件状态
        this.onDescriptorWrapperChange(newDescriptorWrapper! as RNC.RNCCheckbox.DescriptorWrapper)
      }
    ))
  }

  aboutToDisappear() {
    // 执行所有清理回调
    this.cleanUpCallbacks.forEach(cb => cb())
  }

  // 更新组件状态
  private onDescriptorWrapperChange(descriptorWrapper: RNC.RNCCheckbox.DescriptorWrapper) {
    this.logger?.info(`onDescriptorWrapperChange`)
    this.descriptor = descriptorWrapper
  }

  onChange(value: boolean) {
    // 新版 codegen 的事件传递方式, 需调用eventEmitter中的emit方法
    this.eventEmitter!.emit("change", { target: this.tag, value: value });
    this.isSelect = value
  }

  build() {
    RNViewBase({ ctx: this.ctx, tag: this.tag }) {
      Checkbox()
        .enabled(!this.descriptor.props.disabled)
        .select(this.isSelect)
        .width('100%')
        .height('100%')
        .margin(0) // 重置间距，js侧传的间距在RNViewBase生效
        .selectedColor(this.descriptor.props.onCheckColor.toRGBAString())
        .unselectedColor(this.descriptor.props.tintColor.toRGBAString())
        .shape(this.descriptor.props.boxType === "circle" ? CheckBoxShape.CIRCLE : CheckBoxShape.ROUNDED_SQUARE)
        .onChange((v) => {
          this.onChange(v)
        })
        .mark({
          strokeColor: this.descriptor.props.strokeColor.toRGBAString(),
          size: this.descriptor.props.markSize,
          strokeWidth: this.descriptor.props.lineWidth
        })
    }
  }
}
