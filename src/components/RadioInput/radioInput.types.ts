import { TextFieldProps } from '@mui/material';
import { RadioGroupProps } from '@mui/material/RadioGroup';

export type IRadioInputProps = {
  name: string;
  options: { label: string; value: string | number }[];
  label: string;
  row?: boolean;
} & RadioGroupProps;
