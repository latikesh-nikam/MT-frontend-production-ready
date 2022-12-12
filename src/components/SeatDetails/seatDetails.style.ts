import { styled } from '@mui/material/styles';
export const SeatDetailsContainer = styled('div')(
  ({ theme }: any) => `

  .image{
    height:${theme.typography.pxToRem(theme.palette['height']['larger'])};
  }

  .cardContainer{
    border:thin solid ${theme.palette.background.lightgrey};
    max-width:${theme.typography.pxToRem(theme.palette['width']['medium'])};
  }
    `,
);
