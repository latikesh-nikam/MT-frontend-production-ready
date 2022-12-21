import { styled } from '@mui/material/styles';

export const MainDivBox = styled('div')(
  ({ theme }: any) => `
  min-width:26rem;
  .formContainer {
    padding:${theme.typography.pxToRem(theme.palette['padding']['secondary'])};
    display: flex;
    flex-direction: column;
  }
  .container{
    border-radius:${theme.typography.pxToRem(
      theme.palette['shape']['borderRadius']['medium'],
    )};
  }
  .formControl {
    min-width: 100%;
  }
  .selectInput {
    margin-top: -${theme.typography.pxToRem(
      theme.palette['margin']['primary'],
    )};
  }
  .mainBox{
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['main'])};
    display: flex;
    flex-direction: column;
    gap:${theme.typography.pxToRem(theme.palette['gap']['main'])};
  }
  .heading{
    color:${theme.palette.primary.main};
    padding-top:${theme.typography.pxToRem(theme.palette['padding']['main'])};
    margin:0;
    text-align:center;
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

`,
);
