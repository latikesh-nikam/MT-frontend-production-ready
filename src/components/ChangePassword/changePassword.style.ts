import { styled } from '@mui/material/styles';

export const MainDivBox = styled('div')(
  ({ theme }: any) => `
  max-width: ${theme.typography.pxToRem(theme.palette['width']['main'])};
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
  .mainBox{
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['main'])};
  }
  .heading{
    color:${theme.palette.primary.main};
    padding-top:1rem;
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
`,
);
