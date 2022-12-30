import { styled } from '@mui/material/styles';

export const TicketContainer = styled('div')(
  ({ theme }: any) => `
display:flex;
justify-content:center;
min-height: 100vh;

.downloadButton{
  position:absolute;
  top: 4.1%;
  right: 2%
}

${theme.breakpoints.down('sm')}{
  .downloadButton{
    top:unset;
    position:fixed;
    bottom: 2%;
    right: 2%
  }
}
`,
);
