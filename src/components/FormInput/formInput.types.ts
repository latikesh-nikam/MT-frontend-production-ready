import { TextFieldProps } from '@mui/material/TextField';

export type IFormInputProps = {
  name: string;
  type?: 'text' | 'number' | 'password';
  showErrorMessage?: boolean;
  size?: 'medium' | 'small';
} & TextFieldProps;
