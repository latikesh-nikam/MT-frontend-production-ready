import { styled } from '@mui/material/styles';

export const RecentBookingsContainer = styled('div')(
  ({ theme }: any) => ` flex: 1;
display: flex;
gap: ${theme.typography.pxToRem(theme.gap.main)};
padding: ${theme.typography.pxToRem(theme.padding.main)};
flex-direction: column;

${theme.breakpoints.down('sm')} {
  max-height: calc(100vh - ${theme.typography.pxToRem(198.25)});

  h2 {
     font-size:${theme.typography.fontSizeMedium};
  }

  `,
);
