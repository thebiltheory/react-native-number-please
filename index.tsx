import React, { FC } from "react";
import { View, Picker, StyleSheet } from "react-native";
import find from "lodash.find";
import findIndex from "lodash.findindex";
import produce from "immer";
import range from "./src/utils/range";
import { INumberPleaseProps } from "./index.interface";

const PickerFactory: FC<any> = ({
  pickerProps,
  selectedValue,
  onChange,
  pickerStyle,
  itemStyle,
}: any) => {
  const { id, label, min, max } = pickerProps;
  const numbers = range(min, max);

  return (
    <Picker
      style={{ height: "100%", width: 90, ...pickerStyle }}
      selectedValue={selectedValue}
      onValueChange={(value: any) => onChange({ id, value })}
      itemStyle={itemStyle}
    >
      {numbers.map((number, index) => (
        <Picker.Item
          key={`${id}-${number}-${index}`}
          value={number}
          label={`${number} ${label}`}
        />
      ))}
    </Picker>
  );
};

const NumberPlease: FC<INumberPleaseProps> = ({
  digits,
  values,
  onChange,
  ...rest
}: any) => {
  const onChangeHandle = (value: any) => {
    const nextValues = produce(values, (draft: any) => {
      const index = findIndex(draft, { id: value.id });
      draft[index] = value;
    });

    onChange(nextValues);
  };

  return (
    <View style={styles.container}>
      {digits.map((picker: any, index: any) => {
        const { value }: any = find(values, { id: picker.id });
        return (
          <PickerFactory
            key={`${picker.id}-picker-${index}`}
            pickerProps={picker}
            selectedValue={value}
            onChange={onChangeHandle}
            {...rest}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NumberPlease;
