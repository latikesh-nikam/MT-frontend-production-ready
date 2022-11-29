import { IDatePickerProps } from './DateInput.types';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DatePicker } from '@mui/x-date-pickers';

const DateInput = ({ name, label, errors }: IDatePickerProps) => {
  const { control } = useFormContext();
  const { t } = useTranslation();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <DatePicker
            minDate={new Date()}
            label={t(label)}
            value={value}
            inputFormat="DD-MM-YYYY"
            renderInput={params => (
              <TextField
                {...params}
                error={!!errors[name]}
                helperText={
                  errors[name] ? (errors[name]?.message as string) : ''
                }
              />
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
