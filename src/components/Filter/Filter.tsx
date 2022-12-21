import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '@mui/material/Button/Button';
import { FilterContainer } from './filter.styles';
import {
  busTypeOptions,
  departureOptions,
  filterInitialState,
  sliderData,
  vehicleTypeOptions,
} from './filter.data';
import { cities } from '../Search/search.data';
import { IFilterInput, IFilterProps } from './filter.types';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { StoreContext } from '../../context/StoreContext/StoreContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import FormInputCheckBox from '../FormInputCheckbox/FormInputCheckbox';
import SliderInput from '../Slider/Slider';
import RadioInput from '../RadioInput/RadioInput';
import SearchableDropdown from '../SearchableDropdown/SearchableDropdown';
import { epochDate } from '../../utils/utility';
import { useDidMountEffect } from '../../hooks/useDidMountEffect';
import { filterDataAction } from '../../context/actions/dashboardActions/dashboardAction';

const Filter = ({ navigateTo = '' }: IFilterProps) => {
  const [formData, setFormData] = useState<IFilterInput>(filterInitialState);

  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
  const {
    state: {
      dashboardState: {
        filterData: { isFiltered, ...filter },
        searchFormData,
      },
    },
    dispatch,
    getSearchResults,
    resetState,
  } = useContext(StoreContext) as IStoreContext;

  const { date, ...search } = searchFormData;
  const navigate = useNavigate();

  const methods = useForm<IFilterInput>({
    defaultValues: filter,
  });

  const { handleSubmit, reset } = methods;

  const getFilteredData = async () => {
    try {
      await getSearchResults({
        ...search,
        date: epochDate(date),
        filterBy: formData,
      });
      if (navigateTo) navigate(navigateTo);
    } catch (error) {
      throw error;
    }
  };

  const onSubmit = async (data: IFilterInput) => {
    dispatch(filterDataAction({ ...data, isFiltered: true }));
    resetState();
    setFormData(data);
  };

  const handleReset = async () => {
    dispatch(
      filterDataAction({
        ...filterInitialState,
        isFiltered: false,
      }),
    );
    reset(filterInitialState);
    setFormData(filterInitialState);
    try {
      await getSearchResults({
        ...search,
        date: epochDate(date),
        filterBy: {},
      });
    } catch (error) {
      throw error;
    }
  };

  useDidMountEffect(getFilteredData, [formData]);

  return (
    <FormProvider {...methods}>
      <FilterContainer className="filter">
        <form onSubmit={handleSubmit(onSubmit)} className="filterForm">
          <FormInputCheckBox
            options={busTypeOptions}
            name="vehicleClassType"
            label="busType"
          />
          <RadioInput
            name="vehicleType"
            options={vehicleTypeOptions}
            label="busClass"
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
          {isFiltered && (
            <Button variant="contained" onClick={handleReset}>
              {localString?.clearFilter}
            </Button>
          )}
        </form>
      </FilterContainer>
    </FormProvider>
  );
};

export default Filter;
