import { styled } from '@mui/material/styles';

export const ProfileContainer = styled('div')(
  ({ theme }: any) => `
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: ${theme.typography.pxToRem(theme.palette['padding']['primary'])};

  .profileDetailsContainer{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: ${theme.zIndex['appBar']};
  }

  .profileDetails{
    box-shadow: ${theme.shadows[3]};
    position: absolute;
    top: 8%;
    right: ${theme.typography.pxToRem(theme.palette['padding']['oneForth'])};
    min-width:  ${theme.typography.pxToRem(theme.palette['width']['primary'])};
    background-color:${theme.palette.background.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.typography.pxToRem(theme.palette['padding']['primary'])};
    gap:${theme.typography.pxToRem(theme.palette['gap']['primary'])};
  }

  .actions{
    text-align: center;
  }
  
  .buttonItems{
    display:flex;
    gap:${theme.typography.pxToRem(theme.palette['gap']['main'])};
    color:${theme.palette['textColors']['grey']};
    padding:${theme.typography.pxToRem(theme.palette['padding']['primary'])};
    background-color:${theme.palette['background']['white']};
  }

  .logoutButton,.settingsButton{
    outline: none;
    cursor: pointer;
    font-weight: ${theme.typography.h1.fontWeight};
    border-radius: ${theme.typography.pxToRem(
      theme.palette['shape']['borderRadius'],
    )};
    padding: ${theme.typography.pxToRem(
      theme.palette['padding']['oneForth'],
    )} ${theme.typography.pxToRem(theme.palette['padding']['primary'])};
  }

  .buttonItems:hover{
    background-color:${theme.palette['background']['lightgrey']};
    color:${theme.palette['background']['darkgrey']};
  }

  .accountIcon{
    cursor: pointer;
    font-size: ${theme.typography.h4.fontSize};
    color: ${theme.palette.textColors.white};
  }

  .icon {
    margin-top: ${theme.typography.pxToRem(
      theme.palette['margin']['oneForth'],
    )};
    font-size: ${theme.typography.h2.fontSize};
  }

  .profileIcon{
    font-size:${theme.typography.h1.fontSize};
  }

`,
);
