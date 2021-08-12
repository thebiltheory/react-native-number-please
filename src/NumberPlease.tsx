import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { find} from './utils/array.utils';
import { INumberPleaseProps, IValue } from './NumberPlease.interface';
import range from './utils/range';
import { Picker } from '@react-native-picker/picker';

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
      onValueChange={(value: any) => onChange({ [id]: value })}
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
  pickers,
  values,
  onChange,
  ...rest
}: any) => {

  React.useEffect(() => {
    Object.keys(values).some((key) => {
      if (!find(pickers, (picker) => picker.id === key)) {
        throw new Error(`Picker with id '${key}' not found. Double check your initialValues.`,);
      }
    });
  }, [values, pickers]);

  const onChangeHandle = (value: IValue) => {
    onChange({
      ...values,
      ...value,
    });
  };


  const findPickerValue = (picker:any) => {
    return values[picker.id];
  };

  return (
    <View style={styles.container}>
      {pickers.map((picker: any, index: any) => {
        const pickerValue = findPickerValue(picker);
        return (
          <PickerFactory
            key={`${picker.id}-picker-${index}`}
            pickerProps={picker}
            selectedValue={pickerValue}
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
