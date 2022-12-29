import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box/Box';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Button from '@mui/material/Button';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ProfileContainer } from './profile.style';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { logout } from '../../services/auth/auth.service';
import { routes } from '../../constants/route';

function Profile() {
  const [profile, setProfile] = useState(false);
  const navigate = useNavigate();

  const { localisation } = useContext(
    LocalisationContext,
  ) as ILocalisationContext;
  const { localString } = localisation;

  const handleLogout = async () => {
    const response = await logout();
    navigate('/');
  };

  return (
    <ProfileContainer>
      <div>
        <div className="accountIcon" onClick={() => setProfile(true)}>
          <AccountCircleSharpIcon className="profileIcon" />
        </div>
      </div>
      {profile && (
        <div
          className="profileDetailsContainer"
          onClick={event => {
            if (event.target === event.currentTarget) {
              setProfile(false);
            }
          }}>
          <Box className="profileDetails">
            <Button
              className="settingsButton"
              onClick={() => {
                navigate(routes.changePassword);
                setProfile(false);
              }}>
              <Box className="buttonItems">
                <ManageAccountsIcon className="icon" />
                {localString?.settings}
              </Box>
            </Button>
            <Button className="logoutButton" onClick={handleLogout}>
              <Box className="buttonItems">
                <ExitToAppIcon className="icon" />
                {localString?.logout}
              </Box>
            </Button>
          </Box>
        </div>
      )}
    </ProfileContainer>
  );
}
export default Profile;
