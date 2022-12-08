import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '@mui/material/Button/Button';
import { FilterContainer } from './filter.styles';
import { busTypeOptions, departureOptions, sliderData } from './filter.data';
import { cities } from '../Search/search.data';
import { IFilterInput, IFilterProps } from './filter.types';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { HomeContext } from '../../context/HomeContext/HomeContext';
import { IHomeContext } from '../../context/HomeContext/homeContext.types';
import FormInputCheckBox from '../FormInputCheckbox/FormInputCheckbox';
import SliderInput from '../Slider/Slider';
import RadioInput from '../RadioInput/RadioInput';
import SearchableDropdown from '../SearchableDropdown/SearchableDropdown';

const Filter = ({handleFilter}:IFilterProps) => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
  const {
    homeState: {
      filterData: { isFiltered, ...filterData },
    }
  } = useContext(HomeContext) as IHomeContext;

  const methods = useForm<IFilterInput>({
    defaultValues: filterData,
  });

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <FilterContainer className="filter">
        <form onSubmit={handleSubmit(handleFilter)} className="filterForm">
          <FormInputCheckBox
            options={busTypeOptions}
            name="busType"
            label="busType"
          />
          <RadioInput
            name="departure"
            label="departureTime"
            options={departureOptions}
          />
          <SliderInput name="price" label="selectPrice" data={sliderData} />
          <SearchableDropdown
            label="droppingPoint"
            name="drop"
            searchList={cities}
            
          />
          <Button type="submit" variant="contained" fullWidth>
            {localString?.filter}
          </Button>
        </form>
      </FilterContainer>
    </FormProvider>
  );
};

export default Filter;
