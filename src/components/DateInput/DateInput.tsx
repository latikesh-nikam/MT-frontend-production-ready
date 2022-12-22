import { useContext } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { IDatePickerProps } from './dateInput.types';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { InputContainer } from '../FormInput/formInput.styles';

const DateInput = ({
  name,
  label,
  showErrorMessage = false,
}: IDatePickerProps) => {
  const { control,formState:{errors} } = useFormContext();
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const errorMessage = showErrorMessage && errors[name]? errors[name]?.message as string : ""

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <DatePicker
            minDate={new Date()}
            value={value}
            inputFormat="DD-MM-YYYY"
            renderInput={params => (
              <InputContainer>
                <TextField
                  required
                  label={localString[label]}
                  {...params}
                  error={!!errors[name]}
                  helperText={
                    errorMessage
                  }
                />
              </InputContainer>
            )}
            onChange={event => {
              onChange(event);
            }}
          />
        );
      }}
    />
  );
};

export default DateInput;