
/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GeneratePropsH.js
 */
#pragma once

#include <react/renderer/components/view/ViewProps.h>
#include <react/renderer/core/PropsParserContext.h>
#include <react/renderer/graphics/Color.h>

namespace facebook {
namespace react {

enum class RNCCheckboxBoxType { Circle, Square };

static inline void fromRawValue(const PropsParserContext& context, const RawValue &value, RNCCheckboxBoxType &result) {
  auto string = (std::string)value;
  if (string == "circle") { result = RNCCheckboxBoxType::Circle; return; }
  if (string == "square") { result = RNCCheckboxBoxType::Square; return; }
  abort();
}

static inline std::string toString(const RNCCheckboxBoxType &value) {
  switch (value) {
    case RNCCheckboxBoxType::Circle: return "circle";
    case RNCCheckboxBoxType::Square: return "square";
  }
}

class RNCCheckboxProps final : public ViewProps {
 public:
  RNCCheckboxProps() = default;
  RNCCheckboxProps(const PropsParserContext& context, const RNCCheckboxProps &sourceProps, const RawProps &rawProps);

#pragma mark - Props

  bool value{false};
  bool disabled{false};
  SharedColor onCheckColor{};
  SharedColor tintColor{};
  int markSize{-1};
  SharedColor strokeColor{};
  RNCCheckboxBoxType boxType{RNCCheckboxBoxType::Circle};
  int lineWidth{-1};
};

} // namespace react
} // namespace facebook
