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
#pragma once
#include "EventEmitters.h"
#include "RNOH/ArkJS.h"
#include "RNOH/EventEmitRequestHandler.h"
#include "glog/logging.h"

using namespace facebook;
namespace rnoh {

    enum CheckboxEventType {
        CHANGE,
    };

    CheckboxEventType getCheckboxEventType(ArkJS &arkJs, napi_value eventObject) {
        auto eventType = arkJs.getString(arkJs.getObjectProperty(eventObject, "type"));
        if (eventType == "onChange") {
            return CheckboxEventType::CHANGE;
        } else {
            throw std::runtime_error("Unknown Checkbox event type");
        }
    }

    class CheckboxEventEmitRequestHandler : public EventEmitRequestHandler {
    public:
        void handleEvent(EventEmitRequestHandler::Context const &ctx) override {
            if (ctx.eventName != "RNCCheckbox") {
                return;
            }
            ArkJS arkJs(ctx.env);
            auto eventEmitter = ctx.shadowViewRegistry->getEventEmitter<react::RNCCheckboxEventEmitter>(ctx.tag);
            if (eventEmitter == nullptr) {
                return;
            }
            auto eventType = getCheckboxEventType(arkJs, ctx.payload);
            switch (eventType) {
            case CheckboxEventType::CHANGE: {
                bool value = arkJs.getBoolean(arkJs.getObjectProperty(ctx.payload, "value"));
                facebook::react::Float target = arkJs.getDouble(arkJs.getObjectProperty(ctx.payload, "target"));
                react::RNCCheckboxEventEmitter::OnChange event = {target,value};
                eventEmitter->onChange(event);
                break;
            }
            default:
                break;
            }
        };
    };
} // namespace rnoh