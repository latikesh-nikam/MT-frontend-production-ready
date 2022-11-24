import { useContext } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { IFormInputProps } from './formInput.types';
import { InputContainer } from './formInput.styles';

const FormInput = ({
  name,
  label,
  type = 'text',
  showErrorMessage = false,
  size = 'medium',
}: IFormInputProps) => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
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
            label={localString[label]}
            sx={{ m: 0 }}
            fullWidth
            variant="outlined"
            error={!!errors[name]}
            helperText={errorMessage}
            type={type}
            margin="dense"
            size={size}
          />
        </InputContainer>
      )}
    />
  );
};

export default FormInput;
