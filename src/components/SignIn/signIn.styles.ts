import { styled } from '@mui/material/styles';

export const SignInContainer = styled('div')(
  ({ theme }: any) => `
  display: flex;
  flex-direction: column;
  min-width: 20%;
  padding: ${theme.typography.pxToRem(theme.padding.larger)};
  gap: ${theme.typography.pxToRem(theme.gap.main)};
  box-shadow: ${theme.shadows[6]};
  background:${theme.palette.textColors.white};
  border-radius: 1rem;
  .formHeading{
    color:${theme.palette.primary.main};    
    text-align:center;
  }

  .signInForm {
    display: flex;
    flex-direction: column;
    gap: ${theme.typography.pxToRem(theme.gap.main)};

    ${theme.breakpoints.down('sm')} {
      min-width: 300px;
    }

    .recaptchaContainer {
      display: flex;
      justify-content: center;
    }

    .submitButton {
      min-width: 100%;
    }
  }

  .actions {
    display: flex;
    justify-content: space-between;
  }

`,
);
