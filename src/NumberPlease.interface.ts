export interface IDigit {
  id: string;
  label?: string;
  min: number;
  max: number;
  step?: number;
}

export interface IValue {
  id: string;
  value: number;
}

export interface INumberPleaseProps {
  digits: IDigit[];
  values: IValue[];
  onChange(value: any): any;
  divider?: any;
  pickerStyle?: {};
  itemStyle?: {};
}
