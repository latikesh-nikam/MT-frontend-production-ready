import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import i18n from '../../i18n/config';
import { languageConstants } from '../../constants/languageConstants';
import { ILocalisationContext } from './localisationProvider.types';
import { ILocalisationProviderProps } from './localisationProvider.types';
import { ILocalisationState } from './localisationProvider.types';

export const LocalisationContext = createContext<ILocalisationContext | null>(
  null,
);

const LocalisationProvider = ({ children }: ILocalisationProviderProps) => {
  const [localisation, updateLocalisation] = useState<ILocalisationState>({
    language: languageConstants.hindi,
    localString: {},
  });

  useEffect(() => {
    const currentLocalString = i18n.getResourceBundle(
      localisation.language,
      'translations',
    );
    updateLocalisation({ ...localisation, localString: currentLocalString });
  }, [localisation.language]);

  return (
    <LocalisationContext.Provider value={{ localisation, updateLocalisation }}>
      {children}
    </LocalisationContext.Provider>
  );
};

export default LocalisationProvider;
