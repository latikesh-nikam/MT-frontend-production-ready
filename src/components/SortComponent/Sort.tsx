import { Fragment,useContext } from 'react';
import { useForm,FormProvider,Controller } from 'react-hook-form';
import RadioGroup from '@mui/material/RadioGroup/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import Radio from '@mui/material/Radio/Radio';
import Button from '@mui/material/Button/Button';
import FormInputCheckBox from '../FormInputCheckbox/FormInputCheckbox';
import { ISortTypes } from './Sort.types';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';

function Sort() {
  const { localisation } = useContext(
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
      label: 'aboveFour',
      value: 'aboveFour',
    },
    {
      label:'threeToFour',
      value: 'threeToFour',
    },
    {
      label: 'belowThree',
      value: 'belowThree',
    },
  ];

  const submit = async (data: any) => {
    // try {
    //   const response = await getData('auth/changePassword', data);
    // } catch (error: any) {
    //   throw error;
    // }
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
                          label={localString[sortValue]}
                        />
                      );
                    })}
                </RadioGroup>
              </Fragment>
            )}
          />
          <FormInputCheckBox
            options={ratingOption}
            label={'ratings'}
            name="sortByRatings"
          />
          <Button type="submit" fullWidth variant="contained">
            {localString['sort']}
          </Button>
        </form>
      </FormProvider>
    </Fragment>
  );
}
export default Sort;
