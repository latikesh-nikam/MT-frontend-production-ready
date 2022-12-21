import { styled } from '@mui/material/styles';

export const BusResultsContainer = styled('div')(
  ({ theme }: any) => `

    flex:1;
    display:flex;
    flex-direction:column;
    gap:${theme.typography.pxToRem(theme.gap.primary)};
    letter-spacing: ${theme.typography.subtitle2.letterSpacing};
    padding:${theme.typography.pxToRem(theme.padding.secondary)};
    max-height: calc(100vh - ${theme.typography.pxToRem(96)});
    overflow-y: scroll;    
`,
);
