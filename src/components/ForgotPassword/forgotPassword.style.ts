import { styled } from '@mui/material/styles';

export const MainDivBox = styled('div')(
  ({ theme }: any) => `
  min-width:26rem;
  .formContainer {
    padding:${theme.typography.pxToRem(theme.palette['padding']['secondary'])};
    display: flex;
    flex-direction: column;
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
    gap:1rem;
  }
  .heading{
    color:${theme.palette.primary.main};
    padding-top:1rem;
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
