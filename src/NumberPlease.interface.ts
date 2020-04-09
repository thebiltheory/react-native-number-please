export interface IValue {
  id: 'string';
  value: number;
}

export interface IDigits {
  id: string;
  label?: string;
  min: number;
  max: number;
  step?: number;
}

export interface INumberPleaseProps {
  digits: IDigits[];
  values: object[];
  // format: any;
  onChange(value: any): any;
  divider?: any;
  pickerStyle?: {};
  itemStyle?: {};
}
