import { Autocomplete, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ISearchableDropdownProps } from './SearchableDropdown.types';

const SearchableDropdown = ({
  name,
  errors,
  label,
  searchList,
  defaultValue,
}: ISearchableDropdownProps) => {
  const { control } = useFormContext();
  const { t } = useTranslation();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <Autocomplete
          options={searchList}
          fullWidth
          defaultValue={defaultValue}
          renderInput={params => (
            <TextField
              {...params}
              fullWidth
              label={t(label)}
              variant="outlined"
              error={!!errors[name]}
              //   helperText={errors[name] ? (errors[name]?.message as string) : ''}
            />
          )}
          onChange={(event, data) => {
            onChange(data);
          }}
        />
      )}
    />
  );
};

export default SearchableDropdown;
