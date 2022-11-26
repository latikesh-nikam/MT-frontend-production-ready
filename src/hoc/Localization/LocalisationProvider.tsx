import { Fragment, useEffect } from 'react';
import { languageConstants } from '../../constants/languageConstants';
import i18n from '../../i18n/config';
import { ILocalisationProviderProps } from './localisationProvider.types';

const LocalisationProvider = ({ children }: ILocalisationProviderProps) => {
  useEffect(() => {
    i18n.changeLanguage(languageConstants.english);
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default LocalisationProvider;
