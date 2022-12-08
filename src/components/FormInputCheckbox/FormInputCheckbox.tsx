import { useContext } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormControl from '@mui/material/FormControl/FormControl';
import FormLabel from '@mui/material/FormLabel/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';
import { CheckboxContainer } from './formInputChecbox.styles';
import { IFormInputCheckboxProps } from './formInputCheckbox.types';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';

const FormInputCheckBox = ({
  name,
  label,
  options,
}: IFormInputCheckboxProps) => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
  const { control, register } = useFormContext();

  return (
    <CheckboxContainer>
      <FormControl size={'small'} variant={'outlined'}>
        <FormLabel component="legend">{localString[label]}</FormLabel>

        {options.map(option => {
          return (
            <FormControlLabel
              control={
                <Controller
                  name={name}
                  render={({ field: { value } }) => {
                    const checked =
                      value &&
                      value?.filter((el: string) => el === option.value)
                        .length > 0;

                    return (
                      <Checkbox
                        value={option.value}
                        {...register(name)}
                        defaultChecked={checked}
                      />
                    );
                  }}
                  control={control}
                />
              }
              label={localString[option.label]}
              key={option.value}
            />
          );
        })}
      </FormControl>
    </CheckboxContainer>
  );
};

export default FormInputCheckBox;
