import { Fragment, useContext } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormLabel from '@mui/material/FormLabel/FormLabel';
import Slider from '@mui/material/Slider/Slider';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { SliderContainer } from './slider.styles';
import { ISliderProps } from './slider.types';

const SliderInput = ({  data, name, label }: ISliderProps) => {
    
  const {localisation:{localString}} = useContext(LocalisationContext) as ILocalisationContext
  const { control } = useFormContext();

  return (
    <Fragment>
      <FormLabel>{localString[label]}</FormLabel>
      <SliderContainer>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Slider
            value={value}
            step={null}
            marks={data}
            onChange={(event, data) => {
              onChange(data);
            }}
          />
        )}
      />
      </SliderContainer>
    </Fragment>
  );
};

export default SliderInput;
