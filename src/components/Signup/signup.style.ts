import { styled } from '@mui/material/styles';

export const MainDivBox = styled('div')(
  ({ theme }: any) => `
  max-width: ${theme.typography.pxToRem(theme.palette['width']['secondary'])};
  padding:${theme.typography.pxToRem(theme.palette['padding']['primary'])};
  background-color:${theme.palette?.secondary};

  .formContainer {
    padding:${theme.typography.pxToRem(theme.palette['padding']['main'])};
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .formControl {
    margin-top: ${theme.typography.pxToRem(theme.palette['margin']['primary'])};
    min-width: 100%;
  }
  .selectControl {
        margin-top: ${theme.typography.pxToRem(
          theme.palette['margin']['primary'],
        )};
        min-width: 48.5%;
      }
  .selectInput {
    margin-top: -${theme.typography.pxToRem(
      theme.palette['margin']['primary'],
    )};
  }
  .mainBox{
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['main'])};
  }
  .heading{
    font-size:${theme.typography.fontSizeLarge};
    font-weight:${theme.typography.fontWeightMedium};
  }
  .buttonDiv{
    margin-top: ${theme.typography.pxToRem(
      theme.palette['margin']['secondary'],
    )};
  margin-bottom: ${theme.typography.pxToRem(theme.palette['margin']['main'])};
  }
  .linkDiv{
    text-align: center;
  font-style: italic;
  }
  .recaptchaBox{
    margin-top: ${theme.typography.pxToRem(theme.palette['margin']['main'])};
  display: flex;
  justify-content: center;
  }
  .row{
    display: flex;
  gap: ${theme.typography.pxToRem(theme.palette['gap']['main'])};

  ${theme.breakpoints.down('sm')} {
    flex-direction:column;
  }
  }

`,
);
