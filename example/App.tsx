import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';

export default function CheckBoxExample() {
  const [value, setValue] = useState<boolean>(false);
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);
  return (
    <CheckBox
      disabled={false}
      value={toggleCheckBox}
      style={{ width: 70, height: 70, margin: 50 }}
      tintColor={'#f00'}
      boxType='square'
      onCheckColor={'#00ff0011'}
      lineWidth={10}
      strokeColor={'#00f'}
      markSize={70}
      strokeWidth={30}
      onChange={event => {
        setValue(event.nativeEvent.value);
      }}
      onValueChange={newValue => {
        setToggleCheckBox(newValue);
      }}
    />
  );
}
