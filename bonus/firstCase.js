/**
 * In this hypothetical scenario, the user changes Second Text Field,
 * and yet First Text Field is still getting re-rendered. Our
 * expectation is that First Text Field should not get re-rendered
 * when valueB changes.
 *
 * 1. What is causing the First Text Field to be re-rendered even if
 * the value that changes is valueB and not valueA?
 *
 * 2. How would you change SomeComponent (without adding new files)
 * to prevent the First Text Field from being re-rendered?
 */

import React from "react";
import { View } from "react-native";
import { SomeInput } from "some-hypothetical-library";

export function SomeComponent() {
  const [valueA, setValueA] = React.useState();
  const [valueB, setValueB] = React.useState();

  return (
    <View>
      {/* First Text Field */}
      <TextField
        style={{ marginBottom: 10 }}
        value={valueA}
        onChange={setValueA}
      />
      {/* Second Text Field */}
      <TextField value={valueB} onChange={setValueB} />
    </View>
  );
}

function TextField({ value, onChange, style }) {
  return (
    <SomeInput type="text" value={value} onChange={onChange} style={style} />
  );
}
TextField = React.memo(TextField);
