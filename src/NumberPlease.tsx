import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import type {
  INumberPleaseProps,
  IPickerFactory,
  IValue,
} from './NumberPlease.interface';
import range from './utils/range';
import { Picker } from '@react-native-picker/picker';

const PickerFactory = React.forwardRef(
  (
    {
      pickerProps,
      selectedValue,
      onChange,
      style,
      itemStyle,
      disabled,
    }: IPickerFactory,
    ref: any
  ) => {
    const { id, label = '', min, max } = pickerProps;
    const numbers = range(min, max);

    return (
      <Picker
        testID={`${id}-picker`}
        ref={ref}
        style={{ ...styles.picker, ...style }}
        selectedValue={selectedValue}
        onValueChange={(value) => onChange({ [id]: value })}
        itemStyle={itemStyle}
        enabled={!disabled}
      >
        {numbers.map((number, index) => (
          <Picker.Item
            key={`${id}-${number}-${index}`}
            value={number}
            label={`${number} ${label}`}
            enabled={!disabled}
          />
        ))}
      </Picker>
    );
  }
);

const NumberPlease = ({
  pickers,
  values,
  onChange,
  itemStyle,
  style,
  ...rest
}: INumberPleaseProps) => {
  // React.useEffect(() => {
  //   Object.keys(values).some((key) => {
  //     if (!pickers.find((picker: any) => picker.id === key)) {
  //       throw new Error(
  //         `Picker with id '${key}' not found. Double check your initialValues.`
  //       );
  //     }
  //   });
  // }, [values, pickers]);

  const onChangeHandle = (value: IValue) => {
    console.log('VALUE', value);

    onChange({
      ...values,
      ...value,
    });
  };

  const findPickerValue = (picker: any) => {
    return values[picker.id];
  };

  return (
    <View style={styles.container}>
      {pickers.map((picker: any, index: any) => {
        const { id, ref, disabled = false } = picker;
        const pickerValue = findPickerValue(picker);
        return (
          <PickerFactory
            ref={ref}
            key={`${id}-picker-${index}`}
            pickerProps={picker}
            selectedValue={pickerValue}
            onChange={onChangeHandle}
            disabled={disabled}
            itemStyle={itemStyle}
            style={style}
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
    height: '100%',
    flex: 1,
  },
});

export default NumberPlease;
