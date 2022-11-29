import { Box, Button, Paper } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import SearchableDropdown from '../SearchableDropdown/SearchableDropdown';
import styles from './search.module.scss';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { ISearchInput, ISearchProps } from './Search.types';
import DateInput from '../DateInput/DateInput';
import FormInput from '../FormInput/FormInput';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { useContext } from 'react';
import { HomeContext } from '../../context/HomeContext/HomeContext';
import { IHomeContext } from '../../context/HomeContext/homeContext.types';
import { cities } from './search.data';

const Search = ({ handleSearch }: ISearchProps) => {
  const { t } = useTranslation();
  const required = t('required');
  const adultMessage = t('adultMessage');
  const differentCities = t('differentCities');

  const {
    homeState: { searchFormData },
  } = useContext(HomeContext) as IHomeContext;

  console.log(searchFormData);

  const searchSchema = Yup.object({
    from: Yup.string()
      .required(required)
      .notOneOf([Yup.ref('to')], differentCities),
    to: Yup.string()
      .required(required)
      .notOneOf([Yup.ref('from')], differentCities),
    date: Yup.date().required(required),
    adults: Yup.number().required(required).min(1, adultMessage),
    children: Yup.number().required(required),
  });

  const methods = useForm<ISearchInput>({
    resolver: yupResolver(searchSchema),
    defaultValues: searchFormData,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Paper elevation={3} className={styles.search}>
          <form
            onSubmit={handleSubmit(handleSearch)}
            className={styles.searchForm}>
            <Box className={styles.formInput}>
              <SearchableDropdown
                name="from"
                label="from"
                errors={errors}
                searchList={cities}
                defaultValue={searchFormData.from}
              />
            </Box>
            <Box className={styles.formInput}>
              <SearchableDropdown
                name="to"
                label="to"
                errors={errors}
                searchList={cities}
                defaultValue={searchFormData.to}
              />
            </Box>
            <Box className={styles.formInput}>
              <DateInput errors={errors} name="date" label="date" />
            </Box>
            <Box className={styles.passenger}>
              <FormInput
                errors={errors}
                name="adults"
                label="adults"
                type="number"
              />
            </Box>
            <Box className={styles.passenger}>
              <FormInput
                errors={errors}
                name="children"
                label="children"
                type="number"
              />
            </Box>
            <Box className={styles.actions}>
              <Button type="submit" variant="contained">
                {t('search')}
              </Button>
            </Box>
          </form>
        </Paper>
      </LocalizationProvider>
    </FormProvider>
  );
};

export default Search;
