
/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GeneratePropsCpp.js
 */

#include <react/renderer/components/checkbox/Props.h>
#include <react/renderer/core/PropsParserContext.h>
#include <react/renderer/core/propsConversions.h>

namespace facebook {
namespace react {

RNCCheckboxProps::RNCCheckboxProps(
    const PropsParserContext &context,
    const RNCCheckboxProps &sourceProps,
    const RawProps &rawProps): ViewProps(context, sourceProps, rawProps),

    value(convertRawProp(context, rawProps, "value", sourceProps.value, {false})),
    disabled(convertRawProp(context, rawProps, "disabled", sourceProps.disabled, {false})),
    onCheckColor(convertRawProp(context, rawProps, "onCheckColor", sourceProps.onCheckColor, {})),
    tintColor(convertRawProp(context, rawProps, "tintColor", sourceProps.tintColor, {})),
    markSize(convertRawProp(context, rawProps, "markSize", sourceProps.markSize, {-1})),
    strokeColor(convertRawProp(context, rawProps, "strokeColor", sourceProps.strokeColor, {})),
    boxType(convertRawProp(context, rawProps, "boxType", sourceProps.boxType, {RNCCheckboxBoxType::Circle})),
    lineWidth(convertRawProp(context, rawProps, "lineWidth", sourceProps.lineWidth, {-1}))
      {}

} // namespace react
} // namespace facebook