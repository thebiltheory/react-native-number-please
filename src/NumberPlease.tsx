import * as React from 'react';
import { View, StyleSheet, Picker } from 'react-native';
import find from 'lodash.find';
import findIndex from 'lodash.findindex';
import produce from 'immer';
import { INumberPleaseProps, IValue } from './NumberPlease.interface';
import range from './utils/range';

const PickerFactory: React.FC<any> = ({
  pickerProps,
  selectedValue,
  onChange,
  pickerStyle,
  itemStyle,
}: any) => {
  const { id, label = '', min, max } = pickerProps;
  const numbers = range(min, max);

  return (
    <Picker
      style={{ ...styles.picker, ...pickerStyle }}
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

const NumberPlease: React.FC<INumberPleaseProps> = ({
  digits,
  values,
  onChange,
  ...rest
}: any) => {
  const onChangeHandle = (value: IValue) => {
    const nextValues = produce(values, (draft: any) => {
      const index = findIndex(draft, { id: value.id });
      draft[index] = value;
    });

    onChange(nextValues);
  };

  return (
    <View style={styles.container}>
      {digits.map((picker: any, index: any) => {
        const pickerValues = find(values, { id: picker.id });
        return (
          <PickerFactory
            key={`${picker.id}-picker-${index}`}
            pickerProps={picker}
            selectedValue={pickerValues?.value}
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
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    height: '100%', width: 90,
  },
});

export default NumberPlease;
