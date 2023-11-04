import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";
import type {
    ViewProps,
    HostComponent,
    ColorValue,
} from "react-native";
import type {
    WithDefault,
    DirectEventHandler,
    Int32} from "react-native/Libraries/Types/CodegenTypes";


export type Event = Readonly<{value: boolean;}>;
export type ChangeEvent = Readonly<{
  target:Int32;
  value: boolean;
}>;


export interface CheckBoxProps extends ViewProps {
    value?:  WithDefault<boolean, false>
    onValueChangeNative?: DirectEventHandler<Event>;
    onChange?: DirectEventHandler<ChangeEvent>;
    tintColor?: ColorValue
    onCheckColor?: ColorValue
    onFillColor?: ColorValue
    onTintColor?: ColorValue
}

export default codegenNativeComponent<CheckBoxProps>(
    'RNCCheckbox'
) as HostComponent<CheckBoxProps>;
