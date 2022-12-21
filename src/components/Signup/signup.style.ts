import { styled } from '@mui/material/styles';

export const MainDivBox = styled('div')(
  ({ theme }: any) => `
  max-width: ${theme.typography.pxToRem(theme.palette['width']['secondary'])};
  padding:${theme.typography.pxToRem(theme.palette['padding']['primary'])};
  background-color:${theme.palette?.secondary};
  
  .container{
    border-radius:${theme.typography.pxToRem(
      theme.palette['shape']['borderRadius']['small'],
    )};
  }
  
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
    color:${theme.palette.primary.main};
    padding-top:${theme.typography.pxToRem(theme.palette['padding']['main'])};
    margin:0;
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
    padding-bottom:1rem;
    display: flex;
  gap: ${theme.typography.pxToRem(theme.palette['gap']['main'])};

  ${theme.breakpoints.down('sm')} {
    flex-direction:column;
  }
  
  }

  label{
    color:${theme.palette.background.darkgrey};
  }
`,
);
