import { useContext } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Autocomplete from '@mui/material/Autocomplete/Autocomplete';
import TextField from '@mui/material/TextField/TextField';
import Box from '@mui/material/Box/Box';
import { ISearchableDropdownProps } from './searchableDropdown.types';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { InputContainer } from '../FormInput/formInput.styles';
import { SearchableDropdownContainer } from './searchableDropdown.styles';

const SearchableDropdown = ({
  name,
  label,
  searchList,
}: ISearchableDropdownProps) => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, formState: { errors } }) => (
        <SearchableDropdownContainer>
          <Autocomplete
            options={searchList}
            fullWidth
            value={
              searchList.filter(station => station.stationName === value).length>0 ?  searchList.filter(station => station.stationName === value)[0] : null
            }
            getOptionLabel={option => option.stationName || option.label}
            renderOption={(props, option) =>
         
                <Box
                  component="li"
                  {...props}
                  sx={{ textTransform: 'capitalize' }}>
                  {option.stationName || option.label}
                </Box>
              
            }
            renderInput={params => (
              <InputContainer>
                <TextField
                  {...params}
                  fullWidth
                  label={localString[label]}
                  variant="outlined"
                  error={!!errors[name]}
                />
              </InputContainer>
            )}
            onChange={(event, data) => {
              onChange(data?.stationName || data?._id);
            }}
          />
        </SearchableDropdownContainer>
      )}
    />
  );
};

export default SearchableDropdown;
