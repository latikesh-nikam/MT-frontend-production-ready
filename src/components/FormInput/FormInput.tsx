import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IFormInputProps } from './FormInput.types';

const FormInput = ({ name, label, errors, type }: IFormInputProps) => {
  const { control } = useFormContext();
  const { t } = useTranslation();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{ m: 0 }}
          label={t(label)}
          variant="outlined"
          error={!!errors[name]}
          type={type}
          helperText={
            errors[name] ? (errors[name]?.message as string) : ('' as string)
          }
          margin="dense"
        />
      )}
    />
  );
};

export default FormInput;
