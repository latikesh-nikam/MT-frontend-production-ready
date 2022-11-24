export interface IFormInputProps {
  name: string;
  label: string;
  type?: 'text' | 'number' | 'password';
  showErrorMessage?: boolean;
  size?: "medium" | "small" ; 
}
