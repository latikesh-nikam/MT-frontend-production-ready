import { useContext } from 'react';
import { Box } from '@mui/material';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import { Header } from './topbar.style';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import Profile from '../Profile/Profile';

function Topbar() {
  const { localisation } = useContext(
    LocalisationContext,
  ) as ILocalisationContext;
  const { localString } = localisation;
  return (
    <Header>
      <Box className="logoDiv">
        <DirectionsBusFilledIcon className="icon" />
        <h2>{localString?.Mticket}</h2>
      </Box>
      <Profile />
    </Header>
  );
}
export default Topbar;