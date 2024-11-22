/**
 * This code was generated by "react-native codegen-lib-harmony"
 */

import {
  Descriptor as ComponentDescriptor,
  ViewBaseProps,
  ViewRawProps,
  ViewDescriptorWrapperBase,
  ColorValue,
  Color,
  RNInstance,
  Tag,
  RNComponentCommandReceiver,
  ViewPropsSelector,
} from '@rnoh/react-native-openharmony/ts';


export namespace RNCCheckbox {
  export const NAME = "RNCCheckbox" as const

  export interface DirectRawProps {
    value?: boolean;
    disabled?: boolean;
    onCheckColor: ColorValue;
    tintColor: ColorValue;
    markSize?: number;
    strokeColor: ColorValue;
    boxType?: 'circle' | 'square';
    lineWidth?: number;
  }
  
  export interface Props extends ViewBaseProps {}
  
  export interface State {}
  
  export interface RawProps extends ViewRawProps, DirectRawProps {}
  
  export class PropsSelector extends ViewPropsSelector<Props, RawProps> {
    get value() {
      return this.rawProps.value ?? false;
    }
    
    get disabled() {
      return this.rawProps.disabled ?? false;
    }
    
    get markSize() {
      return this.rawProps.markSize ?? -1;
    }
    
    get boxType() {
      return this.rawProps.boxType ?? 'circle';
    }
    
    get lineWidth() {
      return this.rawProps.lineWidth ?? -1;
    }
    
  
    get onCheckColor() {
        if (this.rawProps.onCheckColor) {
          return Color.fromColorValue(this.rawProps.onCheckColor)
        } else {
          return new Color({ r: 0, g: 0, b: 0, a: 255})
        }
    }
    
    get tintColor() {
        if (this.rawProps.tintColor) {
          return Color.fromColorValue(this.rawProps.tintColor)
        } else {
          return new Color({ r: 0, g: 0, b: 0, a: 255})
        }
    }
    
    get strokeColor() {
        if (this.rawProps.strokeColor) {
          return Color.fromColorValue(this.rawProps.strokeColor)
        } else {
          return new Color({ r: 0, g: 0, b: 0, a: 255})
        }
    }
    
  }

  export type Descriptor = ComponentDescriptor<
    typeof NAME,
    Props,
    State,
    RawProps
  >;
  
  export class DescriptorWrapper extends ViewDescriptorWrapperBase<
    typeof NAME,
    Props,
    State,
    RawProps,
    PropsSelector
  > {
    protected createPropsSelector() {
      return new PropsSelector(this.descriptor.props, this.descriptor.rawProps)
    }
  }
  
  export interface EventPayloadByName {
    "change": {target: number, value: boolean}
  }
  
  export class EventEmitter {
    constructor(private rnInstance: RNInstance, private tag: Tag) {}
    
    emit<TEventName extends keyof EventPayloadByName>(eventName: TEventName, payload: EventPayloadByName[TEventName]) {
      this.rnInstance.emitComponentEvent(this.tag, eventName, payload)
    }
  }
  
  export interface CommandArgvByName {
  }
  
  export class CommandReceiver {
    private listenersByCommandName = new Map<string, Set<(...args: any[]) => void>>()
    private cleanUp: (() => void) | undefined = undefined
  
    constructor(private componentCommandReceiver: RNComponentCommandReceiver, private tag: Tag) {
    }
  
    subscribe<TCommandName extends keyof CommandArgvByName>(commandName: TCommandName, listener: (argv: CommandArgvByName[TCommandName]) => void) {
      if (!this.listenersByCommandName.has(commandName)) {
        this.listenersByCommandName.set(commandName, new Set())
      }
      this.listenersByCommandName.get(commandName)!.add(listener)
      const hasRegisteredCommandReceiver = !!this.cleanUp
      if (!hasRegisteredCommandReceiver) {
        this.cleanUp = this.componentCommandReceiver.registerCommandCallback(this.tag, (commandName: string, argv: any[]) => {
          if (this.listenersByCommandName.has(commandName)) {
            const listeners = this.listenersByCommandName.get(commandName)!
            listeners.forEach(listener => {
              listener(argv)
            })
          }
        })
      }
  
      return () => {
        this.listenersByCommandName.get(commandName)?.delete(listener)
        if (this.listenersByCommandName.get(commandName)?.size ?? 0 === 0) {
          this.listenersByCommandName.delete(commandName)
        }
        if (this.listenersByCommandName.size === 0) {
          this.cleanUp?.()
        }
      }
    }
  }

}