export interface IRNNPPicker {
  id: string;
  label?: string;
  min: number;
  max: number;
  step?: number;
}

export interface IValue {
  [key: string]: number;
}

export interface INumberPleaseProps {
  pickers: IRNNPPicker[];
  values: IValue;
  onChange(value: any): any;
  divider?: any;
  pickerStyle?: {};
  itemStyle?: {};
}
