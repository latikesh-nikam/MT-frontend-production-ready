import { TextField } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField';

export type IFormInputProps = {
  name: string;
  label: string;
  type?: 'text' | 'number' | 'password';
  showErrorMessage?: boolean;
  size?: 'medium' | 'small';
  select?: boolean;
} & TextFieldProps;
