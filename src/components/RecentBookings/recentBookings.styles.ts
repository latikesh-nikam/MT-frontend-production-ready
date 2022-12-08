import { styled } from '@mui/material/styles';

export const RecentBookingsContainer = styled('div')(
  ({ theme }: any) => `
  flex: 1;
  display: flex;
  gap: ${theme.typography.pxToRem(theme.gap.primary)};
  padding: ${theme.typography.pxToRem(theme.padding.main)};
  flex-direction: column;

  ${theme.breakpoints.down('sm')}{
    align-items:center;
  }

  .cardsContainer{
    padding: ${theme.typography.pxToRem(theme.padding.main)} 0;
    display: flex;
    gap: ${theme.typography.pxToRem(theme.gap.secondary)};
    flex-wrap:wrap;

    ${theme.breakpoints.down('sm')}{
      justify-content:center;
    }
  }
  `,
);
