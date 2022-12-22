import { useContext } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import Radio from '@mui/material/Radio/Radio';
import RadioGroup from '@mui/material/RadioGroup/RadioGroup';
import FormLabel from '@mui/material/FormLabel/FormLabel';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { IRadioInputProps } from './radioInput.types';
import { RadioGroupContainer } from './radioInput.styles';

const RadioInput = ({
  name,
  label,
  options,
  row = false,
}: IRadioInputProps) => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RadioGroupContainer>
          <FormLabel className="formLabel" component="legend">
            {localString[label]}
          </FormLabel>
          <RadioGroup {...field} className="radioGroup" row={row}>
            {options &&
              options.map(({ label, value }, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={value}
                    control={<Radio />}
                    label={localString[label]}
                  />
                );
              })}
          </RadioGroup>
        </RadioGroupContainer>
      )}
    />
  );
};

export default RadioInput;