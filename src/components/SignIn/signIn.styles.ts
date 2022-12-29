import { styled } from '@mui/material/styles';

export const SignInContainer = styled('div')(
  ({ theme }: any) => ` display: flex;
flex-direction: column;
padding: ${theme.typography.pxToRem(theme.padding.main)};
gap: ${theme.typography.pxToRem(theme.gap.main)};
box-shadow: ${theme.shadows[6]};
background:${theme.palette.textColors.white};
border-radius:${theme.borderRadius.primary};

.formHeading {
  color:${theme.palette.primary.main};
  text-align:center;
}

.signInForm {
  display: flex;
  flex-direction: column;
  gap: ${theme.typography.pxToRem(theme.gap.main)};

  ${theme.breakpoints.down('sm')} {
     max-width: ${theme.typography.pxToRem(320)};
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
