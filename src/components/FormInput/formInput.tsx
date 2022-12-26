import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import { IFormInputProps } from './formInput.types';
import { InputContainer } from './formInput.styles';

const FormInput = ({
  name,
  type = 'text',
  showErrorMessage = false,
  size = 'medium',
  ...textFieldProps
}: IFormInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage =
    showErrorMessage && errors[name] ? (errors[name]?.message as string) : '';
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <InputContainer>
          <TextField
            data-testid={`${name}Input`}
            {...field}
            sx={{ m: 0 }}
            fullWidth
            variant="outlined"
            error={!!errors[name]}
            helperText={errorMessage}
            type={type}
            margin="dense"
            size={size}
            {...textFieldProps}
          />
        </InputContainer>
      )}
    />
  );
};

export default FormInput;
