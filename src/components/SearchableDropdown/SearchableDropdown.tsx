import { Autocomplete, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ISearchableDropdownProps } from './SearchableDropdown.types';

const SearchableDropdown = ({
  name,
  errors,
  label,
}: ISearchableDropdownProps) => {
  const cities = [
    'Nagpur',
    'Pune',
    'Mumbai',
    'Yavatmal',
    'Jalgaon',
    'Shegaon',
    'Buldana',
    'Amravati',
    'Bhandara',
    'Wardha',
  ];

  const { control } = useFormContext();
  const { t } = useTranslation();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <Autocomplete
          options={cities}
          renderInput={params => (
            <TextField
              {...params}
              label={t(label)}
              variant="outlined"
              error={!!errors[name]}
              helperText={errors[name] ? (errors[name]?.message as string) : ''}
            />
          )}
          onChange={(event, data) => {
            onChange(data);
            return data;
          }}
        />
      )}
    />
  );
};

export default SearchableDropdown;
