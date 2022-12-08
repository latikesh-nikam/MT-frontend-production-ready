import { Fragment, useContext, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import Button from '@mui/material/Button/Button';
import DateInput from '../DateInput/DateInput';
import { getData } from '../../services/axios.instance';
import SearchableDropdown from '../SearchableDropdown/SearchableDropdown';
import { HomeContext } from '../../context/HomeContext/HomeContext';
import { IHomeContext } from '../../context/HomeContext/homeContext.types';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { SearchContainer } from './search.styles';
import { IAllStation, ISearchInput } from './search.types';
import { ISearchProps } from './search.types';

const Search = ({ handleSearch }: ISearchProps) => {
  const [allStations, updateAllStations] = useState<IAllStation[]>([]);

  const {
    homeState: { searchFormData },
  } = useContext(HomeContext) as IHomeContext;
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

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

  const getAllStations = async () => {
    const response = await getData('vehicle');
    updateAllStations(response);
  };

  useEffect(() => {
    getAllStations();
  }, []);

  const searchButtonClassName = !isValid
    ? 'searchButton disable'
    : 'searchButton';

  const showStationDropdown = allStations.length > 0;
  return (
    <FormProvider {...methods}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <SearchContainer>
          <form onSubmit={handleSubmit(handleSearch)} className="searchForm">
            {showStationDropdown && (
              <Fragment>
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
              </Fragment>
            )}
          </form>
        </SearchContainer>
      </LocalizationProvider>
    </FormProvider>
  );
};

export default Search;
