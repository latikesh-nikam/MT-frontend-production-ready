import { styled } from '@mui/material/styles';

export const Container = styled('div')(
  ({ theme }: any) => `
    display:flex;
    align-items:flex-start;
    max-height:100vh;
    margin-top:-${theme.typography.pxToRem(
      theme.palette['margin']['berthLeft'],
    )};
    margin-left:-${theme.typography.pxToRem(
      theme.palette['margin']['berthLeft'],
    )};

    ${theme.breakpoints.down('sm')} {
      flex-direction:column;
    }
`,
);
