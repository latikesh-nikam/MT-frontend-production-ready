import { Fragment, useContext, useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import Button from '@mui/material/Button/Button';
import DateInput from '../DateInput/DateInput';
import { getData } from '../../services/axios.interceptors';
import SearchableDropdown from '../SearchableDropdown/SearchableDropdown';
import { StoreContext } from '../../context/StoreContext/StoreContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { SearchContainer } from './search.styles';
import { IAllStation, ISearchInput } from './search.types';
import { ISearchProps } from './search.types';
import { HOME_ACTIONS_MAP } from '../../context/reducers/dashboardReducer/dashboardReducer';
import { epochDate } from '../../utils/utility';
import { useDidMountEffect } from '../../hooks/useDidMountEffect';
import { searchFormDataAction } from '../../context/actions/dashboardActions/dashboardAction';

const Search = ({ navigateTo = '' }: ISearchProps) => {
  const [allStations, updateAllStations] = useState<IAllStation[]>([]);
  const [formData, setFormData] = useState<ISearchInput>({
    date: new Date(),
    from: '',
    to: '',
  });

  const {
    state: {
      dashboardState: { searchFormData },
    },
    getSearchResults,
    dispatch,
    resetState,
  } = useContext(StoreContext) as IStoreContext;
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const navigate = useNavigate();

  const required = localString['required'];
  const differentCities = localString['differentCities'];

  const searchSchema = Yup.object({
    from: Yup.string()
      .required(required)
      .notOneOf([Yup.ref('to')], differentCities),
    to: Yup.string()
      .required(required)
      .notOneOf([Yup.ref('from')], differentCities),
    date: Yup.date().required(required),
  });

  const methods = useForm<ISearchInput>({
    resolver: yupResolver(searchSchema),
    defaultValues: searchFormData,
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const searchButtonClassName = !isValid
    ? 'searchButton disable'
    : 'searchButton';

  const getAllStations = async () => {
    const response = await getData('vehicle');
    updateAllStations(response);
  };

  const getSearchData = async () => {
    const { date } = formData;
    try {
      await getSearchResults({
        ...formData,
        date: epochDate(date),
        filterBy: {},
      });
      if (navigateTo) navigate(navigateTo);
    } catch (error) {
      throw error;
    }
  };

  const onSubmit: SubmitHandler<ISearchInput> = async data => {
    dispatch(searchFormDataAction(data));
    resetState();
    setFormData(data);
  };

  useEffect(() => {
    getAllStations();
  }, []);

  useDidMountEffect(getSearchData, [formData]);

  return (
    <FormProvider {...methods}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <SearchContainer>
          <form onSubmit={handleSubmit(onSubmit)} className="searchForm">
            <div className="formInput">
              <SearchableDropdown
                name="from"
                label="from"
                searchList={allStations}
              />
            </div>
            <div className="formInput">
              <SearchableDropdown
                name="to"
                label="to"
                searchList={allStations}
              />
            </div>
            <div className="formInput">
              <DateInput name="date" label="date" />
            </div>
            <div className="actions">
              <Button
                disabled={!isValid}
                type="submit"
                className={searchButtonClassName}
                variant="contained">
                {localString?.search}
              </Button>
            </div>
          </form>
        </SearchContainer>
      </LocalizationProvider>
    </FormProvider>
  );
};

export default Search;
