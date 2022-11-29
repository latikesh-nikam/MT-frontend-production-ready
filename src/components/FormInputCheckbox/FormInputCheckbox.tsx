import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { IFormInputCheckboxProps } from './FormInputCheckbox.types';
import styles from "./formInputCheckbox.module.scss"

const FormInputCheckBox = ({
  name,
  label,
  options,
}: IFormInputCheckboxProps) => {
  const { control, register } = useFormContext();
  return (
    <Box className={styles.checkbox}>

    <FormControl size={'small'} variant={'outlined'}>
      <FormLabel component="legend">{label}</FormLabel>

      {options.map((option: any) => {
        return (
          <FormControlLabel
            control={
              <Controller
                name={name}
                render={({}) => {
                  return <Checkbox value={option.value} {...register(name)} />;
                }}
                control={control}
              />
            }
            label={option.label}
            key={option.value}
          />
        );
      })}
    </FormControl>
    </Box>
  );
};

export default FormInputCheckBox;
