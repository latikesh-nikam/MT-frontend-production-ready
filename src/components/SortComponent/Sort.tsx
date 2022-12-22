import { Fragment } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { ISortTypes } from './sort.types';
import { ILocalisationContext } from '../../hoc/Localization/localisationProvider.types';

import FormInputCheckBox from '../FormInputCheckbox/FormInputCheckbox';
import { LocalisationContext } from '../../hoc/Localization/LocalisationProvider';

import { RadioGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Radio } from '@mui/material';
import { Button } from '@mui/material';

function Sort() {
  const { localisation, updateLocalisation } = useContext(
    LocalisationContext,
  ) as ILocalisationContext;
  const { localString } = localisation;

  const methods = useForm<ISortTypes>({
    defaultValues: {
      sortValue: '',
    },
  });

  const { handleSubmit, control } = methods;

  const sortValues = ['fareLowToHigh', 'fareHighToLow', 'name'];

  const ratingOption = [
    {
      label: localString?.aboveFour,
      value: 'aboveFour',
    },
    {
      label: localString?.threeToFour,
      value: 'threeToFour',
    },
    {
      label: localString?.belowThree,
      value: 'belowThree',
    },
  ];

  const submit = async (data: any) => {
    console.log(data);
  };

  return (
    <Fragment>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submit)} autoComplete="off">
          <Controller
            name="sortValue"
            control={control}
            defaultValue="other"
            render={({ field }) => (
              <Fragment>
                <RadioGroup {...field} aria-labelledby="sortValue">
                  {sortValues &&
                    sortValues.map((sortValue: string) => {
                      return (
                        <FormControlLabel
                          key={sortValue}
                          value={sortValue}
                          control={<Radio />}
                          label={localString[`${sortValue}`]}
                        />
                      );
                    })}
                </RadioGroup>
              </Fragment>
            )}
          />
          <FormInputCheckBox
            options={ratingOption}
            label={localString?.ratings}
            name="sortByRatings"
          />
          <Button type="submit" fullWidth variant="contained">
            {localString?.sort}
          </Button>
        </form>
      </FormProvider>
    </Fragment>
  );
}
export default Sort;
