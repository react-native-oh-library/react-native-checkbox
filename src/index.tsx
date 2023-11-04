import { View, StyleSheet } from "react-native";
import type { CheckBoxProps } from "./RNCCheckboxNativeComponent";
import { forwardRef, memo } from "react";
import React from "react";
import RNCCheckbox from "./RNCCheckboxNativeComponent"


type CheckBoxPropsAll = CheckBoxProps & {
  onValueChange: (value: boolean) => void
}

function CheckboxBase({
  value,
  tintColor,
  style,
  onChange,
  onValueChange,
  onCheckColor,
  onFillColor,
  onTintColor,
  forwardedRef,
  ...props
}: CheckBoxPropsAll & { forwardedRef: React.Ref<any>}) {
  return (
    <View style={[styles.imageContainer, style]} ref={forwardedRef}>
      <RNCCheckbox
        {...props}
        style={StyleSheet.absoluteFill}
        onChange={onChange}
        onValueChangeNative={(event)=>{
          onValueChange(event.nativeEvent.value)
        }}
        tintColor={tintColor}
        onCheckColor={onCheckColor}
        onFillColor={onFillColor}
        onTintColor={onTintColor}
        value={value}
      />
    </View>
  )
}

const CheckBoxMemo = memo(CheckboxBase)
const CheckBoxComponent: React.ComponentType<CheckBoxPropsAll> = forwardRef(
  (props: CheckBoxPropsAll, ref: React.Ref<any>) => (
    <CheckBoxMemo forwardedRef={ref} {...props} />
  ),
)

CheckBoxComponent.displayName = 'CheckBox'

export interface CheckBoxStaticProperties {
}

const CheckBox: React.ComponentType<CheckBoxPropsAll> = CheckBoxComponent as any


const styles = StyleSheet.create({
  imageContainer: {
    overflow: 'hidden',
    height: 32,
    width: 32,
  },
})

export default CheckBox
