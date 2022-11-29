import { FieldErrorsImpl } from 'react-hook-form';

export interface ISearchableDropdownProps {
  name: string;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  label: string;
  searchList: any[];
  defaultValue: string;
}
