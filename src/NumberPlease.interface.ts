import type { RefObject } from 'react';
import type { PickerProps } from '@react-native-picker/picker';

export interface IRNNPPicker {
  /**
   * ID of the picker, which will be used as key in the returned value object.
   * @example if you have a picker with {id: 'amountOfPizzas', ... }, the returned value object will be: {amountOfPizzas: 3}
   * @type {string}
   * @memberof IRNNPPicker
   */
  id: number | string;
  /**
   * Picker ref
   * @type {*}
   * @memberof IRNNPPicker
   */
  ref?: RefObject<{ focus: () => void; blur: () => void }>;
  /**
   * Add a label which will prefix a picker item.
   * @example if label:'EURO' your picker item will look like: 3 EURO
   * @type {string}
   * @memberof IRNNPPicker
   */
  label?: string;
  /**
   * Min value of the picker to start with.
   * @type {number}
   * @memberof IRNNPPicker
   */
  min: number;
  /**
   * Max value of the picker to end with.
   * @type {number}
   * @memberof IRNNPPicker
   */
  max: number;
  /**
   * Amount to increment/decrement the value by.
   * @type {number}
   * @memberof IRNNPPicker
   */
  step?: number;
}

// export interface IValue {
//   // Need to be an object with all existing id's in pickers
//   // Not more, not less.
//   // [key: string]: number | string;
//   [key: IRNNPPicker['id']]: number | string;
// }
export type IValue = {
  [key: `${IRNNPPicker['id']}`]: string | number;
};

export interface IPickerFactory extends PickerProps<number | string> {
  pickerProps: IRNNPPicker;
  onChange: any;
  style: any;
  disabled: boolean;
}

export interface INumberPleaseProps extends PickerProps {
  /**
   * Initialise all the pickers with the given values.
   * @type {IRNNPPicker[]}
   * @memberof INumberPleaseProps
   */
  pickers: IRNNPPicker[];
  /**
   * Controled value to be displayed in the pickers.
   * @type {IValue}
   * @memberof INumberPleaseProps
   */
  values: IValue;
  /**
   * Callback function to be called when the value of any picker changes.
   * @param {*} value
   * @return {*}  {*}
   * @memberof INumberPleaseProps
   */
  onChange(value: any): void;
  /**
   * Divider to be used to seperate pickers.
   * @type {*}
   * @memberof INumberPleaseProps
   */
  divider?: any;
}
