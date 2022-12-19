import { styled } from '@mui/material/styles';

export const Container = styled('div')(
  ({ theme }: any) => `
    display:flex;
    align-items:flex-start;
    max-height:100vh;
    margin-top:-5rem;
    margin-left:-4rem;

    ${theme.breakpoints.down('sm')} {
      flex-direction:column;
    }
`,
);
