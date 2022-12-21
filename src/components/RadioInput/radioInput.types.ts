export interface IRadioInputProps {
  name: string;
  options: { label: string; value: string | number }[];
  label: string;
  row?: boolean;
}
