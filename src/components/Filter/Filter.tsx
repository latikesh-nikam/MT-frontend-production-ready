import { Button, Paper } from '@mui/material';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import FormInputCheckBox from '../FormInputCheckbox/FormInputCheckbox';
import { IFilterInput } from './Filter.types';
import styles from './filter.module.scss';

const Filter = () => {
  const methods = useForm<IFilterInput>();

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<IFilterInput> = data => {
    console.log(data);
  };

  const busTypeOptions = [
    { label: 'AC', value: 'AC' },
    { label: 'Non-AC', value: 'Non-AC' },
    { label: 'Sleeper', value: 'sleeper' },
    { label: 'Seater', value: 'seater' },
  ];

  return (
    <FormProvider {...methods}>
      <Paper className={styles.filter} elevation={3}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.filterForm}>
          <FormInputCheckBox
            options={busTypeOptions}
            name="busType"
            label="Bus Type"
          />
          <Button type="submit" variant="contained">
            Filter
          </Button>
        </form>
      </Paper>
    </FormProvider>
  );
};

export default Filter;
