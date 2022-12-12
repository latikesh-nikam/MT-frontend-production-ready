import { styled } from '@mui/material/styles';
export const SeatDetailsContainer = styled('div')(
  ({ theme }: any) => `

  .image{
    height:${theme.typography.pxToRem(theme.palette['height']['larger'])};
  }

  .cardContainer{
    max-width:${theme.typography.pxToRem(theme.palette['width']['largest'])};
  }
    `,
);
